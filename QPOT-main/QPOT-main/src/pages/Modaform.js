import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import SendIcon from '@mui/icons-material/Send';

const Modaform = () => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
      const [open, setOpen] = React.useState(false);
      const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);  
      const [age, setAge] = React.useState('');

      const handleChange = () => {
        // setAge(event.target.value as string);
      };
      const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
    
  <Box sx={style}>
  <Typography variant="h6" gutterBottom label={'margin="none"'}>
      User Creation
      </Typography>
     
      <Divider />
     
    <div className='row my-3'>

   <div className='col-sm-6'>
 
   <FormControl sx={{  minWidth: 200 }} size="small">
        <InputLabel id="demo-select-small">Employee Code</InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={age}
          label="Employee Code"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
  </div>
  <div className='col-sm-6'>
  <FormControl sx={{minWidth: 200 }} size="small">
      <InputLabel id="demo-select-small">User Type</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={age}
        label="User Type"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  </div>
  <div className='col-sm-6 my-3' >
  <TextField id="outlined-basic" label="First Name" variant="outlined" size="small" />
 
  
  </div>
  <div className='col-sm-6 my-3' >
  <TextField id="outlined-basic" label="Last Name" variant="outlined" size="small"/>
  </div>
  <div className='col-sm-6 my-1' >
  <TextField id="outlined-basic" label="Email Address" type="email" variant="outlined" size="small"/>
  </div>
  <div className='col-sm-6 '>
  {/* <TextField id="outlined-basic" sx={{width: 200}} label="User Creation Date" type="date" variant="outlined" size="small" /> */}
  {/* <TextField
        id="outlined-basic"
        label="User Creation Date"
        type="date"
        sx={{width: 200}}
        variant="outlined"
        size="small"
        InputLabelProps={{
          shrink: true,
        }}
      /> */}
      
  </div>
  <div className="col-sm-6 my-3">
  <FormControl sx={{width: '23' }} variant="outlined" size="small">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        

  </div>
  <div className="col-sm-6 my-3">
  <FormControl sx={{width: '23' }} variant="outlined" size="small">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        

  </div>
  <div className="col-sm-6 my-3">
  <FormControlLabel  label="Status of user" control={<Switch defaultChecked />} />
  </div>
  <div className="col-sm-6 my-3"></div>
  <div className="col-sm-6">
  <Button  variant="contained" endIcon={<SendIcon />}>
  Create User
</Button>

  </div>
  </div>
    
  </Box>
</Modal>
    </div>
  )
}

export default Modaform

