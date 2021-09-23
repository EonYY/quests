import JobCard from "../components/Job/JobCard";
import { Grid, Paper, Container} from '@mui/material'
import { useState, useEffect } from 'react'


export default function Home() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/jobs')
      .then(res => res.json())
      .then(data => setJobs(data))
  }, [])


  const handleDelete = async (id) => {
    await fetch('http://localhost:8000/jobs/' + id, {
      method: 'DELETE'
    })
    const newJobs = jobs.filter(job => job.id != id)
    setJobs(newJobs)
  }


  return (
    <Container>
      <Grid container spacing={3} justify="center">

        {jobs.map(job => (
          <Grid item key={job.id} xs={12} md={8}>
            <JobCard job={job} handleDelete={handleDelete}/>
          </Grid>
        ))}


        <Grid item xs={12} md={4} justify="center">
          <Paper>News / Promoted</Paper>
        </Grid>

    </Grid>
  </Container>
  )
}
