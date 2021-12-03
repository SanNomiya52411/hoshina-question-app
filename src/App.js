import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link as RLink } from 'react-router-dom'
import {useState} from 'react';

const theme = createTheme();

export default function SignIn() {
  const [value, setValue] = useState("");
  const [boolean, setBoolean] = useState(false);


  const handleChange = (event) => {
    event.preventDefault();
    if(event.target.value === "erabaresimono"){
      setBoolean(true);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* <InsertDriveFileIcon/> */}
          <Typography component="h1" variant="h5">
            このファイルを開くためには<br/>パスワードを入力してください
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}>
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange}
            />
            {boolean
            ? <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              to="./passTrue"
              component={RLink}
            >
              ファイルを開く
            </Button>
            : <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              ファイルを開く
            </Button>}
            <p>{value}</p>
            <Grid container>
              <Grid item xs>
              <Button color="inherit" size="large" to="/question" component={RLink}>パスワードをお忘れですか</Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}