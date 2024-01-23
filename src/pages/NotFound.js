import React from 'react';
import { Link } from 'react-router-dom'; // If using React Router
import { Typography } from '@mui/material';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import Contacts from './contacts/index';

const NotFound = ({ selected = "Dashboard", setSelected }) => {
    const rand = Math.floor(Math.random() * 3)
    return (
        <>
            {rand <2 ? <Contacts headerIsVisible={false} rowNum={5} /> : 
            <div style={styles.container}>
                <div style={styles.content}>
                    <SentimentVeryDissatisfiedIcon style={styles.icon} />
                    <Typography variant="h4" style={styles.heading}>
                        404 - Page Not Found
                    </Typography>
                    <Typography variant="body1" style={styles.text}>
                        Oops! The page you are looking for might be in another galaxy.
                    </Typography>
                    <Link to="/" style={styles.link} onClick={() => setSelected("Dashboard")}>
                        Go back to home
                    </Link>{' '}
                </div>
            </div>}
            


            {/* <Contacts headerIsVisible={false} rowNum={5} /> */}


        </>
    );
};

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        // backgroundColor: '#f0f0f0', 
    },
    content: {
        textAlign: 'center',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        // backgroundColor: '#fff',
    },
    icon: {
        fontSize: '4em',
        color: '#ff5252', // Material-UI red color
        marginBottom: '20px',
    },
    heading: {
        margin: '10px 0',
    },
    text: {
        marginBottom: '20px',
    },
    link: {
        color: '#007bff',
        textDecoration: 'none',
        fontWeight: 'bold',
    },
};

export default NotFound;
