import { useState, useEffect } from 'react';
import { Grid, Paper, Container, CircularProgress, Button } from '@mui/material'
import JobCard from "../components/Job/JobCard";
import Head from 'next/head'
import { firebaseApp } from '../firebase/clientApp';
import { getFirestore, collection, query, getDocs, orderBy, addDoc, serverTimestamp } from "firebase/firestore";
import { Box } from '@mui/system';
import NewJobModal from '../components/Job/NewJobModal';
import Layout from '../components/Layout';



export default function Home() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openNewJobModal, setOpenNewJobModal] = useState(false)

  const db = getFirestore(firebaseApp);
  const getJobs = query(collection(db, "jobs"), orderBy('datePosted', 'desc'));


  // Fetch jobs from database, including job ID and date
  const fetchJobs = async () => {
    const req = await getDocs(getJobs);
    const tempJobs = req.docs.map((job) => ({ 
      ...job.data(),
      id: job.id,
      datePosted: job.data().datePosted.toDate(), 
    }));
    setJobs(tempJobs);
    setLoading(false);
  };


  // Post job to database, including job ID and date
  const postJob = async jobDetails => {
    await addDoc(collection(db, "jobs"), {
      ...jobDetails,
      datePosted: serverTimestamp()
    })
  }


  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <Layout openNewJob={() => setOpenNewJobModal(true)}>
    <Container>
      <Head>
        <title>Quests ~ Gaming Jobs</title>
      </Head>

      {/*Modal that appears when a user wants to post a new job listing */}
      <NewJobModal 
        closeNewJobModal={() => setOpenNewJobModal(false)} 
        openNewJobModal={openNewJobModal} 
        postJob={postJob} 
      />

      {/*Display job cards or loading bar*/}
      <Grid container spacing={3} justify="center">
        <Grid item xs={12} md={8}>
          {loading ? (
          <Box display="flex" justifyContent="center">
            <CircularProgress color="secondary" />
          </Box>
          ) : (jobs.map((job) => 
            <JobCard key={job.id} {...job} />
          ))}
        </Grid>

        <Grid item xs={12} md={4} justify="center">
          <Paper>News / Promoted</Paper>
        </Grid>
      </Grid>
    </Container>
    </Layout>
  )
}
