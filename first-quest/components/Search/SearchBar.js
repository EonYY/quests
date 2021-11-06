import { TextField, InputAdornment, IconButton, Box, MenuItem, Grid, Button, CircularProgress } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useState } from "react"

export default function SearchBar(props) {
    const [loading, setLoading] = useState(false);
    const [jobSearch, setJobSearch] = useState({
        type: '',
        location: '',
    });

    function handleChange(e) {
        setJobSearch(oldState => ({ 
            ...oldState, 
            [e.target.name]: e.target.value, 
        }));
    };

    const search = async () => {
        setLoading(true);
        await props.fetchJobsCustom(jobSearch);
        setLoading(false);
    }

    return (
        <Box>
            <Grid 
                container 
                spacing={3}
                display="flex"
                justifyContent="center"
                alignItems="center"
            >

                {/* Job search field */}
                <Grid item xs={3.5}>
                    <TextField
                        hiddenLabel
                        fullWidth
                        type="text"
                        placeholder="Search"
                        variant="filled"
                        size="small"
                        InputProps={{ 
                            disableUnderline: true,
                            startAdornment: <InputAdornment position="start">
                                                <IconButton
                                                aria-label="Search job listings"
                                                edge="start"
                                                >
                                                    <SearchIcon />
                                                </IconButton>
                                            </InputAdornment>
                        }}
                    />
                </Grid> 

                {/* Job category field */}
                <Grid item xs={3.5}>
                    <TextField
                        select
                        fullWidth
                        hiddenLabel
                        onChange={handleChange}
                        name="type"
                        value={jobSearch.type}
                        defaultValue="none"
                        size="small"
                        variant="filled"
                    >
                        <MenuItem value="none" disabled>Category</MenuItem>
                        <MenuItem value="Game Development">Game Development</MenuItem>
                        <MenuItem value="eSports">eSports</MenuItem>
                        <MenuItem value="Customer Service">Customer Service</MenuItem>
                        <MenuItem value="Business">Business</MenuItem>
                    </TextField>
                </Grid>


                {/* Job location field */}
                <Grid item xs={3.5}>
                    <TextField
                        fullWidth
                        hiddenLabel
                        onChange={handleChange}
                        name="location"
                        value={jobSearch.location}
                        type="text"
                        placeholder="Location"
                        size="small"
                        variant="filled"
                        InputProps={{ 
                            disableUnderline: false,
                            startAdornment: <InputAdornment position="start">
                                                <IconButton
                                                aria-label="Filter job location"
                                                edge="start"
                                                >
                                                    <LocationOnIcon />
                                                </IconButton>
                                            </InputAdornment>
                        }}
                    />
                </Grid>

                {/* Job search button */}
                <Grid item xs={1.5}>
                    <Button
                        variant="contained"
                        color="primary"
                        disabled={loading}
                        onClick={search}
                    >
                        {loading ? (
                            <Box display="flex" justifyContent="center">
                                <CircularProgress color="secondary" />
                            </Box>
                        ) : (
                            "Search"
                        )}
                    </Button>
                </Grid>

            </Grid>
        </Box>
    )
}

