import React from 'react';
import { Box, useTheme } from "@mui/material";
// import Header from "../../components/Header";
import { tokens } from "../../../theme";
const AnalyticCard = ({ data }) => {
const { icon, title, amount, increase } = data;
const theme = useTheme();
const colors = tokens(theme.palette.mode);


return (
    <Box
        backgroundColor={colors.primary[400]} sx={{ 
        // paddingLeft: "20px",
        justifyContent: "center",
        overflowY: "auto",
        }} >

        {/* <div className="card analytic-card"> */}
            <div className="card-body p-3">
            <div className="row align-items-center">
                <div className="col-auto">
                <span className="icon-tabler-wrapper icon-md bg-pink rounded p-1">
                    {icon}
                </span>
                </div>
                <div className="col mt-0" >
                <p className="text-secondary mb-0 fs-3">{title}</p>
                <h3 className="mb-n1 fs-1">{amount}</h3>
                </div>
            </div>
            </div>
            <div className="px-3 pb-4">
            <span className="text-success">
                {increase} increase{' '}
                <span className="icon-tabler-wrapper">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-trending-up"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 17l6 -6l4 4l8 -8"></path>
                    <path d="M14 7l7 0l0 7"></path>
                </svg>
                </span>
            </span>
            </div>
        {/* </div> */}
    </Box>

);
};

export default AnalyticCard;
