import React from "react";
import { mockDataTeam  } from "../../data/mockData";
import MUITable from '../../components/MUITable';
import Header from "../../components/Header";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";


const Team = ({headerIsVisible,rowNum}) => {

const theme = useTheme();
const colors = tokens(theme.palette.mode);
const mockDataTeamComluns = [


{ field: "id", headerName: "ID" },
{
    field: "name",
    headerName: "Name",
    flex: 1,
    cellClassName: "name-column--cell",
},
{
    field: "age",
    headerName: "Age",
    type: "number",
    headerAlign: "left",
    align: "left",
},
{
    field: "phone",
    headerName: "Phone Number",
    flex: 1,
},
{
    field: "email",
    headerName: "Email",
    flex: 1,
},
{
    field: "accessLevel",
    headerName: "Access Level",
    flex: 1,
    renderCell: ({ row: { access } }) => {


    return (
        <Box
        width="60%"
        m="0 auto"
        p="5px"
        display="flex"
        justifyContent="center"
        backgroundColor={
            access === "admin"
            ? colors.greenAccent[600]
            : access === "manager"
                ? colors.greenAccent[700]
                : colors.greenAccent[700]
        }
        borderRadius="4px"
        >
        {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
        {access === "manager" && <SecurityOutlinedIcon />}
        {access === "user" && <LockOpenOutlinedIcon />}
        <Typography className="name-column--cell"
            // color={colors.grey[100]} 
            sx={{ ml: "5px" }}>
            {access}
        </Typography>
        </Box>
    );
    },
},
];

return (
<div className="m-4">
<Header
title="Team"
subtitle="List of Team members for Future Reference"
isVisible={headerIsVisible}

/>
<MUITable mockData={mockDataTeam} mockDatacolumns={mockDataTeamComluns} NOofrows={rowNum} minWe={400}/>
</div>
);
};

export default Team;
