import React from "react";
import { AppBar, Button, IconButton, makeStyles, Toolbar, Drawer, Divider, ListItem, ListItemText } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { AccountCircle } from "@material-ui/icons";
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps'
import NotificationsIcon from '@material-ui/icons/Notifications';
import List from '@mui/material/List';

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
                        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                            <ListItem button key={text}>
                                {/* <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon> */}
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List>
                        {['All mail', 'Trash', 'Spam'].map((text, index) => (
                            <ListItem button key={text}>
                                {/* <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon> */}
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                </div>
            </Drawer>
        </div>
    );
}

export default Home;