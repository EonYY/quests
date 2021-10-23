import { 
    TextField, 
    IconButton, 
    Box, 
    Grid, 
    MenuItem, 
    Dialog, 
    DialogTitle, 
    DialogContent, 
    DialogActions, 
} from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from "@mui/icons-material/Send";
import CloseIcon from '@mui/icons-material/Close';
import { useState, useEffect } from "react";


const initState = {
    title: "",
    category: "",
    companyName: "",
    companyURL: "",
    location: "",
    type: "",
    description: "",
    remote: {},
}

export default function NewJobModal(props) {
    const [loading, setLoading] = useState(false);
    const [jobDetails, setJobDetails] = useState(initState);

    function handleChange(e) {
        setJobDetails(oldState => ({ 
            ...oldState, 
            [e.target.name]: e.target.value, 
        }));
    };

    const handleSubmit = async () => {
        setLoading(true);
        await props.postJob(jobDetails);
        setLoading(false);
    }

    const closeNewJobModal = () => {
        setJobDetails(initState);
        setLoading(false);
        props.closeNewJobModal();
    }

        return (
            <Dialog 
                open={props.openNewJobModal} 
                onClose={props.closeNewJobModal}
                fullWidth
            >
                <DialogTitle>
                    <Box
                        display="flex" 
                        justifyContent="space-between" 
                        alignItems="center"
                    >
                        New Job
                        <IconButton onClick={closeNewJobModal}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                </DialogTitle>
                <DialogContent dividers>
                    <Grid container spacing={2}>

                        {/*Job Title*/}
                        <Grid item xs={6}>
                            <TextField
                                autoFocus
                                required
                                name="title"
                                value={jobDetails.title}
                                onChange={handleChange}
                                InputProps={{ disableUnderline: true }}
                                autoComplete="off"
                                margin="dense"
                                label="Title"
                                fullWidth
                                variant="filled"
                                size="small"
                                placeholder="Ex: 3D Character Artist"
                            />
                        </Grid>

                        {/* Job Category*/}
                        <Grid item xs={6}>
                            <TextField
                                required
                                select
                                name="category"
                                value={jobDetails.category}
                                onChange={handleChange}
                                InputProps={{ disableUnderline: true }}
                                margin="dense"
                                label="Category"
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

                        {/* Company Name */}
                        <Grid item xs={6}>
                            <TextField
                                required
                                name="companyName"
                                value={jobDetails.companyName}
                                onChange={handleChange}
                                type="text"
                                InputProps={{ disableUnderline: true }}
                                autoComplete="off"
                                margin="dense"
                                label="Company Name"
                                fullWidth
                                variant="filled"
                                size="small"
                                placeholder="Ex: Star Mountain Games"
                            />
                        </Grid>

                        {/* Company URL */}
                        <Grid item xs={6}>
                            <TextField
                                required
                                name="companyURL"
                                value={jobDetails.companyURL}
                                onChange={handleChange}
                                type="url"
                                InputProps={{ disableUnderline: true }}
                                autoComplete="off"
                                margin="dense"
                                label="Company URL"
                                fullWidth
                                variant="filled"
                                size="small"
                                placeholder="Ex: https://stmgames.com"
                            />
                        </Grid>

                        {/* Job Location */}
                        <Grid item xs={6}>
                            <TextField
                                required
                                name="location"
                                value={jobDetails.location}
                                onChange={handleChange}
                                type="text"
                                InputProps={{ disableUnderline: true }}
                                autoComplete="off"
                                margin="dense"
                                label="Job Location"
                                fullWidth
                                variant="filled"
                                size="small"
                                placeholder="Ex: Tokyo, Japan"
                            />
                        </Grid>

                        {/* Job Type */}
                        <Grid item xs={3}>
                            <TextField
                                required
                                select
                                name="type"
                                value={jobDetails.type}
                                onChange={handleChange}
                                type="text"
                                InputProps={{ disableUnderline: true }}
                                margin="dense"
                                label="Type"
                                fullWidth
                                variant="filled"
                                size="small"
                            >
                                <MenuItem value="Full Time">Full Time</MenuItem>
                                <MenuItem value="Part Time">Part Time</MenuItem>
                                <MenuItem value="Contract">Contract</MenuItem>
                                <MenuItem value="Freelance">Freelance</MenuItem>
                                <MenuItem value="Internship">Internship</MenuItem>
                            </TextField>
                        </Grid>

                        {/* Remote Job? */}
                        <Grid item xs={3}>
                            <TextField
                                required
                                select
                                name="remote"
                                value={jobDetails.remote}
                                onChange={handleChange}
                                InputProps={{ disableUnderline: true }}
                                margin="dense"
                                label="Remote?"
                                fullWidth
                                variant="filled"
                                size="small"
                            >
                                <MenuItem value={true}>Yes</MenuItem>
                                <MenuItem value={false}>No</MenuItem>
            
                            </TextField>
                        </Grid>

                        {/* Job Description */}
                        <Grid item xs={12}>
                            <TextField
                                required
                                multiline
                                name="description"
                                value={jobDetails.description}
                                onChange={handleChange}
                                rows={4}
                                type="text"
                                InputProps={{ disableUnderline: true }}
                                autoComplete="off"
                                margin="dense"
                                label="Description"
                                fullWidth
                                variant="filled"
                                size="small"
                                placeholder="Ex: Tokyo, Japan"
                            />
                        </Grid>
                        
                    </Grid>
                </DialogContent>

                {/* Submit Job Button */}
                <DialogActions>
                    <Box width="100%" display="flex" justifyContent="center" alignItems="center">
                        <LoadingButton
                            loading={loading}
                            loadingPosition="end"
                            onClick={handleSubmit} 
                            variant="contained"
                            endIcon={<SendIcon />}
                        >
                            Submit
                        </LoadingButton>
                    </Box>
                </DialogActions>
            </Dialog>
        )
    }