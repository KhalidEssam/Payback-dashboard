import React from "react";
//eslint-disable-next-line
import CustomDataGridHeader from "../../components/CustomGridHeader";
import MUITable from "../../components/MUITable";
import { mockDataInvoices , mockDataInvoicescolumns } from "../../data/mockData";


const ProductCollection = ({rowNum}) => {
    return (
        <div className="m-4">

            <div className="h1">Product Collections</div>
            {/* < CustomDataGridHeader/> */}
            <MUITable mockData={mockDataInvoices}  mockDatacolumns={mockDataInvoicescolumns} NOofrows={rowNum} minWe={400}/>        
        </div>
    )
}

export default ProductCollection

