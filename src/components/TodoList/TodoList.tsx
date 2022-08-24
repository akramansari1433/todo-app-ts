import { Box, IconButton, Paper, TextField, Typography } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Task from "../Task/Task";
import "./TodoList.css";

export default function TodoList() {
   return (
      <div>
         <Typography variant="h3" textAlign="center" my={4}>
            Todo List
         </Typography>
         <Box display="flex" justifyContent="center" alignItems="center">
            <Paper elevation={3} sx={{ py: 5, px: 3 }}>
               <form
                  style={{
                     display: "flex",
                     alignItems: "center",
                     justifyContent: "center",
                  }}
               >
                  <TextField
                     variant="outlined"
                     className="inputRounded"
                     size="small"
                     required
                  />
                  <IconButton color="success" type="submit">
                     <AddBoxIcon fontSize="large" />
                  </IconButton>
               </form>

               <Task />
            </Paper>
         </Box>
      </div>
   );
}
