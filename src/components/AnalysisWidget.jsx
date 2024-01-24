import React from 'react';
import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";




const AnalysisWidget = ({ id, title,columnWidth = 'widget-item col-12 d-flex col-md-6 col-sm-6'  }) => {


const theme = useTheme();
const colors = tokens(theme.palette.mode);
return (
    <Box  className={` ${columnWidth}`} id={id}
        // backgroundColor={colors.primary[400]}
        sx={{ 
            // paddingLeft: "20px",
        justifyContent: "center",
        overflowY: "auto",
        }} >
    <div className="card card-sm flex-fill" style={{ backgroundColor: colors.primary[400], 
        color: colors.grey[100], borderColor: colors.primary[200] }}>
    <div className="card-header">
        <h4 className="card-title">{title}</h4>
        <div className="card-actions btn-actions">
        {/* Dropdown and other actions can be added here */}
        </div>
    </div>
    <div className="d-flex flex-column justify-content-between h-100 widget-content" style={{ minHeight: '10rem' }}>
        {/* Widget content goes here */}
    </div>
    </div>
    </Box>
);
};

export default AnalysisWidget;
