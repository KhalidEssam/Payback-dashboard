import React from 'react';
import { useTheme } from '@mui/material';
import { tokens } from '../theme';
const TeamMembersTable = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);


  
  // Dummy team member data
  const teamMembers = [
    {
      id: 1,
      fullName: 'John Doe',
      email: 'john@example.com',
      role: 'Admin',
      verified: 'Yes',
      duration: '2 years',
      revenue: '$5000',
    },
    {
      id: 2,
      fullName: 'Jane Smith',
      email: 'jane@example.com',
      role: 'User',
      verified: 'No',
      duration: '1 year',
      revenue: '$3000',
    },
    // Add more team member data as needed
  ];
  const tableStyle = {
    backgroundColor: theme.palette.mode === 'dark' ?  colors.blueAccent[200]    : 'initial',
    '--bs-table-bg': theme.palette.mode === 'dark' ? 'transparent' : 'initial',
  };
  return (
    <div className="container " >
    <h1 className="h2">Team</h1>
    <div className='table-responsive' >
    <table className='table table-striped table-bordered table-hover' style={tableStyle}>
        <thead>
        <tr>
            <th scope='col'>ID</th>
            <th scope='col'>Full Name</th>
            <th scope='col'>Email</th>
            <th scope='col'>Role</th>
            <th scope='col'>Verified</th>
            <th scope='col'>Duration</th>
            <th scope='col'>Revenue</th>
        </tr>
        </thead>
        <tbody>
        {teamMembers.map((member) => (
            <tr key={member.id}>
                <th scope='row'>{member.id}</th>
                <td>{member.fullName}</td>
                <td>{member.email}</td>
                <td>{member.role}</td>
                <td>{member.verified}</td>
                <td>{member.duration}</td>
                <td>{member.revenue}</td>
            </tr>
        ))}
        </tbody>
    </table>
    </div>


    
    </div>
  );
};

export default TeamMembersTable;
