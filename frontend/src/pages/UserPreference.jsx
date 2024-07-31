import React, { useState } from "react";
import {
  Container,
  TextField,
  Typography,
  Button,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Grid,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import {auth, db} from '../firebase'
const UserPreference = () => {
    const navigate = useNavigate();
    const location = useLocation();
  const params = new URLSearchParams(location.search);
  const name = params.get('name');
  const photo = params.get('ph');
  const [formData, setFormData] = useState({
    uid: auth.currentUser.uid,
    name: name,
    photo: photo,
    email: auth.currentUser.email,
    gender: "",
    education: "",
    highestQualification: "",
    course: "",
    stream: "",
    skills: "",
    futureReference: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    if (name === "education") {
      setFormData({ ...formData, [name]: value, course: "", stream: "" });
    } else if (name === "course") {
      setFormData({ ...formData, [name]: value, stream: "" });
    }
  };

  const handleSkillsChange = (event, newSkills) => {
    setFormData({ ...formData, skills: newSkills });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await setDoc(doc(db, "userDetail", formData.uid), {
        uid: formData.uid,
        name: formData.name,
        photo: formData.photo,
        email: formData.email,
        gender: formData.gender,
        education: formData.education,
        course: formData.course,
        stream: formData.stream,
        skills: formData.skills,
        futureReference: formData.futureReference,
      });
      alert("User details submitted successfully!");
      navigate('/home');
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const educationOptions = [ "Bachelor's Degree", "Master's Degree", "PhD", "Custom"];
  const courseOptions = {
    "Bachelor's Degree": ["Engineering", "Medicine", "Arts", "Science", "Commerce", "Custom"],
    "Master's Degree": ["Engineering", "Medicine", "Arts", "Science", "Commerce", "Custom"],
    "PhD": ["Engineering", "Medicine", "Arts", "Science", "Commerce", "Custom"],
  };
  const streamOptions = {
    Engineering: ["Computer Science", "Electrical", "Mechanical", "Civil", "Custom"],
    Medicine: ["General Medicine", "Dentistry", "Pharmacy", "Nursing", "Custom"],
    Arts: ["History", "Literature", "Philosophy", "Psychology", "Custom"],
    Science: ["Physics", "Chemistry", "Biology", "Mathematics", "Custom"],
    Commerce: ["Accounting", "Business Administration", "Economics", "Finance", "Custom"],
  };

  return (
    <Container component="main" maxWidth="md" sx={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <Paper elevation={3} sx={{ padding: 4, borderRadius: 2 }}>
        <Typography variant="h5" component="h1" gutterBottom>
          User Detail Form
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth margin="normal">
                <InputLabel>Gender</InputLabel>
                <Select name="gender" value={formData.gender} onChange={handleInputChange}>
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                  <MenuItem value="custom">Custom</MenuItem>
                </Select>
                {formData.gender === "custom" && (
                  <TextField
                    fullWidth
                    margin="normal"
                    label="Custom Gender"
                    name="customGender"
                    onChange={handleInputChange}
                  />
                )}
                <FormHelperText>Select or type your gender</FormHelperText>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth margin="normal">
                <InputLabel>Education</InputLabel>
                <Select name="education" value={formData.education} onChange={handleInputChange}>
                  {educationOptions.map((education) => (
                    <MenuItem key={education} value={education}>
                      {education}
                    </MenuItem>
                  ))}
                </Select>
                {formData.education === "Custom" && (
                  <TextField
                    fullWidth
                    margin="normal"
                    label="Custom Education"
                    name="customEducation"
                    onChange={handleInputChange}
                  />
                )}
                <FormHelperText>Select or type your education</FormHelperText>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              {formData.education && formData.education !== "Custom" && (
                <FormControl fullWidth margin="normal">
                  <InputLabel>Course</InputLabel>
                  <Select name="course" value={formData.course} onChange={handleInputChange}>
                    {courseOptions[formData.education].map((course) => (
                      <MenuItem key={course} value={course}>
                        {course}
                      </MenuItem>
                    ))}
                  </Select>
                  {formData.course === "Custom" && (
                    <TextField
                      fullWidth
                      margin="normal"
                      label="Custom Course"
                      name="customCourse"
                      onChange={handleInputChange}
                    />
                  )}
                  <FormHelperText>Select or type your course</FormHelperText>
                </FormControl>
              )}
            </Grid>

            <Grid item xs={12} sm={6}>
              {formData.course && formData.course !== "Custom" && (
                <FormControl fullWidth margin="normal">
                  <InputLabel>Stream</InputLabel>
                  <Select name="stream" value={formData.stream} onChange={handleInputChange}>
                    {streamOptions[formData.course].map((stream) => (
                      <MenuItem key={stream} value={stream}>
                        {stream}
                      </MenuItem>
                    ))}
                  </Select>
                  {formData.stream === "Custom" && (
                    <TextField
                      fullWidth
                      margin="normal"
                      label="Custom Stream"
                      name="customStream"
                      onChange={handleInputChange}
                    />
                  )}
                  <FormHelperText>Select or type your stream</FormHelperText>
                </FormControl>
              )}
            </Grid>

            <Grid item xs={12}>
              <FormControl component="fieldset" margin="normal">
                <Typography variant="h6">Skills</Typography>
                <ToggleButtonGroup
                  value={formData.skills}
                  onChange={handleSkillsChange}
                  aria-label="skills"
                  multiple
                >
                  <ToggleButton value="JavaScript" aria-label="JavaScript">
                    JavaScript
                  </ToggleButton>
                  <ToggleButton value="React" aria-label="React">
                    React
                  </ToggleButton>
                  <ToggleButton value="Node.js" aria-label="Node.js">
                    Node.js
                  </ToggleButton>
                  <ToggleButton value="Python" aria-label="Python">
                    Python
                  </ToggleButton>
                  <ToggleButton value="Custom" aria-label="Custom">
                    Custom
                  </ToggleButton>
                </ToggleButtonGroup>
                {formData.skills.includes("Custom") && (
                  <TextField
                    fullWidth
                    margin="normal"
                    label="Custom Skills"
                    name="customSkills"
                    onChange={handleInputChange}
                  />
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                margin="normal"
                label="Future Reference"
                name="futureReference"
                value={formData.futureReference}
                onChange={handleInputChange}
                multiline
                rows={4}
              />
            </Grid>

            <Grid item xs={12}>
              <Stack direction="row" spacing={2} sx={{ marginTop: 2 }}>
                <Button variant="contained" sx={{
                      marginTop: "1rem",
                      background: "#2d8c92",
                      color: "white",
                      '&:hover': {
                        background: "#206f75"
                      }
                    }} type="submit">
                  Submit
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  type="reset"
                  onClick={() =>
                    setFormData({
                      gender: "",
                      education: "",
                      course: "",
                      stream: "",
                      skills: [],
                      futureReference: "",
                    })
                  }
                >
                  Reset
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
}

export default UserPreference