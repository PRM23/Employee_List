import React, { useEffect, useState} from 'react'
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { Card, CardContent, Grid, Typography,Button,TextareaAutosize,Checkbox,FormControlLabel,FormLabel,Radio,FormGroup,FormControl,RadioGroup } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ToastContainer,toast } from "react-toastify";
import { Slider } from '@mui/material';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();


function Edit(){
    const data=JSON.parse(localStorage.getItem("emp"))||[]
    const Range=JSON.parse(localStorage.getItem("emp"))||[]
    const Hobbie=JSON.parse(localStorage.getItem("emp"))||[]
    console.log(data)
    const [value,setValue]=useState(data)
    const navigation =useNavigate()

    const [name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[mob,setMob]=useState('')
    const [city,setCity]=useState('')
    const[pwd,setPwd]=useState()
    const[addr,setAddr]=useState('')
    const[gender,setGender]=useState('')
    const[hobbies,setHobbies]=useState(Hobbie)
    const [date, setDate] = useState(new Date());
    const [range,setRange]=useState(Range)
    const {id}=useParams()
    
    let add=""
   useEffect(()=>{
       let values=data.map((val,i)=>{
           console.log(i)
            if(i==id){
                console.log("edit")
                setName(val.name)
                setEmail(val.email)
                setCity(val.city)
                setMob(val.mob)
                setPwd(val.pwd)
                setDate(val.date)
                setAddr(val.addr)
                setGender(val.gender)
                setHobbies(val.hobbies)
                setRange(val.range)
            }
        })
   },[])
    const UpdateHandler=()=>{
        
        let modifiedValue=data.map((user,i)=>{
            if(i==id){
                console.log("update:"+user.name)
                setName(user.name)
                setEmail(user.email)
                setMob(user.mob)
                setCity(user.city)
                setPwd(user.pwd)
                setDate(user.date)
                setAddr(user.addr)
                
                setGender(user.gender)
                setHobbies(user.hobbies)
                return{...user,name:name,email:email,mob:mob,city:city,pwd:pwd,date:date,addr:addr,gender:gender,hobbies:hobbies,range:range}
            }
            console.log(user)
            setValue(user)
            return user
           
        })
        localStorage.setItem("emp",JSON.stringify(modifiedValue))
        navigation('/employee')
        toast.success("Updated successfully",{position:toast.POSITION.TOP_RIGHT});
        // console.log(value)
        // localStorage.setItem("emp",JSON.stringify(value))
    }

    const handleInputChange=(e)=> {
        const target = e.target
        var value = target.value
        
        if(target.checked){
           setHobbies(value)  
          // localStorage.setItem("hobbie",JSON.stringify(hobbies)) 
        }else{
            setHobbies(hobbies.splice(value, 1));
           // localStorage.setItem("hobbie",JSON.stringify(hobbies)) 
        }
        
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
        Update Employee
        </Typography>
        
                    <Grid item >
                        <TextField style={{width:'150%'}} value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter first name" variant="outlined"  error={name === ""}
        helperText={name === "" ? "Empty!" : " "} fullWidth required/>

                    </Grid>
                    <Grid item>
                        <TextField  type="email"value={email} style={{width:'150%'}} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" variant="outlined"  error={email === ""}
        helperText={email === "" ? "Please enter valid email!" : " "} fullWidth required/>

                    </Grid>
                    <Grid  item>
                        <TextField  style={{width:'150%'}} value={mob} onChange={(e)=>setMob(e.target.value)}  variant="outlined"  error={mob === ""}
        helperText={mob === "" ? "Please enter 10 digit" : " "} fullWidth required/>

                    </Grid>
                    <Grid item>
                        <TextField error={city === ""} style={{width:'150%'}}
        helperText={city === "" ? "Empty!" : " "} value={city} onChange={(e)=>setCity(e.target.value)} variant="outlined" fullWidth required/>
                    </Grid>
                    <Grid item>
                        <TextField label="password" type="password" style={{width:'150%'}} value={pwd} onChange={(e)=>setPwd(e.target.value)} variant="outlined" error={pwd === ""} helperText={pwd === "" ? "Empty!" : " "} fullWidth required/>
                    </Grid>
                    <Grid item>
                    <TextField aria-label="minimum height" type="textarea" value={addr} onChange={(e)=>setAddr(e.target.value)} error={addr === ""} helperText={addr === "" ? "Empty!" : " "} minRows={5} label="Address" placeholder="Address" style={{ m:4 ,width: '150%' }}/>
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
                    <TextField id="date" label="Birthdate" type="date" style={{width:'150%'}}  value={date} onChange={(e)=>setDate(e.target.value)} sx={{ width: 220 }} InputLabelProps={{shrink: true,}}/>
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
                        <Button  color="primary" variant="contained" style={{margin:'5px'}} onClick={UpdateHandler} >Update</Button>
                        {/* <Button  color="primary" variant="contained" value={reset} style={{margin:'5px'}} onClick={ClearHandler} >Clear</Button> */}
                        {/* <Button onClick={AddHandler} color="primary" variant="contained"  >Check Employee List</Button> */}
                    </Grid>
                </Grid>
            </Grid>

        </>
    )
}



    


export default Edit