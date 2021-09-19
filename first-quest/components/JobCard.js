import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import DeleteOutlined from '@material-ui/icons/DeleteOutlined'
import { makeStyles } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import { yellow, green, pink, blue } from '@mui/material/colors'

const useStyles = makeStyles({
  avatar: {
    backgroundColor: (job) => {
      if (job.category == 'work') {
        return yellow[700]
      }
      if (job.category == 'money') {
        return green[500]
      }
      if (job.category == 'todos') {
        return pink[500]
      }
      return blue[500]
    },
  }
})

export default function jobCard({ job, handleDelete }) {
  const classes = useStyles(job)

  return (
    <div>
      <Card elevation={1}>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar}>
              {job.category[0].toUpperCase()}
            </Avatar>}
          action={
            <IconButton onClick={() => handleDelete(job.id)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={job.title}
          subheader={job.category}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            { job.details }
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}