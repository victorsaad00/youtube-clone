import React from "react";
import {
    AppBar,
    Button,
    IconButton,
    makeStyles,
    Toolbar,
    Drawer,
    Divider,
    ListItem,
    ListItemText,
    Box,
    Typography,
    ListSubheader
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { AccountCircle, Whatshot, Subscriptions, ThumbUpAltOutlined } from "@material-ui/icons";
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps'
import NotificationsIcon from '@material-ui/icons/Notifications';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeIcon from '@mui/icons-material/Home';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import HistoryIcon from '@mui/icons-material/History';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import AddCircle from '@material-ui/icons/AddCircle'


const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    appBar: {
        boxShadow: 'none',
        zIndex: theme.zIndex.drawer + 1,
    },
    icons: {
        padding: theme.spacing(2),
    },
    grow: {
        flexGrow: 1,
    },
    logo: {
        height: 30,
    },
    drawer: {
        width: 240,
        flexShrink: 0,
    },
    drawerPaper: {
        width: 240,
        borderRight: 'none',
    },
    ListItemText: {
        fontSize: 14,
    },
    ListItem: {
        paddingTop: 0,
        paddingBottom: 0,
    },
    ListIcons: {
        fontSize: 14,
    },
    subheader:{
        textTransform: 'uppercase',
    },
}));

function Home() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar color='inherit' className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        edge='start'
                        className={classes.menuButton}
                        color='inherit'
                        aria-label='menu'
                    >
                        <MenuIcon />
                    </IconButton>
                    <img src="/images/black.png" alt="logo" className={classes.logo} />
                    <div className={classes.grow} />
                    <IconButton
                        edge='start'
                        className={classes.icons}
                        color='inherit'

                    >
                        <VideoCallIcon />
                    </IconButton>
                    <IconButton
                        edge='start'
                        className={classes.icons}
                        color='inherit'

                    >
                        <AppsIcon />
                    </IconButton>
                    <IconButton
                        edge='start'
                        className={classes.icons}
                        color='inherit'

                    >
                        <NotificationsIcon />
                    </IconButton>
                    <Button
                        startIcon={<AccountCircle />}
                        variant='outlined'
                        color='secondary'
                    >
                        Fazer Login
                    </Button>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant='permanent'
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <Toolbar />
                <div className={classes.drawerContainer}>
                    <List>
                        <ListItem button className={{ root: classes.ListItem }} >
                            <ListItemIcon>{<HomeIcon className={{ root: classes.ListIcons }} />}
                            </ListItemIcon>
                            <ListItemText classes={{
                                primary: classes.ListItemText,
                            }} primary={'Home'} />
                        </ListItem>
                        <ListItem button className={{ root: classes.ListItem }} >
                            <ListItemIcon> {<Whatshot className={{ root: classes.ListIcons }} />}</ListItemIcon>
                            <ListItemText classes={{
                                primary: classes.ListItemText,
                            }} primary={'Explore'} />
                        </ListItem>
                        <ListItem button className={{ root: classes.ListItem }} >
                            <ListItemIcon>{<Subscriptions className={{ root: classes.ListIcons }} />}</ListItemIcon>
                            <ListItemText classes={{
                                primary: classes.ListItemText,
                            }} primary={'Subscription'} />
                        </ListItem>
                    </List>
                    <Divider />
                    <List>
                        <ListItem button className={{ root: classes.ListItem }} >
                            <ListItemIcon>{<VideoLibraryOutlinedIcon className={{ root: classes.ListIcons }} />}
                            </ListItemIcon>
                            <ListItemText classes={{
                                primary: classes.ListItemText,
                            }} primary={'Library'} />
                        </ListItem>
                        <ListItem button className={{ root: classes.ListItem }} >
                            <ListItemIcon> {<HistoryIcon />}</ListItemIcon>
                            <ListItemText classes={{
                                primary: classes.ListItemText,
                            }} primary={'History'} />
                        </ListItem>
                        <ListItem button className={{ root: classes.ListItem }} >
                            <ListItemIcon>{<SlideshowIcon className={{ root: classes.ListIcons }} />}</ListItemIcon>
                            <ListItemText classes={{
                                primary: classes.ListItemText,
                            }} primary={'Your videos'} />
                        </ListItem>
                        <ListItem button className={{ root: classes.ListItem }} >
                            <ListItemIcon>{<WatchLaterOutlinedIcon className={{ root: classes.ListIcons }} />}</ListItemIcon>
                            <ListItemText classes={{
                                primary: classes.ListItemText,
                            }} primary={'Watch later'} />
                        </ListItem>
                        <ListItem button className={{ root: classes.ListItem }} >
                            <ListItemIcon>{<ThumbUpAltOutlined className={{ root: classes.ListIcons }} />}</ListItemIcon>
                            <ListItemText classes={{
                                primary: classes.ListItemText,
                            }} primary={'Liked videos'} />
                        </ListItem>
                    </List>
                    <Divider />
                    <Box p={3}>
                        <Typography variant='body2'>
                            Sign in to like videos, comment, and subscribe.
                        </Typography>
                        <Box mt={2}>
                            <Button
                                size='large'
                                variant='outlined'
                                color='secondary'
                                startIcon={<AccountCircle />}
                            >
                                SIGN IN
                            </Button>
                        </Box>
                    </Box>
                    <Divider />

                    <List
                        component='nav'
                        aria-labelledby='nested-list-subheader'
                        subheader={
                            <ListSubheader
                                component='nav'
                                aria-labelledby='nested-list-subheader'
                                className={classes.subheader}
                            >
                                BEST OF YOUTUBE
                            </ListSubheader>
                        }
                    >
                        <ListItem button className={{ root: classes.ListItem }} >
                            <ListItemIcon>{<AddCircle className={{ root: classes.ListIcons }} />}
                            </ListItemIcon>
                            <ListItemText classes={{
                                primary: classes.ListItemText,
                            }} primary={'Music'} />
                        </ListItem>
                        <ListItem button className={{ root: classes.ListItem }} >
                            <ListItemIcon> {<AddCircle />}</ListItemIcon>
                            <ListItemText classes={{
                                primary: classes.ListItemText,
                            }} primary={'Sports'} />
                        </ListItem>
                        <ListItem button className={{ root: classes.ListItem }} >
                            <ListItemIcon>{<AddCircle className={{ root: classes.ListIcons }} />}</ListItemIcon>
                            <ListItemText classes={{
                                primary: classes.ListItemText,
                            }} primary={'Gaming'} />
                        </ListItem>
                        <ListItem button className={{ root: classes.ListItem }} >
                            <ListItemIcon>{<AddCircle className={{ root: classes.ListIcons }} />}</ListItemIcon>
                            <ListItemText classes={{
                                primary: classes.ListItemText,
                            }} primary={'Movies'} />
                        </ListItem>
                        <ListItem button className={{ root: classes.ListItem }} >
                            <ListItemIcon>{<AddCircle className={{ root: classes.ListIcons }} />}</ListItemIcon>
                            <ListItemText classes={{
                                primary: classes.ListItemText,
                            }} primary={'News'} />
                        </ListItem>
                        <ListItem button className={{ root: classes.ListItem }} >
                            <ListItemIcon>{<AddCircle className={{ root: classes.ListIcons }} />}</ListItemIcon>
                            <ListItemText classes={{
                                primary: classes.ListItemText,
                            }} primary={'Live'} />
                        </ListItem>
                        <ListItem button className={{ root: classes.ListItem }} >
                            <ListItemIcon>{<AddCircle className={{ root: classes.ListIcons }} />}</ListItemIcon>
                            <ListItemText classes={{
                                primary: classes.ListItemText,
                            }} primary={'Learning'} />
                        </ListItem>
                    </List>
                    <Divider />
                    <List>
                        <ListItem button className={{ root: classes.ListItem }} >
                            <ListItemIcon>{<AddCircle className={{ root: classes.ListIcons }} />}</ListItemIcon>
                            <ListItemText classes={{
                                primary: classes.ListItemText,
                            }} primary={'Browse chanels'} />
                        </ListItem>
                    </List>
                    <Divider />
                </div>
            </Drawer>
            
        </div>
    );
}

export default Home;