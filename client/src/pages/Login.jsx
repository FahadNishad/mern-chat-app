import {
  Avatar,
  Button,
  Container,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { CameraAlt as CameraAltIcon } from "@mui/icons-material";
import { VisuallyHiddenInput } from "../components/Styles/StyledComponents";
import { useFileHandler, useInputValidation, useStrongPassword } from "6pp";
import { usernameValidator } from "../utils/validators";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleLogin = () => setIsLogin((prev) => !prev);

  const name = useInputValidation("");
  const username = useInputValidation("", usernameValidator);
  const bio = useInputValidation("");
  const password = useInputValidation("");
  const avatar = useFileHandler("single");

  const handleLogin = (e) => {
    e.preventDefault();
  };
  const handleSignUp = (e) => {
    e.preventDefault();
  };
  return (
    <Container
      component={"main"}
      maxWidth="xs"
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {isLogin ? (
          <>
            <Typography variant="h5">Login</Typography>
            <form
              style={{ width: "100%", marginTop: "1rem" }}
              onSubmit={handleLogin}
            >
              <TextField
                required
                fullWidth
                label="Username"
                margin="normal"
                variant="outlined"
                value={username.value}
                onChange={username.changeHandler}
              />
              <TextField
                required
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                variant="outlined"
                value={password.value}
                onChange={password.changeHandler}
              />
              <Button
                variant="contained"
                color="primary"
                fullWidth
                type="submit"
                sx={{ marginTop: "1rem" }}
              >
                Login
              </Button>
              <Typography textAlign={"center"} m={"1rem"}>
                OR
              </Typography>
              <Button variant="text" fullWidth onClick={toggleLogin}>
                Sign Up Instead
              </Button>
            </form>
          </>
        ) : (
          <>
            <Typography variant="h5">Sign Up</Typography>
            <form
              style={{ width: "100%", marginTop: "1rem" }}
              onSubmit={handleSignUp}
            >
              <Stack
                position={"relative"}
                width={"10rem"}
                margin={"auto"}
                alignItems={"center"}
              >
                <Avatar
                  sx={{ width: "7rem", height: "7rem", objectFit: "contain" }}
                  src={avatar.preview}
                />

                <IconButton
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    color: "white",
                    bgcolor: "rgba(0, 0, 0, 0.5)",
                    ":hover": {
                      bgcolor: "rgba(0,0,0,0.7)",
                    },
                  }}
                  component="label"
                >
                  <>
                    <CameraAltIcon />
                    <VisuallyHiddenInput
                      type="file"
                      onChange={avatar.changeHandler}
                    />
                  </>
                </IconButton>
              </Stack>
              {avatar.error && (
                <Typography
                  m={"1rem"}
                  color={"error"}
                  variant="caption"
                  display={"block"}
                  width={"fit-content"}
                >
                  {avatar.error}
                </Typography>
              )}

              <TextField
                required
                fullWidth
                label="Name"
                margin="normal"
                variant="outlined"
                value={name.value}
                onChange={name.changeHandler}
              />
              <TextField
                required
                fullWidth
                label="Username"
                margin="normal"
                variant="outlined"
                value={username.value}
                onChange={username.changeHandler}
              />

              {username.error && (
                <Typography color={"error"} variant="caption">
                  {username.error}
                </Typography>
              )}
              <TextField
                required
                fullWidth
                label="Bio"
                margin="normal"
                variant="outlined"
                value={bio.value}
                onChange={bio.changeHandler}
              />
              <TextField
                required
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                variant="outlined"
                value={password.value}
                onChange={password.changeHandler}
              />
              {/* {
                password.error && (
                  <Typography color={'error'} variant="caption">
                    {password.error}
                  </Typography>
                )
              } */}
              <Button
                variant="contained"
                color="primary"
                fullWidth
                type="submit"
                sx={{ marginTop: "1rem" }}
              >
                Sign Up
              </Button>
              <Typography textAlign={"center"} m={"1rem"}>
                OR
              </Typography>
              <Button variant="text" fullWidth onClick={toggleLogin}>
                Login In Instead
              </Button>
            </form>
          </>
        )}
      </Paper>
    </Container>
  );
};

export default Login;
