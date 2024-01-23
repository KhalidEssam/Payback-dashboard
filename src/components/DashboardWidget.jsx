import React from 'react';
import { Link } from 'react-router-dom';

const DashboardWidget = ({ title, to, backgroundColor, icon, count }) => {
return (
<div className="col dashboard-widget-item col-12 col-md-6 col-lg-3">
    <Link className="text-white d-block rounded position-relative overflow-hidden text-decoration-none" to={to} style={{ backgroundColor }}>
    <div className="d-flex justify-content-between align-items-center">
        <div className="details px-4 py-3 d-flex flex-column justify-content-between">
        <div className="desc fw-medium">{title}</div>
        <div className="number fw-bolder">
            <span data-counter="counterup" data-value={count}>{count}</span>
        </div>
        </div>
        <div className="visual pb-5 ps-1 position-absolute end-0">
        {icon && (
            <span className="icon-tabler-wrapper me-n2" style={{ opacity: 0.1 }}>
            {icon}
            </span>
        )}
        </div>
    </div>
    </Link>
</div>
);
};

export default DashboardWidget;
