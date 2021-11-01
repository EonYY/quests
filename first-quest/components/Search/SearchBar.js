import { TextField, InputAdornment, IconButton, Box, MenuItem, Grid } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useState } from "react"

export default function SearchBar() {
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

console.log(jobSearch)

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
            <Grid item xs={4}>
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
            <Grid item xs={4}>
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
            <Grid item xs={4}>
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

            </Grid>
        </Box>
    )
}

