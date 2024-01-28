import React from 'react';
import { FaUsers, FaUsersCog, FaClipboardList, FaDatabase, FaCalendarAlt, FaBox, FaRecycle, FaInfoCircle, FaSync } from 'react-icons/fa';
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import PanelSection from '../../components/Card';
const SettingsPage = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const items = [
  {
    id: 'users',
    priority: -9999,
    icon: <FaUsers size={24} />,
    title: 'Users',
    link: 'https://www.b1rincitech.com/admin/system/users',
    description: 'View and update your system users',
  },
  {
    id: 'roles',
    priority: -9980,
    icon: <FaUsersCog size={24} />,
    title: 'Roles And Permissions',
    link: 'https://www.b1rincitech.com/admin/system/roles',
    description: 'View and update your roles and permissions',
  },
  {
    id: 'audit-logs',
    priority: 10,
    icon: <FaClipboardList size={24} />,
    title: 'Activities Logs',
    link: 'https://www.b1rincitech.com/admin/audit-logs',
    description: 'View and delete your system activity logs',
  },
  {
    id: 'backup',
    priority: -9970,
    icon: <FaDatabase size={24} />,
    title: 'Backup',
    link: 'https://www.b1rincitech.com/admin/system/backup',
    description: 'Backup database and uploads folder.',
  },
  {
    id: 'cronjob',
    priority: -9960,
    icon: <FaCalendarAlt size={24} />,
    title: 'Cronjob',
    link: 'https://www.b1rincitech.com/admin/system/cronjob',
    description: 'Cronjob allows you to automate certain commands or scripts on your site.',
  },
  {
    id: 'cache-management',
    priority: 10,
    icon: <FaBox size={24} />,
    title: 'Cache Management',
    link: 'https://www.b1rincitech.com/admin/system/cache-management',
    description: 'Clear cache to make your site up to date.',
  },
  {
    id: 'cleanup-system',
    priority: -9950,
    icon: <FaRecycle size={24} />,
    title: 'Cleanup System',
    link: 'https://www.b1rincitech.com/admin/system/cleanup',
    description: 'Cleanup your unused data in the database.',
  },
  {
    id: 'system-information',
    priority: -9940,
    icon: <FaInfoCircle size={24} />,
    title: 'System Information',
    link: 'https://www.b1rincitech.com/admin/system/system-information',
    description: 'All information about the current system configuration.',
  },
  {
    id: 'system-updater',
    priority: 0, // Replace with the actual priority
    icon: <FaSync size={24} />,
    title: 'System Updater',
    link: 'https://www.b1rincitech.com/admin/system/system-updater', // Replace with the actual link
    description: 'Update your system.', // Replace with the actual description
  },
];

return (
<div className="container-xl">
    <PanelSection colors={colors} items={items} />
    <PanelSection colors={colors} items={items} />
    <PanelSection colors={colors} items={items} />
    <PanelSection colors={colors} items={items} />
    
</div>
);
};

export default SettingsPage;
