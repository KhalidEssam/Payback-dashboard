import React from 'react';
import { FaUsers, FaUsersCog, FaClipboardList, FaDatabase, FaCalendarAlt, FaBox, FaRecycle, FaInfoCircle, FaSync } from 'react-icons/fa';

const PanelSection = ({ colors,items }) => {
return (
<div className="container-xl">
    <div className="mb-4 panel-section panel-section-system panel-section-priority-99999" id="panel-section-system-system" data-priority="99999" data-id="system" data-group-id="system"
    style={{ border: `1px solid ${colors.primary[200]}`, borderRadius: '10px', color: colors.grey[100], backgroundColor: colors.primary[400], padding: '10px' }}>
    <div className="card-header">
        <div>
        <h4 className="card-title">System</h4>
        <hr />
        </div>
    </div>

    <div className="card-body">
        <div className="row g-3">
        {items.map((item, index) => (
            <div key={index} className={`col-12 col-sm-6 col-md-4 panel-section-item panel-section-item-${item.id} panel-section-item-priority-${item.priority}`}>
            <div className="row g-3 align-items-start">
                <div className="col-auto">
                <div className="d-flex align-items-center justify-content-center panel-section-item-icon">
                    <span className="icon-tabler-wrapper">
                    {item.icon}
                    </span>
                </div>
                </div>
                <div className="col">
                <div className="d-block mb-1 panel-section-item-title">
                    <a className="text-decoration-none text-primary fw-bold" href={item.link}>
                    {item.title}
                    </a>
                </div>
                <div className="text-secondary mt-n1">{item.description}</div>
                </div>
            </div>
            </div>
        ))}
        </div>
    </div>
    </div>
</div>
);
};

export default PanelSection;
