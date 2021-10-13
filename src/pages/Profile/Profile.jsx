import React, { useState, useEffect } from "react";
import { Avatar, Box, Grid, Paper, Typography } from "@mui/material";
import useFetch from "../../hooks/useFetch";
// import userData from "./userData";

const Profile = () => {
  const [bio, setBio] = useState("");
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState("");

  const res = useFetch(`/api/oauth/whoami`);

  useEffect(() => {
    if (res.response) {
      setBio(res.response.bio);
      setUsername(res.response.login);
      setAvatar(res.response.avatar_url);
    }
  }, [res]);

  if (res.isLoading) {
    return <div>Loading...</div>;
  }
  if (res.error) {
    return <div>There was an error.</div>;
  }

  return (
    <Box mt={16} mx="auto" width="70%" height={12} data-test="Profile-page">
      <Paper>
        <Grid container spacing={8}>
          <Box mx={12} mb={6} mt={5}>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Grid container direction="row" alignItems="center">
                    <Grid item>
                      <Avatar
                        sx={{ width: 60, height: 60 }}
                        alt="User's Name"
                        src="/static/images/grid/complex.jpg"
                        data-test="profile-avatar"
                      >
                        {avatar}
                      </Avatar>
                    </Grid>
                    <Grid item>
                      <Box ml="15px">
                        <Typography
                          gutterBottom
                          variant="h5"
                          data-test="user-name"
                        >
                          {username}
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                  <Box mt="25px" mb="21px" data-test="user-info">
                    <Typography variant="body2" gutterBottom align="left">
                      {bio}
                      {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. */}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Profile;
