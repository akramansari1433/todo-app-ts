import { Button, TextField, Typography } from "@mui/material";

export default function Login() {
   return (
      <div>
         <Typography variant="h4" my={4} textAlign="center">
            Login Details
         </Typography>
         <form className="box">
            <TextField
               label="Email"
               type="email"
               name="email"
               required
               fullWidth
               sx={{ marginBottom: 3 }}
            />
            <TextField
               label="Password"
               type="password"
               name="password"
               required
               fullWidth
               sx={{ marginBottom: 3 }}
            />
            <Button variant="contained" type="submit">
               Login
            </Button>
         </form>
      </div>
   );
}
