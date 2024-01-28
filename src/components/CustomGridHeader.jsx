import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';

const CustomDataGridHeader = () => {
// You can add your logic for handling actions or state here

return (


    
<div className="card-header">
    <div className="btn-list">
    <Menu>
        <Button variant="contained" aria-controls="bulk-actions-menu" aria-haspopup="true" onClick={(e) => e.preventDefault()}>
        Bulk Actions
        </Button>
        <Menu id="bulk-actions-menu">
        <MenuItem>Bulk changes</MenuItem>
        <MenuItem>
            <Button variant="text" aria-controls="bulk-changes-menu" aria-haspopup="true" onClick={(e) => e.preventDefault()}>
            <span>Status</span>
            </Button>
            <Menu id="bulk-changes-menu">
            <MenuItem>Status Option 1</MenuItem>
            <MenuItem>Status Option 2</MenuItem>
            </Menu>
        </MenuItem>
        <MenuItem>
            <Button variant="text" aria-controls="created-at-menu" aria-haspopup="true" onClick={(e) => e.preventDefault()}>
            <span>Created At</span>
            </Button>
            <Menu id="created-at-menu">
            <MenuItem>Created At Option 1</MenuItem>
            <MenuItem>Created At Option 2</MenuItem>
            </Menu>
        </MenuItem>
        </Menu>
    </Menu>

    <Button variant="contained" className="btn-show-table-options">
        Filters
    </Button>

    <div className="table-search-input">
        <TextField type="search" label="Search..." variant="standard" />
    </div>
    </div>
</div>
);
};

export default CustomDataGridHeader;
