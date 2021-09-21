import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import DeleteOutlined from '@mui/icons-material/DeleteOutlined'
import { makeStyles } from '@mui/styles'
import Avatar from '@mui/material/Avatar'



export default function JobCard() {

    return (
      <Card elevation={8}>
        <Grid container>

          <Grid item xs>
            <CardHeader
              title="Job Title"
              subheader="Company Name"
            />
          </Grid>

          <Grid item xs>
            <CardHeader
              title="Job Title"
              subheader="Company Name"
            />
          </Grid>

          <Grid item xs>
            <CardHeader
              title="Job Title"
              subheader="Company Name"
            />
          </Grid>


        </Grid>
      </Card>
    )
}