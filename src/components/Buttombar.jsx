import { useState, useEffect }  from "react";
import {
BottomNavigation,
BottomNavigationAction,
Box,
useTheme,
Menu,
MenuItem,
} from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../theme";
import "../Scss/Themes.css";
import React from "react";
import {
// HomeOutlined as HomeOutlinedIcon,
// PeopleOutlined as PeopleOutlinedIcon,
// ContactsOutlined as ContactsOutlinedIcon,
// ReceiptOutlined as ReceiptOutlinedIcon,
// PersonOutlined as PersonOutlinedIcon,
// CalendarTodayOutlined as CalendarTodayOutlinedIcon,
// HelpOutlineOutlined as HelpOutlineOutlinedIcon,
// BarChartOutlined as BarChartOutlinedIcon,
// PieChartOutlineOutlined as PieChartOutlineOutlinedIcon,
// TimelineOutlined as TimelineOutlinedIcon,
// MapOutlined as MapOutlinedIcon,
MoreVertOutlined as MoreVertOutlinedIcon,
} from "@mui/icons-material";

import {dummySidebarData} from "../data/mockData"
// import { ClassNames } from "@emotion/react";



const Buttombar = ({ height }) => {
const theme = useTheme();
const colors = tokens(theme.palette.mode);
const [selected, setSelected] = useState("Dashboard");
const [anchorEl, setAnchorEl] = useState(null);
// eslint-disable-next-line
const [menuItems, setMenuItems] = useState([
// { label: "Dashboard", value: "", icon: <HomeOutlinedIcon /> },
// { label: "Team", value: "team", icon: <PeopleOutlinedIcon /> },
// {
// label: "Contacts",
// value: "contacts",
// icon: <ContactsOutlinedIcon />,
// },
// {
// label: "Invoices ",
// value: "invoices",
// icon: <ReceiptOutlinedIcon />,
// },
// {
// label: "Profile Form",
// value: "form",
// icon: <PersonOutlinedIcon />,
// },
// {
// label: "Calendar",
// value: "calendar",
// icon: <CalendarTodayOutlinedIcon />,
// },
// {
// label: "FAQ Page",
// value: "faq",
// icon: <HelpOutlineOutlinedIcon />,
// },
// {
// label: "Bar Chart",
// value: "bar",
// icon: <BarChartOutlinedIcon />,
// },
// {
// label: "Pie Chart",
// value: "pie",
// icon: <PieChartOutlineOutlinedIcon />,
// },
// {
// label: "Line Chart",
// value: "line",
// icon: <TimelineOutlinedIcon />,
// },
// {
// label: "Geography Chart",
// value: "geography",
// icon: <MapOutlinedIcon />,
// },
...dummySidebarData.map((item) => ({
label: item.title,
value: item.to,
icon: item.icon,
})),
]);


const [windowWidth, setWindowWidth] = useState(window.innerWidth);
// const [barPosition, setBarPosition] = useState('');


const handleWindowResize = () => {
setWindowWidth(window.innerWidth);
// setBarPosition('fixed')

};
useEffect(() => {
// Update windowWidth state when the window is resized
window.addEventListener("resize", handleWindowResize);

// Cleanup the event listener when the component unmounts
return () => {
window.removeEventListener("resize", handleWindowResize);
};
}, []);




let  maxVisibleItems = (windowWidth /100);


const handleMenuOpen = (event) => {
setAnchorEl(event.currentTarget);
};

const handleMenuClose = () => {
setAnchorEl(null);
};

return (
<Box
  sx={{
    position: 'fixed !important',
    bottom: 0,
    top: 'auto',
    width: '100%',
    backgroundColor: colors.primary[100],
  }}
  className="sticky"
>

    
<BottomNavigation
showLabels
style={{
    height: `${height}px`,
}}
>
{menuItems.slice(0, maxVisibleItems).map((item) => (
    <BottomNavigationAction
    key={item.value}
    label={item.label}
    value={item.value}
    icon={item.icon}
    selected={selected === item.value}
    onClick={() => setSelected(item.value)}
    component={Link}
    to={`${item.value}`}
    />
))}

{menuItems.length > maxVisibleItems && (
    <BottomNavigationAction
    label="More"
    icon={<MoreVertOutlinedIcon />}
    onClick={handleMenuOpen}
    />
)}
</BottomNavigation>

<Menu
anchorEl={anchorEl}
open={Boolean(anchorEl)}
onClose={handleMenuClose}
>
{menuItems.slice(maxVisibleItems).map((item) => (
    <MenuItem
    key={item.value}
    onClick={() => {
        setSelected(item.value);
        handleMenuClose();
    }}
    component={Link}
    to={`${item.value}`}
    >
    {item.label}
    </MenuItem>
))}
</Menu>
</Box>
);
};
export default Buttombar;
