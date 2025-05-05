import { useState } from 'react';
import {
    Box, CardContent, Typography, Table, TableBody, TableContainer,
    TableHead, TableRow, Grid, Checkbox
} from '@mui/material';
import { styled } from '@mui/system';
import { Button } from '@mui/material';

const EnquiryCard = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: "#5FECC8",
    color: 'black',
    borderRadius: '8px 10px 0 0',
});

const EnquiryCardBody = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: "#1C223C",
    color: 'white',
    marginTop: '0.5em'
});

const StyledCardContent = styled(CardContent)({
    padding: '8px 12px',
    fontSize: '12px',
});

const alertData = [
    {
        id: 1,
        incidentId: '2023052400004',
        eventDateTime: '4-04-2025 13:44:07',
        location: 'North Goa',
        alertType: 'Unknown',
        trigger: 'Triggered',
        status: '65%',
    },
    {
        id: 2,
        incidentId: '2023052400005',
        eventDateTime: '4-04-2025 13:44:07',
        location: 'North Goa',
        alertType: 'Unknown',
        trigger: 'Trigger',
        status: '0',
    },
    {
        id: 3,
        incidentId: '2023052400005',
        eventDateTime: '4-04-2025 13:44:07',
        location: 'North Goa',
        alertType: 'Unknown',
        trigger: 'Trigger',
        status: '0',
    },
    {
        id: 4,
        incidentId: '2023052400005',
        eventDateTime: '4-04-2025 13:44:07',
        location: 'North Goa',
        alertType: 'Unknown',
        trigger: 'Trigger',
        status: '0',
    },
    {
        id: 5,
        incidentId: '2023052400005',
        eventDateTime: '4-04-2025 13:44:07',
        location: 'North Goa',
        alertType: 'Unknown',
        trigger: 'Trigger',
        status: '0',
    },
];

const AlertPanel = () => {
    const [selected, setSelected] = useState([]);

    const handleCheckboxChange = (id) => {
        setSelected((prevSelected) =>
            prevSelected.includes(id)
                ? prevSelected.filter((item) => item !== id)
                : [...prevSelected, id]
        );
    };

    return (
        <Box sx={{ flexGrow: 1, mt: 1, ml: 1, mr: 1, mb: 2 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={8}>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <EnquiryCard>
                                        <StyledCardContent style={{ flex: 0.2 }}>
                                        </StyledCardContent>
                                        <StyledCardContent style={{ flex: 0.3, borderRight: "1px solid black" }}>
                                            <Typography variant="subtitle2" sx={{ lineHeight: '1.2' }}>Sr. No</Typography>
                                        </StyledCardContent>
                                        <StyledCardContent style={{ flex: 1.2, borderRight: "1px solid black" }}>
                                            <Typography variant="subtitle2" sx={{ lineHeight: '1.2' }}>Incident ID</Typography>
                                        </StyledCardContent>
                                        <StyledCardContent style={{ flex: 1.2, borderRight: "1px solid black" }}>
                                            <Typography variant="subtitle2" sx={{ lineHeight: '1.2' }}>Event Date & Time</Typography>
                                        </StyledCardContent>
                                        <StyledCardContent style={{ flex: 1, borderRight: "1px solid black" }}>
                                            <Typography variant="subtitle2" sx={{ lineHeight: '1.2' }}>Location</Typography>
                                        </StyledCardContent>
                                        <StyledCardContent style={{ flex: 1, borderRight: "1px solid black" }}>
                                            <Typography variant="subtitle2" sx={{ lineHeight: '1.2' }}>Alert Type</Typography>
                                        </StyledCardContent>
                                        <StyledCardContent style={{ flex: 1, borderRight: "1px solid black" }}>
                                            <Typography variant="subtitle2" sx={{ lineHeight: '1.2' }}>Trigger</Typography>
                                        </StyledCardContent>
                                        <StyledCardContent style={{ flex: 0.8, borderRight: "1px solid black" }}>
                                            <Typography variant="subtitle2" sx={{ lineHeight: '1.2' }}>Status</Typography>
                                        </StyledCardContent>
                                    </EnquiryCard>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {alertData.map((item, index) => (
                                    <EnquiryCardBody key={item.id}>
                                        <StyledCardContent style={{ flex: 0.2 }}>
                                            <Checkbox
                                                checked={selected.includes(item.id)}
                                                onChange={() => handleCheckboxChange(item.id)}
                                                sx={{
                                                    color: 'white',
                                                    '&.Mui-checked': {
                                                        color: 'white',
                                                    },
                                                }}
                                            />
                                        </StyledCardContent>
                                        <StyledCardContent style={{ flex: 0.3 }}>
                                            <Typography variant="subtitle2" sx={{ lineHeight: '1.2' }}>{index + 1}</Typography>
                                        </StyledCardContent>
                                        <StyledCardContent style={{ flex: 1.2 }}>
                                            <Typography variant="subtitle2" sx={{ lineHeight: '1.2' }}>{item.incidentId}</Typography>
                                        </StyledCardContent>
                                        <StyledCardContent style={{ flex: 1.2 }}>
                                            <Typography variant="subtitle2" sx={{ lineHeight: '1.2' }}>{item.eventDateTime}</Typography>
                                        </StyledCardContent>
                                        <StyledCardContent style={{ flex: 1 }}>
                                            <Typography variant="subtitle2" sx={{ lineHeight: '1.2' }}>{item.location}</Typography>
                                        </StyledCardContent>
                                        <StyledCardContent style={{ flex: 1 }}>
                                            <Typography variant="subtitle2" sx={{ lineHeight: '1.2' }}>{item.alertType}</Typography>
                                        </StyledCardContent>
                                        <StyledCardContent style={{ flex: 1 }}>
                                            <Box
                                                sx={{
                                                    backgroundColor: item.trigger === 'Triggered' ? 'green' : 'red',
                                                    color: 'white',
                                                    px: 1,
                                                    py: 0.5,
                                                    borderRadius: '6px',
                                                    textAlign: 'center',
                                                    width: 'fit-content'
                                                }}
                                            >
                                                {item.trigger}
                                            </Box>
                                        </StyledCardContent>
                                        <StyledCardContent style={{ flex: 0.8 }}>
                                            <Typography variant="subtitle2" sx={{ lineHeight: '1.2' }}>{item.status}</Typography>
                                        </StyledCardContent>
                                    </EnquiryCardBody>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => {
                                console.log('View All clicked');
                            }}
                        >
                            View All
                        </Button>
                    </Box>

                </Grid>

                <Grid item xs={12} md={4}>
                    <Box sx={{
                        backgroundColor: '#fff3cd',
                        padding: 2,
                        borderRadius: '8px',
                        border: '1px solid #ffeeba'
                    }}>
                        <Typography variant="h6" sx={{ color: '#856404' }}>
                            Hey Welcome to Alert Panel!
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AlertPanel;
