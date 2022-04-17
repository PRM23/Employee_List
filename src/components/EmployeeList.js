import React, { useState,useEffect } from 'react'
import {Button,Grid} from '@mui/material'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
toast.configure();



function EmployeeList(){
    const data=JSON.parse(localStorage.getItem("emp"))||[]
    const [value,setValue]=useState(data)
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[city,setCity]=useState('')
  const navigation =useNavigate()
    const {id}=useParams
 
    
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));
      
      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));


      const AddHandler=()=>{
        navigation('/employee/add')
      }
      
      const DeleteHandler=(id)=>{
          const remove=value.filter((items,i)=>i!==id)
          setValue(remove)
          console.log(remove)
          
       
          localStorage.setItem("emp",JSON.stringify(remove))
            toast.success("Deleted successfully",{position:toast.POSITION.TOP_RIGHT});
            
            
      }
     const EditHandler=(id)=>{
       
         navigation(`/employee/edit/${id}`)
     }
      
    return(
        <>
        <h1>Employee List</h1>
        <Grid container justifyContent="flex-end">
        <Button color="primary" variant="contained" style={{margin:'5px'}} onClick={AddHandler} >+Add Employee</Button>
    </Grid>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Employee Profile</StyledTableCell>
            <StyledTableCell align="center">Employee Name</StyledTableCell>
            <StyledTableCell align="center">Employee Email Id</StyledTableCell>
            <StyledTableCell align="center">City</StyledTableCell>
            <StyledTableCell align="center">Mobile Number</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {value.length>0?value.map((row,i) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell align="center" component="th" scope="row">
              <Avatar  align="center" alt={row.name[0]} src="/static/images/avatar/1.jpg" sx={{ bgcolor: deepOrange[500], width: 45, height: 45 }}/>
              </StyledTableCell>
              
              <StyledTableCell align="center">{row.name}</StyledTableCell>
              <StyledTableCell align="center">{row.email}</StyledTableCell>
              <StyledTableCell align="center">{row.city}</StyledTableCell>
              <StyledTableCell align="center">{row.mob}</StyledTableCell>
              <IconButton align="center" aria-label="delete" onClick={()=>DeleteHandler(i)}>
                <DeleteIcon />
                </IconButton>
                <IconButton align="center" aria-label="edit" onClick={()=>EditHandler(i)}>
                <EditIcon />
                </IconButton>
            
            </StyledTableRow>
          )):<h4>No Data added</h4>}
        
         
        
        </TableBody>
      </Table>
    </TableContainer>
  


        </>
    )
}

export default EmployeeList