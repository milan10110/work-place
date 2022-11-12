import {
  Button,
  FormControl,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const industry = [
  "Agriculture",
  "Automotive",
  "Banking",
  "It & Software",
  "Construction",
  "Healthcare",
];

function EmployerOnboarding() {
  const userData = JSON.parse(localStorage.getItem("user"));
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: userData?.email ? userData.email : "",
    phone: "",
    companyName: "",
    size: "",
    hrEmail: "",
    address: "",
    industry: "",
  });

  const submitUserInfo = (e) => {
    e.preventDefault();
    console.log(userInfo);
  };

  return (
    <form onSubmit={submitUserInfo}>
      <h1>Employer Onboarding</h1>
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
          <Typography variant="h6">Company name</Typography>
          <TextField
            variant="outlined"
            fullWidth
            value={userInfo.companyName}
            onChange={(e) =>
              setUserInfo({ ...userInfo, companyName: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6">Company size</Typography>
          <TextField
            variant="outlined"
            fullWidth
            value={userInfo.size}
            onChange={(e) => setUserInfo({ ...userInfo, size: e.target.value })}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6">HR Email</Typography>
          <TextField
            variant="outlined"
            fullWidth
            value={userInfo.hrEmail}
            onChange={(e) =>
              setUserInfo({ ...userInfo, hrEmail: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6">Address</Typography>
          <TextField
            variant="outlined"
            fullWidth
            value={userInfo.address}
            onChange={(e) =>
              setUserInfo({ ...userInfo, address: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6">Industry type</Typography>
          <FormControl fullWidth>
            <Select
              required
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={userInfo.industry}
              onChange={(e) =>
                setUserInfo({ ...userInfo, industry: e.target.value })
              }
            >
              {industry.map((ind, index) => (
                <MenuItem value={ind} key={index}>
                  {ind}
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

export default EmployerOnboarding;
