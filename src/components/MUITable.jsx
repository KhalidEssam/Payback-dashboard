import { Box ,useTheme } from "@mui/material";
import * as React from 'react';
import {
    // GridRowsProp,
    // GridRowModesModel,
    // GridRowModes,
    DataGrid,
    // GridColDef,
    // GridToolbarContainer,
    // GridActionsCellItem,
    // GridEventListener,
    // GridRowId,
    // GridRowModel,
    // GridRowEditStopReasons,
    GridToolbar,
} from '@mui/x-data-grid';
import { tokens } from "../theme";
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/DeleteOutlined';
// import SaveIcon from '@mui/icons-material/Save';
// import CancelIcon from '@mui/icons-material/Close';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';




const MUITable = ({mockData,mockDatacolumns,minWe,NOofrows }) => {
const theme = useTheme();
const colors = tokens(theme.palette.mode);
const [nbRows, setNbRows] = React.useState(NOofrows);
const removeRow = () => setNbRows((x) => Math.max(0, x - 1));
const addRow = () => setNbRows((x) => Math.min(100, x + 1));


return (
<Box >
    
    <Box
    m="40px 0 0 0"
    minWidth={`${minWe}px`}
    // minHeight={`${minHe}px`}
    // height="75vh"
    sx={{
        "& .MuiDataGrid-root": {
        border: "none",
        },
        "& .MuiDataGrid-cell": {
        borderBottom: "none",
        },
        "& .name-column--cell": {
        color: colors.greenAccent[300],
        },
        "& .MuiDataGrid-columnHeaders": {
        backgroundColor: colors.blueAccent[700],
        borderBottom: "none",
        },
        "& .MuiDataGrid-virtualScroller": {
        backgroundColor: colors.primary[400],
        overflowX: "scroll",
        },
        "& .MuiDataGrid-footerContainer": {
        borderTop: "none",
        backgroundColor: colors.blueAccent[700],
        },
        "& .MuiCheckbox-root": {
        color: `${colors.greenAccent[200]} !important`,
        },
        "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
        color: `${colors.grey[100]} !important`,
        },
        width: '100%'
    }}
    >
      <div className={NOofrows ? 'd-flex' : 'd-none'}>
          <Stack direction="row" spacing={1} sx={{ " & .MuiButtonBase-root": {
              color: colors.grey[100],

          },
          mb: 1, backgroundColor: colors.primary[400] }}>
          <Button size="small" onClick={removeRow}>
            Remove a row
          </Button>
          <Button size="small" onClick={addRow}>
            Add a row
          </Button>
        </Stack>
      </div>
    <DataGrid
            
        columns={[ ...mockDatacolumns.slice(0,NOofrows ? NOofrows : mockDatacolumns.length ) ]}
        components={{ Toolbar: GridToolbar }}
        {...mockData}
        rows={mockData && mockData ? mockData.slice(0, nbRows) : []}
        autoHeight 
        autoPageSize = {false}
    />
    </Box>
</Box>
);
};

export default MUITable;
