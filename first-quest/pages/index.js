import JobCard from "../components/JobCard";
import { Grid, Paper, Container} from '@mui/material'


export default function Home() {
  return (
    <Container>
      <Grid container>


      {/* 
      {jobs.map(job => (
        <Grid item key={job.id} xs={12} md={8}>
          <JobCard job={job} />
        </Grid>
      ))}


      */}

        <Grid item xs={12} md={8}>
          <Paper>
            <JobCard />
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper>2</Paper>
        </Grid>


    </Grid>
  </Container>
  )
}
