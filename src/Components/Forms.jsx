import React, { useState } from 'react';
import { TextField, Button, Card, CardContent, Grid, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

const Forms = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [password, setPassword] = useState('');



  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)

  const handleSubmit = (event) => {
      event.preventDefault()

      setEmailError(false)
      setPasswordError(false)

      if (email == '') {
          setEmailError(true)
      }
      if (password == '') {
          setPasswordError(true)
      }

      if (email && password) {
          console.log(email, password)
      }
  }

  return (
    <>

    <Grid container spacing={2} style={{marginLeft:"305px" , marginTop:"50px"}} >
      <Grid item xs={4}>
      <Card>
        <CardContent>
          <h2>Register Form</h2>
          <form onSubmit={handleSubmit}>
            <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
              <TextField
                type="text"
                variant="outlined"
                color="secondary"
                label="First Name"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                fullWidth
                required
              />
              <TextField
                type="text"
                variant="outlined"
                color="secondary"
                label="Last Name"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                fullWidth
                required
              />
            </Stack>
            <TextField
              type="email"
              variant="outlined"
              color="secondary"
              label="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              fullWidth
              required
              sx={{ mb: 4 }}
            />
            <TextField
              type="password"
              variant="outlined"
              color="secondary"
              label="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
              fullWidth
              sx={{ mb: 4 }}
            />
            <TextField
              type="date"
              variant="outlined"
              color="secondary"
              label="Date of Birth"
              onChange={(e) => setDateOfBirth(e.target.value)}
              value={dateOfBirth}
              fullWidth
              required
              sx={{ mb: 4 }}
            />
            <Button variant="outlined" color="secondary" type="submit">
              Register
            </Button>
          </form>
          <small>
            Already have an account? <Link to="/login">Login Here</Link>
          </small>
        </CardContent>
      </Card>
      </Grid>

      <Grid item xs={4}>
      <Card>
        <CardContent>
          <h2>Register Form</h2>
          <form onSubmit={handleSubmit}>
            <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
              <TextField
                type="text"
                variant="outlined"
                color="secondary"
                label="First Name"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                fullWidth
                required
              />
              <TextField
                type="text"
                variant="outlined"
                color="secondary"
                label="Last Name"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                fullWidth
                required
              />
            </Stack>
            <TextField
              type="email"
              variant="outlined"
              color="secondary"
              label="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              fullWidth
              required
              sx={{ mb: 4 }}
            />
            <TextField
              type="password"
              variant="outlined"
              color="secondary"
              label="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
              fullWidth
              sx={{ mb: 4 }}
            />
            <TextField
              type="date"
              variant="outlined"
              color="secondary"
              label="Date of Birth"
              onChange={(e) => setDateOfBirth(e.target.value)}
              value={dateOfBirth}
              fullWidth
              required
              sx={{ mb: 4 }}
            />
            <Button variant="outlined" color="secondary" type="submit">
              Register
            </Button>
          </form>
          <small>
            Already have an account? <Link to="/login">Login Here</Link>
          </small>
        </CardContent>
      </Card>
      </Grid>
      
    </Grid>
    <Grid container spacing={2} style={{marginLeft:"305px" , marginTop:"50px"}} >
      <Grid item xs={4}>
      <Card>
        <CardContent>
          <form autoComplete="off" onSubmit={handleSubmit}>
            <h2>Login Form</h2>
                <TextField 
                    label="Email"
                    onChange={e => setEmail(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    type="email"
                    sx={{mb: 3}}
                    fullWidth
                    value={email}
                    error={emailError}
                 />
                 <TextField 
                    label="Password"
                    onChange={e => setPassword(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    type="password"
                    value={password}
                    error={passwordError}
                    fullWidth
                    sx={{mb: 3}}
                 />
                 <Button variant="outlined" color="secondary" type="submit">Login</Button>
             
        </form>
        <small>Need an account? <Link to="/">Register here</Link></small>
        </CardContent>
      </Card>
      </Grid>

      <Grid item xs={4}>
      <Card>
        <CardContent>
          <form autoComplete="off" onSubmit={handleSubmit}>
            <h2>Login Form</h2>
                <TextField 
                    label="Email"
                    onChange={e => setEmail(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    type="email"
                    sx={{mb: 3}}
                    fullWidth
                    value={email}
                    error={emailError}
                 />
                 <TextField 
                    label="Password"
                    onChange={e => setPassword(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    type="password"
                    value={password}
                    error={passwordError}
                    fullWidth
                    sx={{mb: 3}}
                 />
                 <Button variant="outlined" color="secondary" type="submit">Login</Button>
             
        </form>
        <small>Need an account? <Link to="/">Register here</Link></small>
 
        </CardContent>
      </Card>
      </Grid>
      
    </Grid>
    </>
  );
};

export default Forms;
