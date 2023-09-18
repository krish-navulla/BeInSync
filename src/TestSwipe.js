import SwipingCard from "./SwipingCard";
import Navbar from "./Navbar";
import { Container, CssBaseline } from "@mui/material";
import { Grid } from "@mui/material";
import Paper from '@mui/material/Paper'; // Correct import statement


function TestSwipe() {
  return (
//  <div className="Iphone14ProMax1" style={{width: 500, height: 932, position: 'relative', background: 'white', align : "center"}}>
 <Grid Container style={{alignContent:"center", backgroundColor: " #007791"}} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  
  <Grid item component={Paper} elevation={6} square spacing={0} padding={1} margin={0}>
    <SwipingCard >

    </SwipingCard>
  </Grid>
  
  
</Grid>
)
  
};

export default TestSwipe;
