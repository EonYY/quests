import { TextField, InputAdornment, IconButton } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar(props) {
    return (
        <TextField
            hiddenLabel
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
    )
}

