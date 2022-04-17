import React from 'react'
import {Button,Grid,Card} from '@mui/material'
import { useNavigate } from 'react-router-dom'

function Employee(){
    const navigation =useNavigate()

    const ClickHandler=()=>{
        navigation('/employee')
    }
    return(
        <>
        <h3>Click here to check employee list</h3>
        <Grid>
        <Grid container justifyContent="center">
      <Button variant="contained" onClick={ClickHandler}>Check Employee</Button>
    </Grid>
        </Grid>
        
        </>
    )
}
export default Employee