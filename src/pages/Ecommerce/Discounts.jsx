import React from "react";
import MUITable from "../../components/MUITable";
import { TbShoppingBagDiscount } from "react-icons/tb";

const Discounts = ({IncompleteHeader, IncompleteData}) => {

return (
<div className="container-xl">


    <div className="h1">Discounts</div>

    {(!IncompleteData && (
        <div className="page d-flex justify-content-center" style={{ minHeight: "calc(100vh - 25rem)" }}>
    <div className="container container-tight py-4">
        <div className="empty text-center">
        <div className="empty-img">
            <span className="icon-tabler-wrapper">
            <TbShoppingBagDiscount fontSize={"15rem"} />
            </span>
        </div>
        <p className="empty-title">Manage discount/coupon code</p>
        <p className="empty-subtitle text-secondary">
            Create coupon code or promotion for your products.
        </p>
        <div className="empty-action">
            <a className="btn btn-primary" type="button" href="https://www.b1rincitech.com/admin/discounts/create">
            Create discount
            </a>
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

export default Discounts