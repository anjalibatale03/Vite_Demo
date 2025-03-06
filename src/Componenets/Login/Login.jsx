
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const Login = () => {

    const handleLogin= ()=> {
        
    }

    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography gutterBottom sx={{ marginBottom: 3 }}>
                    Login
                </Typography>
                <Box sx={{ display: 'flex', gap: 3, flexDirection: 'column'}}>
                    <TextField id="outlined-basic" label="User Name" variant="outlined" size="small" />
                    <TextField id="outlined-basic" label="Password" variant="outlined" size="small" />
                    <Button variant="contained" color="primary" onClick={handleLogin}>Login</Button>
                </Box>
            </CardContent>
        </Card>
    )
}

export default Login
