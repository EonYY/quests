import { CancelOutlined } from "@mui/icons-material"
import { Box, Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from "@mui/material"




export default props => (
    <Dialog open={!!Object.keys(props.job).length} fullWidth>
        <DialogTitle>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                Job Title
                <IconButton>
                    <CancelOutlined />
                </IconButton>
            </Box>
        </DialogTitle>
        <DialogContent>
            <DialogActions>

            </DialogActions>
        </DialogContent>
    </Dialog>
)