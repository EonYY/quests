import { Box, Grid, FilledInput, Select, MenuItem, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/core"



export default function NewJobModal() {
    return (
        <Dialog>
            <DialogTitle>New Job</DialogTitle>
            <DialogContent>
                <Grid container>
                    <Grid item xs={6}>
                        <FilledInput placeholder="Job Title" />
                    </Grid>
                </Grid>
            </DialogContent>
        </Dialog>
    )
}