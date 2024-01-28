import React from "react";
import Invoice from "../Invoice/index";
//eslint-disable-next-line
import CustomDataGridHeader from "../../components/CustomGridHeader";


const Orders = () => {
    return (
        <div className="m-4">

            <div className="h1">Orders</div>
            {/* < CustomDataGridHeader/> */}
            <Invoice headerIsVisible={false} />            
        </div>
    )
}

export default Orders

