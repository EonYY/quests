import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import { CardActionArea, CardMedia } from '@mui/material'
import { CardActions } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { makeStyles } from '@mui/styles'
import Avatar from '@mui/material/Avatar'
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone'
import ShareTwoToneIcon from '@mui/icons-material/ShareTwoTone'





const useStyles = makeStyles({
  root: {
    minWidth: 600,
    maxHeight: 150,
    backgroundColor: "#fefeff",
  },
  media: {
    objectFit: "contain",
    height: "100%",
    width: "100%"
  }
})

export default function JobCard({ job }) {
  const classes = useStyles()

    return (
      <Card elevation={8} className={classes.root}>
        <CardActionArea>
          <Grid container>

            {/*Left Side*/}
            <Grid 
              item xs={3} 
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <CardMedia
                className={classes.media}
                image="https://pixabay.com/get/ge66ccf4e98a7479c3469b474250b59d8a9ba0ca945148ce754c60e4df27d666a5ea09295aa784b53df0e6403e6aded0c_640.png"
                alt={job.companyName}
              />
            </Grid>


            {/*Middle*/}
            <Grid 
              item xs={5}
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
                <CardHeader
                  title={job.title}
                  subheader={job.companyName + " • "}
                />
            </Grid>


            {/*Right Side*/}
            <Grid
              item xs={4}
              container
              direction="column"
              justifyContent="space-between"
              alignItems="flex-end"
            >
              <CardActions disableSpacing>
                <IconButton aria-label="Add to Favorites">
                  <FavoriteTwoToneIcon />
                </IconButton>
                <IconButton aria-label="Share">
                  <ShareTwoToneIcon />
                </IconButton>
              </CardActions>
              <CardHeader subheader={job.type + " • " + job.location}/>
              <CardHeader />
            </Grid>

          </Grid>
        </CardActionArea>
      </Card>
    )
}