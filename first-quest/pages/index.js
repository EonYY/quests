import { useState, useEffect } from 'react';
import { Grid, Paper, Container, CircularProgress, Button } from '@mui/material'
import JobCard from "../components/Job/JobCard";
import Head from 'next/head'
import { firebaseApp } from '../firebase/clientApp';
import { getFirestore, collection, query, getDocs, orderBy, addDoc, serverTimestamp, where } from "firebase/firestore";
import { Box } from '@mui/system';
import NewJobModal from '../components/Job/NewJobModal';
import Layout from '../components/Layout';
import SearchBar from '../components/Search/SearchBar';
import CloseIcon from '@mui/icons-material/Close';



export default function Home(props) {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [customSearch, setCustomSearch] = useState(false);
  const [showNewJobModal, setShowNewJobModal] = useState(false)

  const db = getFirestore(firebaseApp);
  const getJobs = query(collection(db, "jobs"), orderBy('datePosted', 'desc'));

  // Fetch jobs from database, including job ID and date
  const fetchJobs = async () => {
    setCustomSearch(false);
    setLoading(true);
    const req = await getDocs(getJobs);
    const tempJobs = req.docs.map((job) => ({ 
      ...job.data(),
      id: job.id,
      datePosted: job.data().datePosted.toDate(), 
    }));
    setJobs(tempJobs);
    setLoading(false);
  };

  // Fetch custom search jobs from database, including job ID and date
  const fetchJobsCustom = async (jobSearch) => {
    setLoading(true);
    setCustomSearch(true);
    const req = await getDocs(query(
      collection(db, "jobs"), 
      orderBy('datePosted', 'desc'), 
      where('type', '==', jobSearch.type), 
      where('location', '==', jobSearch.location)
      ));
    const tempJobs = req.docs.map((job) => ({ 
      ...job.data(),
      id: job.id,
      datePosted: job.data().datePosted.toDate(), 
    }));
    setJobs(tempJobs);
    setLoading(false);
  }


  // Post job to database, including job ID and date
  const postJob = async jobDetails => {
    await addDoc(collection(db, "jobs"), {
      ...jobDetails,
      datePosted: serverTimestamp()
    });
    fetchJobs();
  };


  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <Layout setShowNewJobModal={setShowNewJobModal}>
      <Head>
        <title>Quests ~ Gaming Jobs</title>
      </Head>

      {/*Modal that appears when a user wants to post a new job listing */}
      <NewJobModal
        showNewJobModal={showNewJobModal}
        closeModal={() => setShowNewJobModal(false)}
        postJob={postJob} 
      />

      <Grid container spacing={3} p={3}>

        {/* Display job cards and search bar */}
        <Grid item container xs={12} md={8} spacing={5}>
          <Grid item xs={12}>
            <SearchBar fetchJobsCustom={fetchJobsCustom} />
          </Grid>
          {loading ? (
            <Box display="flex" justifyContent="center">
              <CircularProgress color="secondary" />
            </Box>
            ) : (
              <>
              {customSearch && (
              <Box display="flex" justifyContent="flex-end" my={2}>
                <Button onClick={fetchJobs}>
                  <CloseIcon size={20} />
                  Custom Search
                </Button>
              </Box>
              )}

              {jobs.map((job) => (
                  <Grid item xs={12}>
                    <JobCard key={job.id} {...job} />
                  </Grid>
                  ))}
                </>
              )}
        </Grid>


        <Grid item xs={12} md={4} justify="center">
          <Paper>News / Promoted</Paper>
        </Grid>
        
      </Grid>
    </Layout>
  )
}
