import { useState, useEffect } from 'react';
import { Grid, Paper, Container} from '@mui/material'
import JobCard from "../components/Job/JobCard";
import Head from 'next/head'
import { firebaseApp } from '../firebase/clientApp';
import { getFirestore, collection, query, getDocs, orderBy } from "firebase/firestore";


export default function Home() {
  const [jobs, setJobs] = useState([]);

  const db = getFirestore(firebaseApp);
  const getJobs = query(collection(db, "jobs"), orderBy('datePosted', 'desc'));


  const fetchJobs = async () => {
    const req = await getDocs(getJobs);
    const tempJobs = req.docs.map((job) => ({ ...job.data(), id: job.id }));
    setJobs(tempJobs);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  console.log(jobs)

  return (
    <Container>
      <Head>
        <title>Quests ~ Gaming Jobs</title>
      </Head>

      <Grid container spacing={3} justify="center">
        <Grid item xs={12} md={8} >
          {jobs.map((job) => (
                <JobCard key={job.id} {...job} />
          ))}
        </Grid>

        <Grid item xs={12} md={4} justify="center">
          <Paper>News / Promoted</Paper>
        </Grid>
      </Grid>
    </Container>
  )
}
