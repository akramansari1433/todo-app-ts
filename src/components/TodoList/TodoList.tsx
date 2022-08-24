import { Box, IconButton, Paper, TextField, Typography } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Task from "../Task/Task";
import "./TodoList.css";
import { useEffect, useState } from "react";
import { addTask, getAllTask } from "../../helper";

interface userProps {
   userId: number;
}
interface task {
   tid: number;
   tname: string;
   completed: number;
   userId: number;
}

export default function TodoList(props: userProps) {
   const [userTasks, setUserTasks] = useState<task[]>([]);
   const [taskName, setTaskName] = useState<string>("");

   const handleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
      addTask({
         tname: taskName,
         userId: props.userId,
      })
         .then((res) => {
            console.log(res);
            setTaskName("");
         })
         .catch((error) => {
            console.log(error);
         });
   };

   useEffect(() => {
      getAllTask(props.userId)
         .then((res) => {
            setUserTasks(res);
         })
         .catch((error) => {
            console.log(error);
         });
   }, [props.userId]);

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
                  onSubmit={handleAddTask}
               >
                  <TextField
                     variant="outlined"
                     className="inputRounded"
                     size="small"
                     value={taskName}
                     required
                     onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setTaskName(e.target.value)
                     }
                  />
                  <IconButton color="success" type="submit">
                     <AddBoxIcon fontSize="large" />
                  </IconButton>
               </form>

               {userTasks.map((t) => (
                  <Task t={t} key={t.tid} />
               ))}
            </Paper>
         </Box>
      </div>
   );
}
