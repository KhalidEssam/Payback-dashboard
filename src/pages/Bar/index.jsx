import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";
import React from 'react';

const Bar = () => {
  return (
    <Box m="20px" className="App">
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box>
        <BarChart />
      </Box>
    </Box>
  );
};




export default Bar;



