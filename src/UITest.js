import React from 'react';

import { Grid } from '@mui/material';


function UITest() {
  return (
    <Grid container rowSpacing={5} >
  <Grid item maxHeight={100}>Cell 1</Grid>
  <Grid item>Cell 2</Grid>
</Grid>
  );
}

export default UITest;
