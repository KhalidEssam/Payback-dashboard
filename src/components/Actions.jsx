import React, { useRef, useState, useEffect } from 'react';

const Actions = () => {
const [isOpen, setIsOpen] = useState(false);
const dropdownRef = useRef(null);

const toggleDropdown = () => {
setIsOpen(!isOpen);
};

const closeDropdown = (event) => {
const isInsideDropdown = dropdownRef.current && dropdownRef.current.contains(event.target);
if (!isInsideDropdown) {
    setIsOpen(false);
}
};

useEffect(() => {
const handleClick = (event) => {
    closeDropdown(event);
};

document.addEventListener('click', handleClick);

return () => {
    document.removeEventListener('click', handleClick);
};
}, []);

return (
<div className="btn-group" ref={dropdownRef}>
    <button
    type="button"
    className="btn btn-danger dropdown-toggle"
    onClick={toggleDropdown}
    aria-expanded={isOpen ? 'true' : 'false'}
    >
    Action
    </button>
    <ul className={`dropdown-menu ${isOpen ? 'show' : ''}`}>
    <li>
        <a className="dropdown-item" href="#l">Action</a>
    </li>
    <li>
        <a className="dropdown-item" href="#ll">Another action</a>
    </li>
    <li>
        <a className="dropdown-item" href="#lll">Something else here</a>
    </li>
    <li>
        <a className="dropdown-item" href="#llll">Separated link</a>
    </li>
    </ul>
</div>
);
};

export default Actions;
