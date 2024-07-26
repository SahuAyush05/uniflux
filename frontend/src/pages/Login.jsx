import { Avatar, Button, Container, IconButton, Paper, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import {CameraAlt as CameraAltIcon} from "@mui/icons-material";
import { VisuallyHiddenInput } from "../components/styles/StyledComponents";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import {auth, googleProvider} from '../firebase';
import { useNavigate } from "react-router-dom";


const Login = () => {
  const navigate =useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleLogin = (event) => {
    event.preventDefault();

    if (email.trim() === '' || password.trim() === '') {
      alert('Please enter both email and password.');
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert("Sign In successful");
        navigate('/home', { replace: true });
      })
      .catch((error) => {
        if (error.code === "auth/wrong-password") {
          alert("Invalid password");
        } else if (error.code === "auth/user-not-found") {
          alert("User not found");
        } else {
          alert("Sign In failed");
        }
      });
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log("Google Sign-In Successful", user);
      navigate('/home', { replace: true });
    } catch (error) {
      console.error("Google Sign-In Error", error);
    }
  };

  return <Container component={"main"} maxWidth="xs" sx={{
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
    }}>
    <Paper elevation={3} sx={{padding: 4, display: "flex", flexDirection: "column", alignItems: "center"}}>
      {isLogin ? <>
      <Typography variant="hs">Login</Typography>
      <form style={{
        width: "100%",
        marginTop: "1rem",
      }} onSubmit={handleLogin}>
        <TextField required fullWidth onChange={handleInputChange}  label="Email" name="email" value={email} type="email" margin="normal" variant="outlined" />
        <TextField required fullWidth value={password} onChange={handleInputChange} name="password" label="Password" type="password" margin="normal" variant="outlined" />
        <Button sx={{marginTop: "1rem"}} variant="contained" color="primary" type="submit" fullWidth >Submit</Button>
        <Typography textAlign={"center"} m={"1rem"}>OR</Typography>
        <Button  fullWidth onClick={handleGoogleSignIn} variant="text">Sign In with google</Button>
        <Button  fullWidth onClick={()=>setIsLogin(false)} variant="text">Sign Up</Button>
      </form>
      </> : <>
      <Typography variant="hs">Sign Up</Typography>
      <form style={{
        width: "100%",
        marginTop: "1rem",
      }}>
        <Stack position={"relative"} width={"10rem"} margin={"auto"} >
          <Avatar sx={{
            width: "10rem",
            height: "10rem",
            objectFit: "contain",
          }}/>
          <IconButton
          sx={{
            position: "absolute",
            bottom: 0,
            right: 0,
            color: "white",
            bgcolor: "rgba(0, 0, 0, 0.5)",
            ":hover":{
              bgcolor: "rgba(0, 0, 0, 0.7)",
            }
          }}
          component="label"
          >
            <>
            <CameraAltIcon />
            <VisuallyHiddenInput type="file" />
            </>
          </IconButton>
        </Stack>
        <TextField required fullWidth  label="Username" margin="normal" variant="outlined" />
        <TextField required fullWidth  label="Name" margin="normal" variant="outlined" />
        <TextField required fullWidth  label="Bio" margin="normal" variant="outlined" />
        <TextField required fullWidth  label="Password" type="password" margin="normal" variant="outlined" />
        <Button sx={{marginTop: "1rem"}} fullWidth variant="contained" color="primary" type="submit">Submit</Button>
        <Typography textAlign={"center"} m={"1rem"}>OR</Typography>
        <Button  fullWidth onClick={handleGoogleSignIn} variant="text">Sign up with google</Button>
        <Button  fullWidth onClick={()=>setIsLogin(true)} variant="text">Sign In</Button>
      </form>
      </>
      }
    </Paper>
  </Container>
}

export default Login