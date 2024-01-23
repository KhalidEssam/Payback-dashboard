import React from "react";
import { mockDataInvoices , mockDataInvoicescolumns } from "../../data/mockData";
import MUITable from '../../components/MUITable';
import Header from "../../components/Header";


const Invoice = ({headerIsVisible, rowNum}) => {

return (
<div  className="m-4">
<Header
title="Invocie"
subtitle="List of Invocie for Future Reference"
isVisible={headerIsVisible}
/>
<MUITable mockData={mockDataInvoices} mockDatacolumns={mockDataInvoicescolumns} NOofrows={rowNum} minWe={400}/>

</div>
);
};

export default Invoice;





