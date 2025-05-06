import { useState } from "react";
import {
    Drawer,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    Box,
} from "@mui/material";
import { FaCloudSun } from "react-icons/fa";
 
const menuItems = [
    { text: "Weather Forecast", icon: <FaCloudSun />, id: "weather" },
    { text: "Heat Watch", icon: <FaCloudSun />, id: "heat-watch" },
    { text: "Cyclone", icon: <FaCloudSun />, id: "cyclone" },
    { text: "Drought", icon: <FaCloudSun />, id: "drought" },
    { text: "Nowcast Weather", icon: <FaCloudSun />, id: "Nowcast Weather" },
    { text: "Flood Forecast", icon: <FaCloudSun />, id: "flood-control" },
    { text: "Drinking Water Stress", icon: <FaCloudSun />, id: "service-wise" },
];

const Sidebar = () => {
    const [open, setOpen] = useState(false);
    const [showWeatherPanel, setShowWeatherPanel] = useState(false);

    return (
        <Box sx={{ display: "flex" }}>
            <Drawer
                variant="permanent"
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
                sx={{
                    width: open ? 200 : 50,
                    flexShrink: 0,
                    transition: "width 0.5s ease-in-out",
                    "& .MuiDrawer-paper": {
                        width: open ? 200 : 50,
                        height: "auto",
                        maxHeight: "100vh",
                        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
                        background: "linear-gradient(to bottom, #5FECC8, rgba(95, 236, 200, 0.05))",
                        border: "1px solid rgba(255, 255, 255, 0.5)",
                        color: "#000",
                        borderRadius: "30px",
                        flexDirection: "column",
                        paddingTop: 2,
                        transition: "width 0.5s ease-in-out",
                        overflowX: "hidden",
                        paddingBottom: 3,
                        marginTop: "7em",
                        marginLeft: "1em",
                    },
                }}
            >
                <List sx={{ width: "100%", padding: 0 }}>
                    {menuItems.map((item, index) => (
                        <ListItemButton
                            key={index}
                            sx={{
                                color: "white",
                                "&:hover": { background: "rgba(255, 255, 255, 0.2)" },
                            }}
                            onClick={() => setShowWeatherPanel(item.id === "weather")}
                        >
                            <ListItemIcon sx={{ color: "white", minWidth: 40 }}>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText
                                primary={item.text}
                                sx={{ opacity: open ? 1 : 0, whiteSpace: "nowrap" }}
                            />
                        </ListItemButton>
                    ))}
                </List>
            </Drawer>

            {showWeatherPanel && (
                <Box
                    sx={{
                        position: "absolute",
                        left: open ? 218 : 80,
                        top: "5em",
                        width: "auto",
                        background: "white",
                        borderRadius: "15px",
                        boxShadow: "2px 2px 10px rgba(0,0,0,0.2)",
                        padding: 2,
                        transition: "left 0.5s ease-in-out",
                        marginTop: '3.5em',
                        borderTopLeftRadius: 0,
                        borderBottomLeftRadius: 0,
                        overflow: "auto",
                    }}
                >
                    <Typography variant="h6" sx={{ color: "black", marginTop: 2 }}>
                        Weather Forecast
                    </Typography>
                    <Box sx={{ marginTop: 2, color: "black" }}>
                        <Typography variant="body1">Source: ECMWF</Typography>
                        <Box sx={{ marginTop: 1 }}>
                            <Typography variant="body2">Wind Speed</Typography>
                            <Typography variant="body2">2:30 PM</Typography>
                            <Typography variant="body2">8:30 PM</Typography>
                        </Box>
                    </Box>
                </Box>
            )}
        </Box>
    );
};

export default Sidebar;
