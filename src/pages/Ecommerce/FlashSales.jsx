import React from "react";
import Invoice from "../Invoice/index";


const FlashSales = () => {
    return (
        <div className="m-4">

            <div className="h1">Flash Sales</div>
            <Invoice headerIsVisible={false} />            
        </div>
    )
}

export default FlashSales

