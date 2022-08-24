import { Box, Checkbox, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Task() {
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
         <Checkbox color="info" checked={true} />

         <Typography
            variant="h5"
            // sx={{ textDecoration: t.completed && "line-through" }}
         >
            task
         </Typography>

         <IconButton color="error">
            <DeleteIcon fontSize="medium" />
         </IconButton>
      </Box>
   );
}
