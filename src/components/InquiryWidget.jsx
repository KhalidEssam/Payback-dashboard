import { tokens } from "../theme";
import React from 'react';
import { Box, useTheme } from "@mui/material";
const Widget = ({ title, tableId }) => {
const theme = useTheme();
const colors = tokens(theme.palette.mode);

return (
<div className="d-flex widget-item col-md-6">
    <Box
    sx={{
        backgroundColor: colors.primary[400], // Use custom primary color from tokens
        justifyContent: "center",
        overflowY: "auto",
        borderRadius: theme.shape.borderRadius, // Adding border-radius for card styling
        boxShadow: theme.shadows[4], // Adding box shadow for card styling
    }}
    >
    <div className="card flex-fill">
        <div className="card-header">
        <h4 className="card-title">{title}</h4>
        </div>
        <div className="table-responsive table-widget">
        <div className="table-wrapper">
            <div className="card">
            <div className="card-header">
                <div className="btn-list">
                <div className="table-search-input">
                    <label>
                    <input
                        type="search"
                        className="form-control input-sm"
                        placeholder="Search..."
                    />
                    </label>
                </div>
                </div>
            </div>
            <div className="card-table">
                <div className="table-responsive">
                <table
                    className="table card-table table-vcenter table-striped table-hover"
                    id={tableId}
                >
                    <thead>
                    <tr>
                        <th title="ID" width="20">
                        ID
                        </th>
                        <th title="Customer">Customer</th>
                        <th title="Amount">Amount</th>
                        <th title="Payment method">Payment method</th>
                        <th title="Payment status">Payment status</th>
                        <th title="Status" width="100">
                        Status
                        </th>
                        <th title="Created At" width="100">
                        Created At
                        </th>
                        <th title="Store">Store</th>
                    </tr>
                    </thead>
                </table>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    </Box>
</div>
);
};

export default Widget;
