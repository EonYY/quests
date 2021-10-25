import { TextField, InputAdornment, IconButton, Box, MenuItem, Grid } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar() {
    return (
        <Box>
            <Grid container spacing={3}>

            {/* Job search field */}
            <Grid item xs={3.5}>
                <TextField
                    hiddenLabel
                    type="text"
                    placeholder="Search"
                    variant="filled"
                    size="small"
                    InputProps={{ 
                        disableUnderline: true,
                        startAdornment: <InputAdornment position="start">
                                            <IconButton
                                            aria-label="search job listings"
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
                    hiddenLabel
                    fullWidth
                    placeholder="Category"
                    defaultValue="Game Development"
                    size="small"
                    variant="outlined"
                >
                    <MenuItem value="Game Development">Game Development</MenuItem>
                    <MenuItem value="eSports">eSports</MenuItem>
                    <MenuItem value="Customer Service">Customer Service</MenuItem>
                    <MenuItem value="Business">Business</MenuItem>
                </TextField>
            </Grid>

            {/* Job location field */}
            <Grid item xs={3.5}>

            </Grid>

            {/* Job filter icons */}
            <Grid item xs={1.5}>

            </Grid>

            </Grid>
        </Box>
    )
}

