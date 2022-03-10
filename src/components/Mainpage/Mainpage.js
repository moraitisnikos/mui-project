import { Button, ButtonBase, Container, Divider, Grid, ImageList, ImageListItem, Link, makeStyles, Modal, TextField, Typography , withStyles } from '@material-ui/core';
import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import FeedbackIcon from '@material-ui/icons/Feedback';
import PersonalVideoIcon from '@material-ui/icons/PersonalVideo';
import ContactsIcon from '@material-ui/icons/Contacts';
import PhotoIcon from '@material-ui/icons/Photo';
import Paper from '@material-ui/core/Paper';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}))(Badge);

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridGap: theme.spacing(3),
        textAlign: 'center',
        position: 'relative',
      },
    main:{
        paddingTop: theme.spacing(7),
    },
    content:{
        marginBottom: theme.spacing(6),
    },
    text:{ 
        display: 'grid',
        direction: 'column',
        cursor: 'pointer',
        marginTop: '10px',
        '&:hover':{
            backgroundColor: '#111',
            color: 'white',
        },
        [theme.breakpoints.down('sm')]: {
          display: 'none',
        }
    },
    itemleft:{
        backgroundColor: theme.palette.primary.main,
        height: '100 vh',
    },
    icon:{
      display: 'none',
      [theme.breakpoints.down('sm')]: {
        display: 'block',
      }
    },
    rightbar:{
      marginTop: theme.spacing(2),
      backgroundColor: theme.palette.grey[300]
    },
    onlinefriends:{
      marginLeft: 10 
    },
    gallery:{
      marginTop: theme.spacing(1),
    },
    gallerytext:{
      marginLeft: 10
    },
    link:{
      marginLeft: theme.spacing(2),
      [theme.breakpoints.down('sm')]: {
        display: 'grid',
      }
    },
    form:{
      marginTop: theme.spacing(1),
      display: 'grid'
    },
    fieldtext:{
      padding: 6
    },
    btn:{
      justifySelf: 'center'      
    },
    hideimg:{
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      }
    },
    imglist:{
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      }
    },

}))


const SmallAvatar = withStyles((theme) => ({
  root: {
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.paper}`,
  },
}))(Avatar);



export default function Mainpage(){

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

    return(
        <div className={classes.main}>
            <Grid container>
                <Grid item xs={2} className={classes.itemleft}>
                    <div className={classes.content}>
                    <Typography variant='body1' className={classes.text}>
                        Profile
                    </Typography>
                    <PersonIcon className={classes.icon}/>
                    </div>
                    <div className={classes.content}>
                    <Typography variant='body1' className={classes.text}>
                        Feed
                    </Typography>
                    <FeedbackIcon className={classes.icon}/>
                    </div>
                    <div className={classes.content}>
                    <Typography variant='body1' className={classes.text}>
                        Personal blog
                    </Typography>
                    <PersonalVideoIcon className={classes.icon}/>
                    </div>
                    <div className={classes.content}>
                    <Typography variant='body1' className={classes.text}>
                        Friends
                    </Typography>
                    <ContactsIcon className={classes.icon}/>
                    </div>
                    <div className={classes.content}>
                    <Typography variant='body1' className={classes.text}>
                        All photos
                    </Typography>
                    <PhotoIcon className={classes.icon}/>
                    </div>
                </Grid>
                <Grid item xs={8}>
                  <div>
                    <Paper elevation={3} className={classes.paper}>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Typography className={classes.heading}>Accordion 1</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel2a-content"
                          id="panel2a-header"
                        >
                          <Typography className={classes.heading}>Accordion 2</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel3a-content"
                          id="panel3a-header"
                        >
                          <Typography className={classes.heading}>Accordion 3</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                      <img style={{width : "1500px"}} className={classes.hideimg} src='https://global.hurtigruten.com/globalassets/photos/inspiration/northern-lights/hub/aurora-borealis-above-snowy-island-vestvagoya-lofoten_swen-stroop.jpg?width=1900&height=950&transform=DownFill'/>
                      <form className={classes.form}>
                      <TextField id="outlined-basic" label="First Name" variant="outlined" className={classes.fieldtext}/>
                      <TextField id="outlined-basic" label="Last Name" variant="outlined" className={classes.fieldtext}/>
                      <TextField id="outlined-basic" label="Email" variant="outlined" className={classes.fieldtext}/>
                      <TextField
                        id="filled-full-width"
                        label="Questions"
                        style={{ margin: 8 , maxWidth: '1000px' }}
                        placeholder="Any questions that you have"
                        margin="normal"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        variant="outlined"
                        className={classes.fieldtext}
                      />
                      <Button variant="contained" color="primary" className={classes.btn} style={{ width: '100px'}} onClick= {setOpen}>
                        Submit
                      </Button>
                      <Snackbar
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'left',
                        }}
                        open={open}
                        autoHideDuration={1000}
                        onClose={handleClose}
                        message="Thank you for sending us a message!!!"
                        action={
                          <React.Fragment>
                            <Button color="secondary" size="small" onClick={handleClose}>
                              UNDO
                            </Button>
                            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                              <CloseIcon fontSize="small" />
                            </IconButton>
                          </React.Fragment>
                        }
                      />
                      </form>
                    </Paper>
                  </div>
                </Grid>
                <Grid item xs={2}>
                  <div className={classes.rightbar} style={{ height: '100vh'}}>
                    <Typography
                    variant='body1'
                    component='h1'
                    className={classes.onlinefriends}
                    >
                      Online friends
                    </Typography>
                    <StyledBadge
                      overlap="circular"
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                      }}
                      variant="dot"
                    >
                      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </StyledBadge>
                    <Badge
                      overlap="circular"
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                      }}
                      badgeContent={<SmallAvatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />}
                    >
                      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                    </Badge>
                    <StyledBadge
                      overlap="circular"
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                      }}
                      variant="dot"
                    >
                      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </StyledBadge>
                    <Badge
                      overlap="circular"
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                      }}
                      badgeContent={<SmallAvatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />}
                    >
                      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                    </Badge>
                      <div className={classes.gallery}>
                        <Typography
                        variant='body1'
                        className={classes.gallerytext}
                        >
                          Your gallery
                        </Typography>
                        <ImageList rowHeight={100} cols={2} className={classes.imglist}>
                          <ImageListItem>
                            <img src='https://v4.mui.com/static/images/image-list/morning.jpg' />
                          </ImageListItem>
                          <ImageListItem>
                            <img src='https://v4.mui.com/static/images/image-list/morning.jpg' />
                          </ImageListItem>
                          <ImageListItem>
                            <img src='https://v4.mui.com/static/images/image-list/morning.jpg' />
                          </ImageListItem>
                          <ImageListItem>
                            <img src='https://v4.mui.com/static/images/image-list/morning.jpg' />
                          </ImageListItem>
                        </ImageList>
                    </div>
                    <Link href="#" className={classes.link} variant='body2'>
                      Link
                    </Link>
                    <Link href="#" className={classes.link} variant='body2'>
                      Link
                    </Link>
                    <Divider/>
                    <Link href="#" className={classes.link} variant='body2'>
                      Link
                    </Link>
                    <Link href="#" className={classes.link} variant='body2'>
                      Link
                    </Link>
                  </div>
                </Grid>
            </Grid>
        </div>
    )
}