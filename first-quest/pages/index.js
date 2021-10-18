import { Grid, Paper, Container} from '@mui/material'
import JobCard from "../components/Job/JobCard";
import Head from 'next/head'
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import { firebaseApp } from '../firebase/clientApp';
import { useState, useEffect } from 'react';




export default function Home() {
  const db = getFirestore(firebaseApp);
  const q = query(collection(db, "jobs"));
  console.log(q);

  const [jobs, setJobs] = useState([]);
  
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
