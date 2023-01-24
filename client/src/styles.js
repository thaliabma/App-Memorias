// import {makeStyles}  from '@mui/material';
import { styled } from '@mui/material/styles'
import {Container, AppBar, Typography, Grow, Grid} from '@mui/material'


export const Header =  styled(AppBar)({
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
})

export const Heading =  styled(Typography)({
    color: 'rgba(0,183,255, 1)',
})

export const Image =  styled('img')({
    marginLeft: '15px',
    width: '85px'
})
