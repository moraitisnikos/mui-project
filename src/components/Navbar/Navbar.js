import { AppBar, Avatar, Grid, InputBase, makeStyles, TextField, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import avatar from './avatar.png'


const useStyles = makeStyles((theme) =>({
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridGap: theme.spacing(3),
        textAlign: 'center',
        position: 'relative',
      },
    home:{
        marginTop: '5px'
    },
    search:{
        display: 'grid',
        justifyContent: 'center',
    },
    searchinput: {
        color: 'white',
        marginLeft: theme.spacing(2),
        border: '2px solid black',
        borderRadius: 16,
    },
}))

export default function Navbar(){

    const classes = useStyles();

    return (
        <div>
            <AppBar position='fixed'>
                <Toolbar>
                    <Grid container >
                        <Grid item xs={2}>
                            <Typography variant='body1' className={classes.home}>
                                Home
                            </Typography>
                        </Grid>
                        <Grid item xs={7}>
                            <div className={classes.search}>
                                <InputBase placeholder='  Search our app...' className={classes.searchinput}/>
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <Avatar alt="avatar" src={avatar} className={classes.avatar}/>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    )
}