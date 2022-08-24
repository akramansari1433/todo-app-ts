import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

interface userProps {
   user: {
      userId: number;
      name: string;
   };
   setUser: React.Dispatch<React.SetStateAction<any>>;
}

export default function Navbar(props: userProps) {
   return (
      <Box sx={{ flexGrow: 1 }}>
         <AppBar position="static" color="inherit">
            <Toolbar>
               <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                  Todo App
               </Typography>

               {props.user ? (
                  <>
                     <Typography variant="h6" mx={2}>
                        Welcome {props.user.name}
                     </Typography>
                     <Button
                        color="error"
                        variant="outlined"
                        onClick={() => {
                           window.localStorage.clear();
                           props.setUser(
                              JSON.parse(window.localStorage.getItem("user")!)
                           );
                        }}
                     >
                        Logout
                     </Button>
                  </>
               ) : (
                  <>
                     <Button color="primary" component={Link} to="/login">
                        Login
                     </Button>
                     <Button color="primary" component={Link} to="/register">
                        Register
                     </Button>
                  </>
               )}
            </Toolbar>
         </AppBar>
      </Box>
   );
}
