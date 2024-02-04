import React from 'react'
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';

function Footer() {
  return (
    <div>
        <Grid className='bg-black text-white text-center mt-10 '
        container sx={{}}>
            <Grid item xs={12} sm={6} md={3}>
                <Typography className='pb-5' variant='h6' >Company</Typography>
                <div>
                <Button className='pb-5' variant='h6'gutterBottom >About</Button>
                </div>
                <div>
                <Button className='pb-5' variant='h6'gutterBottom >Blog</Button>
                </div>
                <div>
                <Button className='pb-5' variant='h6'gutterBottom >Press</Button>
                </div>
                <div>
                <Button className='pb-5' variant='h6'gutterBottom >Jobs</Button>
                </div>
                <div>
                <Button className='pb-5' variant='h6'gutterBottom >Partners</Button>
                </div>

               
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Typography className='pb-5' variant='h6' >Solutions</Typography>
                <div>
                <Button className='pb-5' variant='h6' >Marketing</Button>
                </div>
                <div>
                <Button className='pb-5' variant='h6' >Analytics</Button>
                </div>
                <div>
                <Button className='pb-5' variant='h6' >Commerce</Button>
                </div>
                <div>
                <Button className='pb-5' variant='h6' >Support</Button>
                </div>
                <div>
                <Button className='pb-5' variant='h6' >Insights</Button>
                </div>

               
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Typography className='pb-5' variant='h6' >Documentation</Typography>
                <div>
                <Button className='pb-5' variant='h6' >Guides</Button>
                </div>
                <div>
                <Button className='pb-5' variant='h6' >Api-status</Button>
                </div>
                

               
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Typography className='pb-5' variant='h6' >Legal</Typography>
                <div>
                <Button className='pb-5' variant='h6' >Claim</Button>
                </div>
                <div>
                <Button className='pb-5' variant='h6' >Privacy</Button>
                </div>
                <div>
                <Button className='pb-5' variant='h6' >Terms</Button>
                </div>
                

               
            </Grid>
            <Grid className='pt-20' item xs={12}>
                <Typography variant='body2' component='p' align='center'>
                    &copy; 2023, Made with love by the team at CodersRank. All rights reserved.

                </Typography>
                <Typography variant='body2' component='p' align='center'>
                    &copy; 2023, Made with love by the team at CodersRank. All rights reserved.

                </Typography>
                
                
            </Grid>
        </Grid>
    </div>
  )
}

export default Footer