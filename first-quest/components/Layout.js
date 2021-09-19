import { Typography, Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material"
import { makeStyles } from "@mui/styles"
import { AddCircleOutline, AnnouncementTwoTone, InfoTwoTone, EmailTwoTone } from "@mui/icons-material"
import { useRouter } from "next/dist/client/router"


const drawerWidth = 240

const useStyles = makeStyles({
    page: {
        background: "#1D1D42",
        width: "100%",
        color: '#FCFCFC'
    },
    drawer: {
        width: drawerWidth,
        background: "#1D1D42",
    },
    drawerPaper: {
        width: drawerWidth,
        background: "#1D1D42",
        color: '#FCFCFC'
    },
    root: {
        display: "flex"
    },
    active : {
        background: "$f8f8ff"
    }
})

export default function Layout({ children }) {
    const classes = useStyles()
    const router = useRouter()
    const location = router.asPath

    const menuItems = [
        {
            text: "Post Job",
            icon: <AddCircleOutline />,
            path: "/post"
        },
        {
            text: "View Jobs",
            icon: <AnnouncementTwoTone />,
            path: "/"
        },
        {
            text: "???",
            icon: <InfoTwoTone />,
            path: "/"
        },
        {
            text: "???",
            icon: <EmailTwoTone />,
            path: "/"
        },
    ]

    return (
        <div className={classes.root}>
            
            {/* Drawer */}
            <Drawer
                className={classes.drawer}
                variant="permanent"
                anchor="left"
                classes={{ paper: classes.drawerPaper }}
            >
                <div>
                    <Typography variant="h5">
                        Drawer
                    </Typography>
                </div>

            {/* List & Links */}
            <List>
                {menuItems.map(item => (
                    <ListItem
                        button
                        key={item.text}
                        onClick={() => router.push(item.path)}
                        className={location.pathname == item.path ? classes.active : null}
                    >
                        <ListItemIcon>{item.icon}</ListItemIcon> 
                        <ListItemText primary={item.text} />    
                    </ListItem>
                ))}
            </List>

            </Drawer>


            <div className={classes.page}>
                {children}
            </div>


        </div>
    );
}