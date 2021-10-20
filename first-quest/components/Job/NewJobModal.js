import { TextField, FormControl, Box, Grid, FilledInput, Select, MenuItem, Dialog, DialogTitle, DialogContent, DialogActions, InputLabel } from "@mui/material"



export default function NewJobModal() {
    return (
        <Dialog open={true} fullWidth>
            <DialogTitle>New Job</DialogTitle>
            <DialogContent>
                <Grid container spacing={2}>

                    <Grid item xs={6}>
                        <TextField
                            autoFocus
                            disableUnderline
                            required
                            autoComplete="off"
                            margin="dense"
                            label="Job Title"
                            fullWidth
                            variant="filled"
                            size="small"
                            placeholder="Ex: 3D Character Artist"
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <TextField
                            autoFocus
                            disableUnderline
                            required
                            select
                            margin="dense"
                            label="Job Category"
                            fullWidth
                            variant="filled"
                            size="small"
                        >
                            <MenuItem value="Game Development">Game Development</MenuItem>
                            <MenuItem value="eSports">eSports</MenuItem>
                            <MenuItem value="Customer Service">Customer Service</MenuItem>
                            <MenuItem value="Business">Business</MenuItem>
                        </TextField>
                    </Grid>
                    
                </Grid>
            </DialogContent>
        </Dialog>
    )
}