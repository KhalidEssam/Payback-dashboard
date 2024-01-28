import React from 'react';
import { FaUsers, FaUsersCog, FaClipboardList, FaDatabase, FaCalendarAlt, FaBox, FaRecycle, FaInfoCircle, FaSync } from 'react-icons/fa';
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";

const SystemPage = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

return (
<div className="container-xl">
    <div className=" mb-4 panel-section panel-section-system panel-section-priority-99999" id="panel-section-system-system" data-priority="99999" data-id="system" data-group-id="system" 
    style={{ border: `1px solid ${colors.primary[200]}` , borderRadius: '10px',
    color: colors.grey[100] , backgroundColor: colors.primary[400] , padding: '10px'}}>
    <div className="card-header">
        <div>
        <h4 className="card-title">System</h4>
        <hr />
        </div>
    </div>

    <div className="card-body">
        <div className="row g-3">
        {/* Users */}
        <div id="panel-section-item-system-users" data-priority="-9999" data-id="users" data-group-id="system" className="col-12 col-sm-6 col-md-4 panel-section-item panel-section-item-users panel-section-item-priority--9999">
            <div className="row g-3 align-items-start">
            <div className="col-auto">
                <div className="d-flex align-items-center justify-content-center panel-section-item-icon">
                <span className="icon-tabler-wrapper">
                    <FaUsers size={24} />
                </span>
                </div>
            </div>
            <div className="col">
                <div className="d-block mb-1 panel-section-item-title">
                <a className="text-decoration-none text-primary fw-bold" href="https://www.b1rincitech.com/admin/system/users">
                    Users
                </a>
                </div>
                <div className="text-secondary mt-n1">View and update your system users</div>
            </div>
            </div>
        </div>

        {/* Roles and Permissions */}
        <div id="panel-section-item-system-roles" data-priority="-9980" data-id="roles" data-group-id="system" className="col-12 col-sm-6 col-md-4 panel-section-item panel-section-item-roles panel-section-item-priority--9980">
            <div className="row g-3 align-items-start">
            <div className="col-auto">
                <div className="d-flex align-items-center justify-content-center panel-section-item-icon">
                <span className="icon-tabler-wrapper">
                    <FaUsersCog size={24} />
                </span>
                </div>
            </div>
            <div className="col">
                <div className="d-block mb-1 panel-section-item-title">
                <a className="text-decoration-none text-primary fw-bold" href="https://www.b1rincitech.com/admin/system/roles">
                    Roles And Permissions
                </a>
                </div>
                <div className="text-secondary mt-n1">View and update your roles and permissions</div>
            </div>
            </div>
        </div>

        {/* Activities Logs */}
        <div id="panel-section-item-system-audit-logs" data-priority="10" data-id="audit-logs" data-group-id="system" className="col-12 col-sm-6 col-md-4 panel-section-item panel-section-item-audit-logs panel-section-item-priority-10">
        <div className="row g-3 align-items-start">
            <div className="col-auto">
            <div className="d-flex align-items-center justify-content-center panel-section-item-icon">
                <span className="icon-tabler-wrapper">
                <FaClipboardList size={24} /> {/* Use FaClipboardList as a placeholder for Activities Logs */}
                </span>
            </div>
            </div>
            <div className="col">
            <div className="d-block mb-1 panel-section-item-title">
                <a className="text-decoration-none text-primary fw-bold" href="https://www.b1rincitech.com/admin/audit-logs">
                Activities Logs
                </a>
            </div>
            <div className="text-secondary mt-n1">View and delete your system activity logs</div>
            </div>
        </div>
        </div>

        {/* Add similar code blocks for other items */}
        <div id="panel-section-item-system-users" data-priority="-9999" data-id="users" data-group-id="system" className="col-12 col-sm-6 col-md-4 panel-section-item panel-section-item-users panel-section-item-priority--9999">
            <div className="row g-3 align-items-start">
            <div className="col-auto">
                <div className="d-flex align-items-center justify-content-center panel-section-item-icon">
                <span className="icon-tabler-wrapper">
                    <FaDatabase size={24} />
                </span>
                </div>
            </div>
            <div className="col">
                <div className="d-block mb-1 panel-section-item-title">
                <a className="text-decoration-none text-primary fw-bold" href="https://www.b1rincitech.com/admin/system/users">
                   Backup
                </a>
                </div>
                <div className="text-secondary mt-n1">Backup database and uploads folder.</div>
            </div>
            </div>
        </div>

        {/* Roles and Permissions */}
        <div id="panel-section-item-system-roles" data-priority="-9980" data-id="roles" data-group-id="system" className="col-12 col-sm-6 col-md-4 panel-section-item panel-section-item-roles panel-section-item-priority--9980">
            <div className="row g-3 align-items-start">
            <div className="col-auto">
                <div className="d-flex align-items-center justify-content-center panel-section-item-icon">
                <span className="icon-tabler-wrapper">
                    <FaCalendarAlt size={24} />
                </span>
                </div>
            </div>
            <div className="col">
                <div className="d-block mb-1 panel-section-item-title">
                <a className="text-decoration-none text-primary fw-bold" href="https://www.b1rincitech.com/admin/system/roles">
                    Cronjob

                </a>
                </div>
                <div className="text-secondary mt-n1">Cronjob allow you to automate certain commands or scripts on your site.</div>
            </div>
            </div>
        </div>

        {/* Activities Logs */}
        <div id="panel-section-item-system-audit-logs" data-priority="10" data-id="audit-logs" data-group-id="system" className="col-12 col-sm-6 col-md-4 panel-section-item panel-section-item-audit-logs panel-section-item-priority-10">
        <div className="row g-3 align-items-start">
            <div className="col-auto">
            <div className="d-flex align-items-center justify-content-center panel-section-item-icon">
                <span className="icon-tabler-wrapper">
                <FaBox size={24} /> {/* Use FaClipboardList as a placeholder for Activities Logs */}
                </span>
            </div>
            </div>
            <div className="col">
            <div className="d-block mb-1 panel-section-item-title">
                <a className="text-decoration-none text-primary fw-bold" href="https://www.b1rincitech.com/admin/audit-logs">
                Cache Management
                </a>
            </div>
            <div className="text-secondary mt-n1">Cache Management
            Clear cache to make your site up to date. </div>
            </div>
        </div>
        </div>
        <div id="panel-section-item-system-users" data-priority="-9999" data-id="users" data-group-id="system" className="col-12 col-sm-6 col-md-4 panel-section-item panel-section-item-users panel-section-item-priority--9999">
            <div className="row g-3 align-items-start">
            <div className="col-auto">
                <div className="d-flex align-items-center justify-content-center panel-section-item-icon">
                <span className="icon-tabler-wrapper">
                    <FaRecycle size={24} />
                </span>
                </div>
            </div>
            <div className="col">
                <div className="d-block mb-1 panel-section-item-title">
                <a className="text-decoration-none text-primary fw-bold" href="https://www.b1rincitech.com/admin/system/users">
                    Cleanup System
                </a>
                </div>
                <div className="text-secondary mt-n1">Cleanup your unused data in database</div>
            </div>
            </div>
        </div>

        {/* Roles and Permissions */}
        <div id="panel-section-item-system-roles" data-priority="-9980" data-id="roles" data-group-id="system" className="col-12 col-sm-6 col-md-4 panel-section-item panel-section-item-roles panel-section-item-priority--9980">
            <div className="row g-3 align-items-start">
            <div className="col-auto">
                <div className="d-flex align-items-center justify-content-center panel-section-item-icon">
                <span className="icon-tabler-wrapper">
                    <FaInfoCircle size={24} />
                </span>
                </div>
            </div>
            <div className="col">
                <div className="d-block mb-1 panel-section-item-title">
                <a className="text-decoration-none text-primary fw-bold" href="https://www.b1rincitech.com/admin/system/roles">
                    System Information
                </a>
                </div>
                <div className="text-secondary mt-n1">All information about current system configuration.</div>
            </div>
            </div>
        </div>

        {/* Activities Logs */}
        <div id="panel-section-item-system-audit-logs" data-priority="10" data-id="audit-logs" data-group-id="system" className="col-12 col-sm-6 col-md-4 panel-section-item panel-section-item-audit-logs panel-section-item-priority-10">
        <div className="row g-3 align-items-start">
            <div className="col-auto">
            <div className="d-flex align-items-center justify-content-center panel-section-item-icon">
                <span className="icon-tabler-wrapper">
                <FaSync size={24} /> {/* Use FaClipboardList as a placeholder for Activities Logs */}
                </span>
            </div>
            </div>
            <div className="col">
            <div className="d-block mb-1 panel-section-item-title">
                <a className="text-decoration-none text-primary fw-bold" href="https://www.b1rincitech.com/admin/audit-logs">
                Activities Logs
                </a>
            </div>
            <div className="text-secondary mt-n1">View and delete your system activity logs</div>
            </div>
        </div>
        </div>

        </div>
    </div>
    </div>
</div>
);
};

export default SystemPage;
