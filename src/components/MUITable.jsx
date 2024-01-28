import { Box ,useTheme } from "@mui/material";
import * as React from 'react';
import {
    DataGrid,
    GridToolbar,
} from '@mui/x-data-grid';
import { tokens } from "../theme";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import BulkActionDropdown from "./BulkActions";


const MUITable = ({mockData,mockDatacolumns,minWe,NOofrows }) => {
const theme = useTheme();
const colors = tokens(theme.palette.mode);
const [nbRows, setNbRows] = React.useState(NOofrows);
const removeRow = () => setNbRows((x) => Math.max(0, x - 1));
const addRow = () => setNbRows((x) => Math.min(100, x + 1));
const [selectedRows, setSelectedRows] = React.useState([]);
const handleSelectionModelChange = (selectionModel) => {
  // Log the selected row IDs to the console
  console.log('Selected Row IDs:', selectionModel);

  // Update the state to keep track of selected rows
  setSelectedRows(selectionModel);
};

const operationsColumn = {
  field: 'operations',
  headerName: 'Operations',
  width: 150,
  sortable: false,
  renderCell: (params) => (
    <React.Fragment>
      <a
        data-bs-toggle="tooltip"
        data-bs-original-title="Edit"
        href={`https://www.b1rincitech.com/admin/ecommerce/products/edit/${params.id}`}
        className="btn btn-sm btn-icon btn-primary"
      >
        <span className="sr-only"><FaRegEdit /></span>
      </a>

      <a
        data-bs-toggle="tooltip"
        data-bs-original-title="Delete"
        href={`https://www.b1rincitech.com/admin/ecommerce/products/${params.id}`}
        className="btn btn-sm btn-icon btn-danger m-2"
        data-dt-single-action=""
        data-method="DELETE"
        data-confirmation-modal="true"
        data-confirmation-modal-title="Confirm delete"
        data-confirmation-modal-message="Do you really want to delete this record?"
        data-confirmation-modal-button="Delete"
        data-confirmation-modal-cancel-button="Cancel"
      >
        <span className="sr-only"><MdDelete /></span>
      </a>
    </React.Fragment>
  ),
};
const updatedColumns = [...mockDatacolumns.slice(0, nbRows ? nbRows : mockDatacolumns.length), operationsColumn];
const handleBulkAction = (action) => {
    // Your logic for handling the bulk action
    console.log('Bulk Action:', action , selectedRows);
  };
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
      <BulkActionDropdown onBulkAction={handleBulkAction}/>
    <DataGrid
            
        columns={updatedColumns }
        components={{ Toolbar: GridToolbar }}
        {...mockData}
        rows={mockData && mockData ? mockData.slice(0, nbRows) : []}
        autoHeight 
        autoPageSize = {false}
        checkboxSelection
        disableRowSelectionOnClick
        onSelectionModelChange={handleSelectionModelChange}
        selectionModel={selectedRows}
        />




    </Box>
</Box>
);
};

export default MUITable;
