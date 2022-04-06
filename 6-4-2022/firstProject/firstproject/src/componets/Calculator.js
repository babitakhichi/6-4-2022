import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'black',
  width: 300,
  height: 300,
  ...theme.typography.body2,
  padding: theme.spacing(1),
  margin: "auto",
  color: theme.palette.text.secondary,
}));

function Calculator() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Item>
        <Grid
          container
          // direction="row"
          justifyContent="center"
          alignItems="center"
          rowSpacing={2}          
        >
          <Grid spacing={1} container item xs={12}>
            <Grid item xs={10}>
            
            <TextField variant="filled"  style = {{width: 260,backgroundColor:'white' }}/>
            </Grid>
            <Grid item xs={1}>
            <Button variant="contained"  style = {{minWidth:5,height:56,backgroundColor:'deeppink'}}>E</Button>
            </Grid>
          </Grid>
          <Grid  container item xs={12}>
          <Grid xs={3.4} item >
            <Button variant="contained" style = {{minWidth:80,height:37,backgroundColor:'rebeccapurple' }}>1</Button>      
          </Grid>
          <Grid xs={3.4} item >
            <Button variant="contained" style = {{minWidth:80,height:37,backgroundColor:'rebeccapurple'}}>2</Button>      
          </Grid>
          <Grid xs={3.5} item >
            <Button variant="contained" style = {{minWidth:80,height:37,backgroundColor:'rebeccapurple'}} >3</Button>      
          </Grid>
          <Grid item xs={1} >
            
          <Button variant="contained" style ={{minWidth:40,height:37 ,backgroundColor:'rebeccapurple'}}>/</Button>     
          </Grid>
          </Grid>
          <Grid  container item xs={12}>
          <Grid xs={3.4} item >
            <Button variant="contained" style = {{minWidth:80,height:37 ,backgroundColor:'rebeccapurple'}}>4</Button>      
          </Grid>
          <Grid xs={3.4} item spacing={2}>
            <Button variant="contained" style = {{minWidth:80,height:37 ,backgroundColor:'rebeccapurple'}}>5</Button>      
          </Grid>
          <Grid xs={3.5} item spacing={2}>
            <Button variant="contained" style = {{minWidth:80,height:37 ,backgroundColor:'rebeccapurple'}}>6</Button>      
          </Grid>
          <Grid item xs={1} >
            
          <Button variant="contained" style = {{minWidth:40,height:37 ,backgroundColor:'rebeccapurple'}}>+</Button>    
          </Grid>
          </Grid>
          <Grid  container item xs={12}>
          <Grid xs={3.4} item spacing={2}>
            <Button variant="contained" style = {{minWidth:80,height:37 ,backgroundColor:'rebeccapurple'}}>7</Button>      
          </Grid>
          <Grid xs={3.4} item spacing={2}>
            <Button variant="contained" style = {{minWidth:80,height:37 ,backgroundColor:'rebeccapurple'}}>8</Button>      
          </Grid>
          <Grid xs={3.5} item spacing={2}>
            <Button variant="contained" style = {{minWidth:80,height:37 ,backgroundColor:'rebeccapurple'}}>9</Button>      
          </Grid>
          <Grid item xs={1} >
            
          <Button variant="contained" style = {{minWidth:40,height:37 ,backgroundColor:'rebeccapurple'}}>-</Button>    
          </Grid>
          </Grid>
          <Grid  container item xs={12}>
          <Grid xs={3.4} item spacing={2}>
            <Button variant="contained" style = {{minWidth:80,height:37 ,backgroundColor:'rebeccapurple'}}>.</Button>      
          </Grid>
          <Grid xs={3.4} item spacing={2}>
            <Button variant="contained" style = {{minWidth:80,height:37 ,backgroundColor:'rebeccapurple'}}>0</Button>      
          </Grid>
          <Grid xs={3.5} item spacing={2}>
            <Button variant="contained" style = {{minWidth:80,height:37 ,backgroundColor:'deeppink'}}>=</Button>      
          </Grid>
          <Grid item xs={1} >
            
          <Button variant="contained" style = {{minWidth:40,height:37 ,backgroundColor:'rebeccapurple'}}>*</Button>
          </Grid>
          </Grid>
        </Grid>
      </Item>
    </Box>
  );
}

export default Calculator;
