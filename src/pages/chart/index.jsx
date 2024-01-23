import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import React from 'react';
import { tokens } from "../../theme";
// import { tokens } from "../../theme";

const Chart = ({ XChart, Title, Subtitle }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
    // <div className="container">
    <Box
    backgroundColor={colors.primary[400]} sx={{ paddingLeft: "20px",
    justifyContent: "center",
    overflowY: "auto",
    }}
    className="m-2 p-2">
        <Header title={Title} subtitle={Subtitle }   />
        <Box>
        <XChart />
        </Box>
    </Box>

    );
};

export default Chart;
