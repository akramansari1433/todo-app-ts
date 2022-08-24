import { Box, Button, TextField, Typography } from "@mui/material";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../helper";

interface user {
   name?: string;
   email?: string;
   password?: string;
   confirmPassword?: string;
}

const style = {
   position: "absolute",
   top: "50%",
   left: "50%",
   transform: "translate(-50%, -50%)",
   width: 300,
   bgcolor: "background.paper",
   border: "2px solid #000",
   boxShadow: 24,
   p: 4,
};

export default function Register() {
   const [userData, setUserData] = useState<user>();

   const [response, setResponse] = useState<string>();
   const [error, setError] = useState<string>();

   const [open, setOpen] = useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);

   const navigate = useNavigate();

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setUserData((prevState) => ({
         ...prevState,
         [name]: value,
      }));
   };

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (userData?.password !== userData?.confirmPassword) {
         setError("Password must be same!");
      } else {
         register({
            name: userData?.name,
            email: userData?.email,
            password: userData?.password,
         })
            .then((res) => {
               if (res.message) {
                  handleOpen();
                  setResponse(res.message);
               }
            })
            .catch((err) => {
               setError(err.response.data.error);
               console.log(err);
            });
      }
   };

   return (
      <div>
         <Typography variant="h4" my={4} textAlign="center">
            Registration Details
         </Typography>
         <form className="box" onSubmit={handleSubmit}>
            <TextField
               label="Name"
               type="text"
               name="name"
               required
               fullWidth
               onChange={handleChange}
               sx={{ marginBottom: 3 }}
            />
            <TextField
               label="Email"
               type="email"
               name="email"
               required
               fullWidth
               onChange={handleChange}
               sx={{ marginBottom: 3 }}
            />
            <TextField
               label="Password"
               type="password"
               name="password"
               required
               fullWidth
               onChange={handleChange}
               sx={{ marginBottom: 3 }}
            />
            <TextField
               label="Confirm Password"
               type="password"
               name="confirmPassword"
               required
               fullWidth
               onChange={handleChange}
               sx={{ marginBottom: 3 }}
            />
            <Button variant="contained" type="submit">
               Register
            </Button>
            <Typography mt={2} color="error">
               {error}
            </Typography>
         </form>

         <Modal open={open} onClose={handleClose}>
            <Box sx={style} display="flex" justifyContent="center">
               <Typography color="green" sx={{ my: 2 }}>
                  {response}
               </Typography>
               <Button onClick={() => navigate("/login")}>Login</Button>
            </Box>
         </Modal>
      </div>
   );
}
