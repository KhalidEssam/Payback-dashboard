import React, { useRef, useState, useEffect } from 'react';
import { Dropdown } from 'react-bootstrap';

const BulkActionDropdown = ({ onBulkAction }) => {
const bulkChangeOptions = ['Option 1', 'Option 2', 'Option 3'];

const dropdownRef = useRef(null);
const [isHovered, setIsHovered] = useState(false);

useEffect(() => {
const handleMouseEnter = () => {
    setIsHovered(true);
};

const handleMouseLeave = () => {
    setIsHovered(false);
};

const handleClick = () => {
    console.log('rendered');
    // Trigger the click event when the dropdown is hovered
    // if (isHovered) {
    // dropdownRef.current.click();
    // }
};

const dropdownElement = dropdownRef.current;

if (dropdownElement) {
    dropdownElement.addEventListener('mouseenter', handleMouseEnter);
    dropdownElement.addEventListener('mouseleave', handleMouseLeave);
    dropdownElement.addEventListener('click', handleClick);
}

return () => {
    if (dropdownElement) {
    dropdownElement.removeEventListener('mouseenter', handleMouseEnter);
    dropdownElement.removeEventListener('mouseleave', handleMouseLeave);
    dropdownElement.removeEventListener('click', handleClick);
    }
};
}, [isHovered]);

return (
    <Dropdown>

    <Dropdown.Toggle variant="primary" id="dropdown-basic">
    Bulk Actions
    </Dropdown.Toggle>

    <Dropdown.Menu>
    <Dropdown.Item onClick={() => onBulkAction('delete')}>Delete</Dropdown.Item>

    <Dropdown ref={dropdownRef}>
        <Dropdown.Toggle className='dropdown-item' as="li" variant="primary" id="nested-dropdown">
        Bulk Change
        </Dropdown.Toggle>

        <Dropdown.Menu>
        {bulkChangeOptions.map((option) => (
            <Dropdown.Item key={option} onClick={() => onBulkAction(option)}>
            {option}
            </Dropdown.Item>
        ))}
        </Dropdown.Menu>
    </Dropdown>
    </Dropdown.Menu>
    </Dropdown>
  );
};

export default BulkActionDropdown;
