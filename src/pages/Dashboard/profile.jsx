import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import "./profile.css";
// import { FormControl, InputLabel, Input } from "@mui/material";

const drawerWidth = 240;

export default function Profile() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography style={{ height: "70px" }} variant="h6" component="div">
            <h3 style={{ marginTop: "18px" }}>
              {" "}
              <a
                style={{ textDecoration: "none", color: "white" }}
                href="../Home/home.js"
              >
                {" "}
                Home{" "}
              </a>
            </h3>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {["Dashboard", "Courses", "Logout"].map((text, index) => (
              <ListItem>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Typography>
          <section style={{ marginTop: "-100px" }}>
            <div className="form_data">
              <div className="from_heading">
                <h1> Profile </h1>{" "}
              </div>{" "}
              <form>
                <div className="form_input">
                  <label htmlFor="Name"> Name </label>{" "}
                  <input type="name" name="name" id="name" />{" "}
                  <label htmlFor="rollno"> Roll No. </label>{" "}
                  <input type="text" name="rollno" id="rollno" />{" "}
                  <label htmlFor="password"> Password </label>{" "}
                  <div className="two">
                    <input type="password" name="password" id="password" />{" "}
                  </div>{" "}
                </div>{" "}
              </form>{" "}
            </div>{" "}
          </section>{" "}
        </Typography>
      </Box>
    </Box>
  );
}
