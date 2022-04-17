import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Checkbox,FormGroup, Grid, Typography,Button, TextareaAutosize,MenuItem,Select,InputLabel,Radio,FormControl,FormControlLabel,FormLabel,RadioGroup } from '@mui/material';
import {useNavigate} from 'react-router-dom';
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Slider from '@mui/material/Slider';
import {Link} from 'react-router-dom'

toast.configure();



function AddEmployee(){
    const data=JSON.parse(localStorage.getItem("emp"))||[]
    
    const [value,setValue]=useState([])
    const[range,setRange]=useState()
    const navigation=useNavigate()
    const [name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[mob,setMob]=useState('')
    const[pwd,setPwd]=useState()
    const[addr,setAddr]=useState('')
    const[gender,setGender]=useState('')
    
    const[hobbies,setHobbies]=useState()
    const [date, setDate] = useState(new Date());
    const [city,setCity]=useState('')
    const [reset,setReset]=useState('')
    let add=[]

    const AddHandler=()=>{
        navigation("/employee")
    }
    
    const SubmitHandler=(e)=>{
        if(email==''||name===''||mob===''||city===''){
            alert ('please enter the fields')
        }
        else{
        add={
            name:name,
            email:email,
            city:city,
            mob:mob,
            addr:addr,
            gender:gender,
            date:date,
            hobbies:hobbies,
            range:range,
           
        }
        
       // console.log("Add:"+add);
        value.push(add)
        //setValue(add)
      
        console.log(...value)
        localStorage.setItem("emp",JSON.stringify(value))
        toast.success("Added successfully",{position:toast.POSITION.TOP_RIGHT}); 
    }  
    }

    const handleInputChange=(e)=> {
        setHobbies(e.target.value)
       // localStorage.setItem("hobbie",JSON.stringify(hobbies))
        // const target = e.target
        // var value = target.value
        
        // if(target.checked){
        //    setHobbies(value)  
            
        // }else{
        //     setHobbies(hobbies.splice(value, 1));
        //    localStorage.setItem("hobbie",JSON.stringify(hobbies)) 
        // }
        
    }
    const ClearHandler=(e)=>{
        window.location.reload()
    }

    const UpdateRange=(e)=>{
        setRange(e.target.value)
        localStorage.setItem("range",JSON.stringify(range))
    }
    return(
        <>
        <Grid container  >
        
       
        <Grid style={{border:'0.2px solid white',  marginLeft:'200px',padding:'30px', width:'60%'}} container spacing={1} direction="column" alignItems="center" justifyContent="center">
        <Typography color="primary"  gutterBottom variant="h5"  >
        Add Employee
        </Typography>
        
                    <Grid item >
                        <TextField  style={{width:'150%'}} value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter first name" variant="outlined"  error={name === ""}
        helperText={name === "" ? "Empty!" : " "} fullWidth required/>

                    </Grid>
                    <Grid item>
                        <TextField  type="email" style={{width:'150%'}} value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" variant="outlined"  error={email === ""}
        helperText={email === "" ? "Please enter valid email!" : " "} fullWidth required/>

                    </Grid>
                    <Grid  item>
                        <TextField label="Mobile Number" style={{width:'150%'}} value={mob} onChange={(e)=>setMob(e.target.value)}  variant="outlined"  error={mob === ""}
        helperText={mob === "" ? "Please enter 10 digit" : " "} fullWidth required/>

                    </Grid>
                    <Grid item>
                        <TextField label="City" error={city === ""} style={{width:'150%'}}
        helperText={city === "" ? "Please enter city!" : " "} value={city} onChange={(e)=>setCity(e.target.value)} variant="outlined" fullWidth required/>
                    </Grid>
                    <Grid item>
                        <TextField label="Password" type="password" style={{width:'150%'}} value={pwd} onChange={(e)=>setPwd(e.target.value)} variant="outlined" error={pwd === ""} helperText={pwd === "" ? "Empty!" : " "} fullWidth required/>
                    </Grid>
                    <Grid item>
                    <TextField type="textarea" aria-label="minimum height"  value={addr} onChange={(e)=>setAddr(e.target.value)}  error={addr === ""} helperText={addr === "" ? "Please enter address" : " "} minRows={5} label="Address" placeholder="Address" style={{ m:4 ,width: '150%' }}/>
                    </Grid>

                    {/* <Grid item xs={6} sm={6}  sx={{ m: 1, minWidth: 200 }}>
                    <InputLabel  id="demo-simple-select-label" fullWidth>State</InputLabel>
                        <Select labelId="demo-simple-select-label"value="State" id="demo-simple-select" label="Age">
                        <MenuItem value="choose">Pune</MenuItem>
                        <MenuItem value={20}>Mumbai</MenuItem>
                        <MenuItem value={30}>Nashik</MenuItem>
                        </Select>
                        
                    </Grid > */}
                    <Grid  item>
                    <TextField id="date" label="Birthdate" type="date" style={{width:'150%'}}  value={date} onChange={(e)=>setDate(e.target.value)} InputLabelProps={{shrink: true,}}/>
                    </Grid>
                    <Grid item >
                    <FormControl component="fieldset" style={{width:'150%'}}>
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={gender} onChange={(e)=>setGender(e.target.value)}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                           
                        </RadioGroup>
                        </FormControl>
                    </Grid>
                    
                    <Grid item  >
                    <FormGroup  value={hobbies} onChange={handleInputChange}>
                    <FormLabel component="legend" style={{width:'150%'}}>Hobbies</FormLabel>
                    <FormControlLabel control={<Checkbox  />} label="Playing Badminton" ></FormControlLabel>
                    <FormControlLabel control={<Checkbox  />} label="Playing Cricket" ></FormControlLabel>
                    <FormControlLabel control={<Checkbox  />} label="Reading Books" ></FormControlLabel>
                    <FormControlLabel control={<Checkbox  />} label="Dance" ></FormControlLabel>
                    </FormGroup>

                    </Grid>
                   
                    <Grid style={{width:300,margin:30}}>
                    <FormLabel component="legend">Communication Skill</FormLabel>
                        <Slider value={range} onChange={UpdateRange}/>
                    </Grid>
                   
                    <Grid item >
                        <Button  color="primary" variant="contained" style={{margin:'5px'}} onClick={SubmitHandler} >Submit</Button>
                        {/* <Button  color="primary" variant="contained" value={reset} style={{margin:'5px'}} onClick={ClearHandler} >Clear</Button> */}
                        <Button onClick={AddHandler} color="primary" variant="contained"  >Check Employee List</Button>
                    </Grid>
                </Grid>
            </Grid>
        
        
        
    
      
 
        </>
    )
}



    


export default AddEmployee