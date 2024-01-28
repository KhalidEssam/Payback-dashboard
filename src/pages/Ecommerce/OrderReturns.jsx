import React from "react";
// import Invoice from "../Invoice/index";
//eslint-disable-next-line
import CustomDataGridHeader from "../../components/CustomGridHeader";
import MUITable from "../../components/MUITable";
import { mockDataInvoicescolumns } from "../../data/mockData";


const OrderReturns = ({rowNum}) => {
    return (
        <div className="m-4">

            <div className="h1">Order Returns</div>
            {/* < CustomDataGridHeader/> */}
            {/* <Invoice headerIsVisible={false} />     */}
            <MUITable  mockDatacolumns={mockDataInvoicescolumns} NOofrows={rowNum} minWe={400}/>        
        </div>
    )
}

export default OrderReturns

