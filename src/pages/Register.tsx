import { Button, TextField, Typography } from "@mui/material";

export default function Register() {
   return (
      <div>
         <Typography variant="h4" my={4} textAlign="center">
            Registration Details
         </Typography>
         <form className="box">
            <TextField
               label="Name"
               type="text"
               name="name"
               required
               fullWidth
               sx={{ marginBottom: 3 }}
            />
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
            <TextField
               label="Confirm Password"
               type="password"
               name="confirmPassword"
               required
               fullWidth
               sx={{ marginBottom: 3 }}
            />
            <Button variant="contained" type="submit">
               Register
            </Button>
         </form>
      </div>
   );
}
