import JobCard from "../components/JobCard";
import { Grid, Paper, Container} from '@mui/material'
import { useState, useEffect } from 'react'


export default function Home() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/jobs')
      .then(res => res.json())
      .then(data => setJobs(data))
  }, [])


  return (
    <Container>
      <Grid container>

        {jobs.map(job => (
          <Grid item key={job.id} xs={12} md={8}>
            <JobCard job={job} />
          </Grid>
        ))}


        <Grid item xs={12} md={4}>
          <Paper>News / Promoted</Paper>
        </Grid>

    </Grid>
  </Container>
  )
}
