import React from "react";
import MUITable from "../../components/MUITable";


const IncompleteOrders = ({IncompleteHeader, IncompleteData}) => {

return (
<div className="m-4">

    <div className="h1">Incomplete Orders</div>

{(!IncompleteData && (
<div className="card " style={{backgroundColor: " inherit !important"}}>

<div className="page page-center m-auto" style={{ minHeight: "calc(100vh - 25rem)" }}>
<div className="container container-tight py-4">
<div className="empty">
<div className="empty-img">
    <img
    src="https://icons.duckduckgo.com/ip3/ecommerce.com.ico"
    width="128"
    height="128"
    alt="Ecommerce Icon"
    />
</div>
<p className="empty-title">Manage incomplete orders</p>
<p className="empty-subtitle text-secondary">
    Incomplete order is an order created when a customer adds a product to the cart, proceeds to fill out the purchase information but does not complete the checkout process.
</p>
</div>
</div>
</div>
</div>

)) ||
<MUITable mockData={IncompleteData} mockDatacolumns={IncompleteHeader}/>
}

</div>
);

}

export default IncompleteOrders