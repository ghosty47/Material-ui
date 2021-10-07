import './App.css';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button  } from '@material-ui/core'
import { PhotoCamera } from '@material-ui/icons'
import useStyles from './styles'
// import Skeleton from "@material-ui/lab/Skeleton";


const cards = [1,2,3,4,5,6,7,8,9]

function App() {
  const classes = useStyles()
  return (
    <>
      <CssBaseline/>
      <AppBar position='relative'>
        <Toolbar>
          <PhotoCamera className={classes.icon}/>
          <Typography>
            Photo Album
          </Typography>
        </Toolbar>
      </AppBar>

      <main>
        <div className={classes.container}>
          <Container maxWidth='sm'>
            <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
              Photo Album
            </Typography>

            <Typography variant='h5' align='center' color='text' paragraph>
              Hello everyone, sdfsfdlfdsjfsdffjsflj sdfkdfjsjfsfdfdsdfsfk sdfjsfsdfljflsjfdf slkdfjlfjdjsjdfls
            </Typography>

            <div className={classes.buttons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant='contained' color='primary'>
                    See my photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant='outlined' color='primary'>
                    Secondaary actions
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>

        <Container className={classes.cardGrid} maxWidth='md'>
          <Grid container spacing={4}>
            {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={3}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image='https://source.unsplash.com/random'
                      title='image title'
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography variant='h5' gutterBottom>
                        Heading 
                      </Typography>
                      <Typography>
                        This is a media card, do whatever you want
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size='small' color='primary'>
                        View
                      </Button>
                      <Button size='small' color='primary'>
                        Edit
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
            ))}

          </Grid>
        </Container>
      </main>

      <footer className={classes.footer}>
        <Typography variant='h6' align='center' gutterBottom>
          Footer
        </Typography>
        <Typography variant='subtitle1' align='center' color='primary'>
        Place your customizable footer here!
        </Typography>
      </footer>
    </>
  );
}

export default App;
