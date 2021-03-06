import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import { CardActionArea, CardMedia } from '@mui/material'
import { CardActions } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import Grid from '@mui/material/Grid'
import { makeStyles } from '@mui/styles'
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone'
import ShareTwoToneIcon from '@mui/icons-material/ShareTwoTone'
import { differenceInMinutes, differenceInHours, differenceInDays } from 'date-fns'



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

export default function JobCard(job) {
  const classes = useStyles();
  const jobListingURL = "localhost:3000/" + [job.id];

  const openJobListing = () => {
    window.open(jobListingURL, false);
  }

    return (
      <Card elevation={8} className={classes.root}>
        <CardActionArea onClick={openJobListing}>
          <Grid container>

            {/*Left Side*/}
            <Grid 
              item xs={2} 
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <CardMedia
                className={classes.media}
                image="#"
                alt={job.companyName}
              />
            </Grid>


            {/*Middle*/}
            <Grid 
              item xs={6}
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
                <CardHeader
                  title={job.title}
                  subheader={
                    job.companyName + 
                    " • " + 
                    differenceInMinutes(Date.now(), job.datePosted) + " mins ago"
                  }
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