import {
  Button,
  Chip,
  FormControl,
  Grid,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const domains = [
  "Frontend",
  "Backend",
  "Fullstack",
  "Devops",
  "UI/UX",
  "QA",
  "Data Science",
  "Machine Learning",
  "Artificial Intelligence",
  "Cloud Computing",
  "Blockchain",
];

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "Express",
  "MongoDB",
  "SQL",
  "Python",
  "Java",
  "C++",
];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(skill, skills, theme) {
  return {
    fontWeight:
      skills.indexOf(skill) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function CandidateOnboarding() {
  const theme = useTheme();

  const userData = JSON.parse(localStorage.getItem("user"));
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: userData?.email ? userData.email : "",
    phone: "",
    skills: [],
    experience: "",
    education: "",
    domain: "",
  });

  const submitUserInfo = (e) => {
    e.preventDefault();
    console.log(userInfo);
  };

  const handleSkillChange = (event) => {
    const {
      target: { value },
    } = event;

    setUserInfo({
      ...userInfo,
      skills: typeof value === "string" ? value.split(",") : value,
    });
  };

  return (
    <form onSubmit={submitUserInfo}>
      <h1>Candidate Onboarding</h1>
      <Grid
        container
        spacing={2}
        sx={{
          padding: "0 16px 16px 0",
          maxWidth: "90%",
          margin: " 20px auto",
          backgroundColor: "#fff",
          borderRadius: "8px",
          boxShadow: "0px 8px 24px rgba(0,0,0,0.15)",
        }}
      >
        <Grid item xs={12} sm={6}>
          <Typography variant="h6">Name</Typography>
          <TextField
            required
            variant="outlined"
            fullWidth
            value={userInfo.name}
            onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6">Email</Typography>
          <TextField
            required
            disabled
            type="email"
            variant="outlined"
            fullWidth
            value={userInfo.email}
            onChange={(e) =>
              setUserInfo({ ...userInfo, email: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6">Phone</Typography>
          <TextField
            type="number"
            variant="outlined"
            fullWidth
            value={userInfo.phone}
            onChange={(e) =>
              setUserInfo({ ...userInfo, phone: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6">Experience</Typography>
          <TextField
            variant="outlined"
            fullWidth
            value={userInfo.experience}
            onChange={(e) =>
              setUserInfo({ ...userInfo, experience: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6">Education</Typography>
          <TextField
            variant="outlined"
            fullWidth
            value={userInfo.education}
            onChange={(e) =>
              setUserInfo({ ...userInfo, education: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6">Domain</Typography>
          <FormControl fullWidth>
            <Select
              required
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={userInfo.domain}
              onChange={(e) =>
                setUserInfo({ ...userInfo, domain: e.target.value })
              }
            >
              {domains.map((domain, index) => (
                <MenuItem value={domain} key={index}>
                  {domain}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6">Skills</Typography>
          <FormControl sx={{ m: "1", width: "100%" }}>
            <Select
              required
              id="demo-multiple-chip"
              multiple
              value={userInfo.skills}
              onChange={handleSkillChange}
              input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
              renderValue={(selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {skills.map((skill) => (
                <MenuItem
                  key={skill}
                  value={skill}
                  style={getStyles(skill, userInfo.skills, theme)}
                >
                  {skill}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button type="submit">Submit</Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default CandidateOnboarding;
