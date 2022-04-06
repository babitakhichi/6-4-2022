import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Firstgrid() {
  return (
    
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        
     spacing={1}
      >
        <Grid item xs={12} >
        <Item>
          <Grid container item spacing={3}>
            <Grid item xs={12} md={3}>
              1832 test 3
            </Grid>
            <Grid item xs={12} md={3}>
              <Button variant='contained' color='error'>completed</Button>
            </Grid>
            <Grid item xs={12} md={3}>
              Date   29-3-2022
            </Grid>
            <Grid item xs={12} md={3}>
              <Button variant='contained'>test</Button>
            </Grid>
          </Grid>
          </Item>
        </Grid>
        <Grid item xs={12} >
        <Item>
          <Grid container item spacing={3}>
            <Grid  item xs={12} md={3}>
              1832 test
            </Grid>
            <Grid item xs={12} md={3}>
              <Button variant='contained' color='error'>completed</Button>
            </Grid>
            <Grid item xs={12} md={3}>
              Date   29-3-2022
            </Grid>
            <Grid item xs={12} md={3}>
              <Button variant='contained'>test</Button>
            </Grid>
          </Grid>
          </Item>
        </Grid>
        <Grid item xs={12} >
        <Item>
          <Grid container item spacing={3}>
            <Grid item xs={12} md={3}>
              1832 test
            </Grid>
            <Grid item xs={12} md={3}>
              <Button variant='contained' color='error'>completed</Button>
            </Grid>
            <Grid item xs={12} md={3}>
              Date   29-3-2022
            </Grid>
            <Grid item xs={12} md={3}>
              <Button variant='contained'>test</Button>
            </Grid>
          </Grid>
          </Item>
        </Grid>
        <Grid item xs={12} >
        <Item>
          <Grid container item spacing={3}>
            <Grid item xs={12} md={3}>
              1832 test
            </Grid>
            <Grid item xs={12} md={3}>
              <Button variant='contained' color='error'>completed</Button>
            </Grid>
            <Grid item xs={12} md={3}>
              Date   29-3-2022
            </Grid>
            <Grid item xs={12} md={3}>
              <Button variant='contained'>test</Button>
            </Grid>
          </Grid>
          </Item>
        </Grid>

        
      </Grid>
    </Box>

  )
}

export default Firstgrid