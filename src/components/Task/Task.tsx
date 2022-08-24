import { Box, Checkbox, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteUserTask, markcompleted, markInCompleted } from "../../helper";

interface taskProps {
   t: { tid: number; tname: string; completed: number; userId: number };
}

export default function Task(props: taskProps) {
   const handleCheck = (
      e: React.ChangeEvent<HTMLInputElement>,
      tid: number
   ) => {
      if (e.target.checked) {
         markcompleted(tid)
            .then((res) => {
               console.log(res);
               window.location.reload();
            })
            .catch((error) => {
               console.log(error);
            });
      } else {
         markInCompleted(tid)
            .then((res) => {
               console.log(res);
               window.location.reload();
            })
            .catch((error) => {
               console.log(error);
            });
      }
   };

   const deleteTask = (tid: number) => {
      deleteUserTask(tid)
         .then((res) => {
            console.log(res);
            window.location.reload();
         })
         .catch((error) => {
            console.log(error);
         });
   };

   return (
      <Box
         display="flex"
         justifyContent="space-between"
         alignItems="center"
         mt={2}
         sx={{
            border: "0.5px solid blue",
            borderRadius: "20px",
         }}
      >
         <Checkbox
            color="info"
            checked={props.t.completed === 1}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
               handleCheck(e, props.t.tid)
            }
         />

         <Typography
            variant="h5"
            sx={{ textDecoration: props.t.completed && "line-through" }}
         >
            {props.t.tname}
         </Typography>

         <IconButton color="error" onClick={() => deleteTask(props.t.tid)}>
            <DeleteIcon fontSize="medium" />
         </IconButton>
      </Box>
   );
}
