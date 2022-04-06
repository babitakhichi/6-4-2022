import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";
import { height, margin, padding } from '@mui/system';

import { Person, Timer,CalendarMonth ,MoreVert} from '@mui/icons-material';


const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);



    function Card1() {
        return (
            
               <Grid container
                  columnGap={2}>  
                  <Grid >                
                <Typography sx={{ fontSize: 22 ,lineHeight:1}} fontWeight='bold'>
                    85809
                </Typography>
                </Grid > 
                <Grid item xs={9.7}>
                <Button variant='contained' size='small'  sx={{borderRadius: 4 ,height:'23px', backgroundColor:'#3DB981',textTransform:'none'}}>Completed</Button>
                </Grid>
                <Grid>
                <MoreVert/>
                </Grid>
                </Grid>
                
           
        )
    }
            
            
            function Card2() {
              return (
                
                <Grid container
                columnGap={2}>  
                <Grid >                
              <Typography sx={{ fontSize: 22 ,lineHeight:1}} fontWeight='bold'>
                  85809
              </Typography>
              </Grid > 
              <Grid item xs={9.7}>
              <Button variant='contained' size='small'  sx={{borderRadius: 4 ,height:'23px', backgroundColor:'#F5486D', textTransform:'none'}}>In Progress</Button>
             
              </Grid>
              <Grid>
              <MoreVert/>
              </Grid>
              </Grid>
            
              )
            }
            
                        
            function Part() {
              return (
                  <>
                {/* <Typography variant="h5" component="div">
                be{bull}nev{bull}o{bull}lent
            </Typography> */}
            <Grid  item rowGap={1} >
            <Typography sx={{ fontSize: 22 }} color="text.secondary">
                what the campaign is about
            </Typography>
            </Grid>
            <Grid container item xs={12} >
            <Grid item xs={6}>
            <Typography variant="body2" sx={{ fontSize: 16 ,paddingTop:"15px", fontWeight:'bold'}}>
                Number of Leads to Verify
                <br />
                 </Typography>
                 <Typography color={'GrayText'} paddingTop={'0px'} fontSize={16}>1000</Typography>
            </Grid>
            <Grid item xs={4}>
            <Typography variant="body2" sx={{ fontSize: 16 ,paddingTop:"15px", fontWeight:'bold'}}>
                Schedule Reverify
                <br />
                 </Typography>
                 <Typography color={'GrayText'} paddingTop={'0px'} fontSize={16}>30 Days</Typography>
            </Grid>
            </Grid>
            </>
              )
            }

function Bottom() {
  return (
    <Grid container item xs={12} >
        <Grid item xs={6} md={3}>
           
            <Typography component='div' sx={{fontWeight:'bold' , display:'flex' ,alignContent:'center'}}> 
            <Person /> 10,000           
            </Typography>            
        </Grid>
        <Grid item md={3} xs={6}>
            <Typography sx={{fontWeight:'bold',display:'flex'}}> <CalendarMonth/> 20/09/2021</Typography>
        </Grid>
        <Grid item xs={6} md={3}>
             <Typography sx={{fontWeight:'bold',display:'flex'}}> <Timer/> 07:30:00</Typography>
        </Grid>
        <Grid item xs={6} md={2}>
             <Typography sx={{fontWeight:'bold'}}>#28161625</Typography>
        </Grid>

    </Grid>
  )
}

            
                 
            
            

export default function OutlinedCard() {
    return (
        <Grid columnSpacing={2} container item xs={12}>
            <Grid item xs={3}>
                <Card variant='outlines' sx={{ height:'100vh' ,backgroundColor:'darkblue'}}></Card>
            </Grid>
            <Grid item xs={9} md={4.5}>
            <Box sx={{ minWidth: 275, paddingRight:'20px' ,paddingTop:'20px' }}>               
                <Card variant="outlined" >
                    <CardContent >
                    <Card1/>
                        <Part/>
                        </CardContent>
                        </Card>
                        <Card variant='outlined' sx={{height:'auto'}}>
                    <CardContent> <Bottom/></CardContent>
                </Card>
               
                </Box>
                
                
                
            </Grid>
            
            <Grid  item xs={9}  md={4.5} >
                <Box sx={{ minWidth: 275, paddingRight:'20px' ,paddingTop:'20px' }}>
                    <Card variant="outlined"  >
                    <CardContent>
                    <Card2/>
                        <Part/>
                        </CardContent>
                        </Card>
                        <Card variant='outlined' sx={{height:'auto'}}>
                    <CardContent> <Bottom/></CardContent>
                </Card>
                </Box>
                
            </Grid>
           
        </Grid>
    );
}
