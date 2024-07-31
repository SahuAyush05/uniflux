import { Avatar, Button, Container, IconButton, Paper, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import {CameraAlt as CameraAltIcon} from "@mui/icons-material";
import { VisuallyHiddenInput } from "../components/styles/StyledComponents";
import { signInWithEmailAndPassword, signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import {auth, googleProvider} from '../firebase';
import { useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cnfpassword, setCnfpassword] = useState('');
  const [name, setName] = useState('');
  const [profilePictureUrl, setProfilePictureUrl] = useState('');
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    } else if (name === 'name') {
      setName(value);
    } else if (name === 'cnfpassword') {
      setCnfpassword(value);
    }
  };

  //Login

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

  //Signup

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePictureUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSignup = (event) =>{
    event.preventDefault();

    if (email.trim() === '') {
        alert('Please enter the email.');
        return;
    }
    else if (password.trim() === '') {
        alert('Please enter the password.');
        return;
    }
    else if (cnfpassword.trim() === ''){
        alert('Please enter the confirm password.');
        return;
    }
    else if (password.trim() !== cnfpassword.trim()){
        alert('Password and Confirm password should be same.');
        return; 
    }
     createUserWithEmailAndPassword(auth, email, password).then((res =>{
        alert('Sign In Successfull!!!')
        navigate(`./detail?name=${encodeURIComponent(name)}&ph=${encodeURIComponent(profilePictureUrl)}`, { replace: true });
     }))
     .catch((error)=>{
      alert(error);
     })
  };


  // Google Authentication

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

  const handleGoogleSignInn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log("Google Sign-In Successful", user);
      navigate(`./detail?name=${encodeURIComponent(user.displayName)}&ph=${encodeURIComponent(user.photoURL)}`, { replace: true });
    } catch (error) {
      console.error("Google Sign-In Error", error);
    }
  };

  return <Container component={"main"} maxWidth="xs" sx={{
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem 0"
    }}>
    <Paper elevation={3} sx={{padding: 4, display: "flex", flexDirection: "column", alignItems: "center"}}>
      {isLogin ? <>
      <Typography variant="h5">Login</Typography>
      <form style={{
        width: "100%",
        marginTop: "1rem",
      }} onSubmit={handleLogin}>
        <TextField required fullWidth onChange={handleInputChange} label="Email" name="email" value={email} type="email" margin="normal" variant="outlined" />
        <TextField required fullWidth value={password} onChange={handleInputChange} name="password" label="Password" type="password" margin="normal" variant="outlined" />
        <Button sx={{
                      marginTop: "1rem",
                      background: "#2d8c92",
                      color: "white",
                      '&:hover': {
                        background: "#206f75"
                      }
                    }}
                fullWidth
                variant="contained"
                type="submit"
              >
                Submit
              </Button>
        <Typography textAlign={"center"} m={"1rem"}>OR</Typography>
        <Button  fullWidth sx={{color:"#2d8c92"}} onClick={handleGoogleSignIn} variant="text">Sign In with google</Button>
        <Button  fullWidth sx={{color:"#2d8c92"}} onClick={()=>setIsLogin(false)} variant="text">Sign Up</Button>
      </form>
      </> : <>
      <Typography variant="h5">Sign Up</Typography>
      <form style={{
        width: "100%",
        marginTop: "1rem",
      }} onSubmit={handleSignup}>
        <Stack position={"relative"} width={"10rem"} margin={"auto"} >
          <Avatar sx={{
            width: "10rem",
            height: "10rem",
            objectFit: "contain",
          }} src={profilePictureUrl}/>
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
            <VisuallyHiddenInput type="file" onChange={handleFileChange} />
            </>
          </IconButton>
        </Stack>
        <TextField required fullWidth onChange={handleInputChange}  label="Email" name="email" value={email} type="email" margin="normal" variant="outlined" />
        <TextField required fullWidth onChange={handleInputChange} label="Name" name="name" value={name} type="text" margin="normal" variant="outlined" />
        <TextField required fullWidth  value={password} onChange={handleInputChange} name="password" label="Password" type="password" margin="normal" variant="outlined" />
        <TextField required fullWidth  value={cnfpassword} onChange={handleInputChange} name="cnfpassword" label="Confirm Password" type="password" margin="normal" variant="outlined" />
        <Button sx={{
                      marginTop: "1rem",
                      background: "#2d8c92",
                      color: "white",
                      '&:hover': {
                        background: "#206f75"
                      }
                    }}
                fullWidth
                variant="contained"
                type="submit"
              >
                Submit
              </Button>

        <Typography textAlign={"center"} m={"1rem"}>OR</Typography>
        <Button  fullWidth sx={{color:"#2d8c92"}} onClick={handleGoogleSignInn} variant="text">Sign up with google</Button>
        <Button  fullWidth sx={{color:"#2d8c92"}} onClick={()=>setIsLogin(true)} variant="text">Sign In</Button>
      </form>
      </>
      }
    </Paper>
  </Container>
}

export default Login
