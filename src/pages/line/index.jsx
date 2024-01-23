import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/linechart";
import React from 'react';

const Line = () => {
  return (
    <Box m="20px">
      <Header title="Line Chart" subtitle="Simple Line Chart" />
      <Box>
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;
