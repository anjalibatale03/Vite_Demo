import Typography from '@mui/material/Typography';

export default function Navbar() {

    return (
        <div
            style={{
                position: 'fixed',
                bottom: 0,
                width: '100%',
                zIndex: 1000,
                background: "#1A1D33",
                color: 'white',
                display: "flex",
            }}
        >
            {/* <img style={{ height: '30px', width: '76px', marginTop: "2px", marginLeft: "15px", color: "#ffffff" }} src={Logo} alt="Spero" /> */}

            <Typography variant="subtitle2" component="div" align="center"
                sx={{
                    flexGrow: 1,
                    fontFamily: 'sans-serif',
                    fontStyle: 'normal',
                    color: 'white',
                    textDecoration: 'none',
                    marginTop: '4px'
                }}>
                Powered by Spero 2025
            </Typography>
        </div>
    );
}