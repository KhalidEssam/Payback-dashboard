import {  MenuItem } from "react-pro-sidebar";
import { Box, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import "../Scss/Themes.css";
import { tokens } from "../theme";
import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const renderOptions = ({title, to, options, selected, setSelected, colors }) => {
return options && options.map((option) => (  
    <MenuItem
        key={option.title}
        active={selected.includes(option.title)}
        style={{
        color: colors.grey[100],
        }}
        onClick={() => {

        setSelected(title+'/'+option.title);
        }}
        icon={option.icon}
    >
        <Typography>{option.title}</Typography>
        <Link to={to+'/'+option.to} />
    </MenuItem>
));
};

const Item = ({ title, to, icon, selected, setSelected, options  }) => {
const theme = useTheme();
const colors = tokens(theme.palette.mode);
const handleItemClick = () => {
    title ===selected ? setSelected("") : setSelected(title);
}       


return (
<>
    
    <MenuItem
    active={selected.includes(title)}
    style={{
        color: colors.grey[100],
    }}
    onClick={handleItemClick}
    icon={icon}
    >
        {options.length ===0 &&  <Link to={to} />}
        <Box display="flex" alignItems="center">
        <Typography>{title}</Typography>
        {options && options.length > 0 && <ExpandMoreIcon style={{ color: colors.grey[100], marginLeft: "auto" }} />}
        </Box>


    </MenuItem>

    

    {( selected.includes(title)) && options.length>0 && (
    
    <Box paddingLeft= "10%">
        {/* {console.log('title :'+ title)} 
        {console.log('selected :'+ selected)} 
        {console.log(selected.includes(title))}

        {console.log('-------------------------------')} */}

        {renderOptions({
        title,
        to,
        options,
        selected,
        setSelected,
        colors,
        })}
    </Box>
    ) }

    {/* {!child.includes(to) && setchild("")} */}

</>
);
};

export default Item;