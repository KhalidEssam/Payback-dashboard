import {  MenuItem } from "react-pro-sidebar";
import { Box, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import "../Scss/Themes.css";
import { tokens } from "../theme";
import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const renderOptions = ({to, options, selected, setSelected, colors }) => {
return options && options.map((option) => (  
    <MenuItem
        key={option.title}
        active={selected === option.title}
        style={{
        color: colors.grey[100],
        }}
        onClick={() => {
        setSelected(option.title);
        option.onClick && option.onClick(option.title);
        }}
        icon={option.icon}
    >
        <Typography>{option.title}</Typography>
        <Link to={to+'/'+option.to} />
    </MenuItem>
));
};

const Item = ({ title, to, icon, selected, setSelected, options }) => {
const theme = useTheme();
const colors = tokens(theme.palette.mode);
// const [isOptionsVisible, setOptionsVisible] = useState(false);

const handleItemClick = () => {
    title ===selected ? setSelected("") : setSelected(title);

    // setSelected(title);
}

return (
<>
    
    <MenuItem
    active={selected === title}
    style={{
        color: colors.grey[100],
    }}
    onClick={handleItemClick}
    icon={icon}
    >
        <Box display="flex" alignItems="center">
        <Typography>{title}</Typography>

        {options && options.length > 0 && <ExpandMoreIcon style={{ color: colors.grey[100], marginLeft: "auto" }} />}
        </Box>

    <Link to={to} />
    </MenuItem>
    


    {selected.includes(title) && options && (

    <Box paddingLeft= "10%">
        {renderOptions({
        to,
        options,
        selected,
        setSelected,
        colors,
        })}
    </Box>
    )}

</>
);
};

export default Item;