import React from "react";
//eslint-disable-next-line
// import CustomDataGridHeader from "../../components/CustomGridHeader";
import MUITable from "../../../components/MUITable";
import { mockDataPages , mockDataPagesColumns } from '../../../data/mockData';


const Pages = ({rowNum}) => {
    return (
        <div className="m-4">

            <div className="h1">Site Pages</div>
            {/* < CustomDataGridHeader/> */}
            <MUITable mockData={mockDataPages}  mockDatacolumns={mockDataPagesColumns} NOofrows={rowNum} minWe={400}/>        
        </div>
    )
}

export default Pages

