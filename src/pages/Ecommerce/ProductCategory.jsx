import React, { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { CiSquarePlus, CiSquareMinus } from 'react-icons/ci';
import { MdDragHandle } from "react-icons/md";

import CategoryForm from './CategoryForm';
const CategoryNode = ({ category, childCategories, index, moveNode }) => {
const [expanded, setExpanded] = useState(false);

const handleToggle = () => {
setExpanded(!expanded);
};

const [, drag] = useDrag({
type: 'CATEGORY_NODE',
item: { index },
});

const [, drop] = useDrop({
accept: 'CATEGORY_NODE',
hover: (draggedItem) => {
    if (draggedItem.index !== index) {
    moveNode(draggedItem.index, index);
    // setExpanded(false);
    draggedItem.index = index;
    

    }
},

});

return (
<div
    className="category-node"
    ref={(node) => drag(drop(node))}
    style={{
    opacity: 1,
    border: '1px solid #ddd',
    borderRadius: '5px',
    marginBottom: '10px',
    padding: '10px',
    }}
>
    <div
    className={`category-header h5 ${expanded ? 'expanded' : ''}`}
    onClick={handleToggle}
    style={{
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
    }}
    >
    <MdDragHandle />
    {"  "}
    |{"  "}

    {category}
    {childCategories.length > 0 && (
        <div style={{ marginLeft: 'auto' }}>
        {expanded ? <CiSquareMinus /> : <CiSquarePlus />}
        <span style={{ marginLeft: '5px' }} />
        </div>
    )}
    </div>
    {expanded && (
    <ul
        className="subcategory-list"
        style={{
        listStyleType: 'none',
        padding: '0',
        marginLeft: '20px',
        }}
    >
        {childCategories.map((childCategory, childIndex) => (
        <li key={childIndex}>{childCategory}</li>
        ))}
    </ul>
    )}
</div>
);
};



const ProductCategories = () => {
const [categories, setCategories] = useState([
{ name: 'Fruits & Vegetables', childCategories: ['Apple', 'Banana', 'Carrot'] },
{ name: 'Breads Sweets', childCategories: ['Baguette', 'Croissant', 'Cake'] },
{ name: 'Frozen Seafoods', childCategories: ['Shrimp', 'Salmon', 'Cod'] },
{ name: 'Raw Meats', childCategories: ['Chicken', 'Beef', 'Pork'] },
{ name: 'Wines & Alcohol Drinks', childCategories: ['Red Wine', 'White Wine', 'Beer'] },
{ name: 'Tea & Coffee', childCategories: ['Green Tea', 'Espresso', 'Cappuccino'] },
{ name: 'Milks and Dairies', childCategories: ['Milk', 'Cheese', 'Yogurt'] },
{ name: 'Pet Foods', childCategories: ['Dog Food', 'Cat Food', 'Bird Seed'] },
{ name: 'Food Cupboard', childCategories: ['Pasta', 'Rice', 'Canned Goods'] },
]);


const moveNode = (fromIndex, toIndex) => {
const updatedCategories = [...categories];
const [movedNode] = updatedCategories.splice(fromIndex, 1);
updatedCategories.splice(toIndex, 0, movedNode);
setCategories(updatedCategories);
};

const handleAddCategory = () => {
const newCategory = { name: 'New Category', childCategories: [] };
setCategories([...categories, newCategory]);
};

return (
<DndProvider backend={HTML5Backend}>
    <div className="row m-4 col-12">
    <div className="col-md-4">
        <div
        // className="card"
        style={{
            borderRadius: '10px',
            border: '1px solid #ddd',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            padding: '20px',
        }}
        >
        <h2>Product Categories</h2>
        <div className='flex-row-reverse justify-content-end'>
            <div className='btn btn-primary p-2' onClick={handleAddCategory} style={{ marginBottom: '10px' }}>
                <CiSquarePlus style={{ fontSize: '20px' }} />
                Add Category
            </div>
        </div>
        <hr />
        
        <ol style={{ padding: '0', listStyleType: 'none' }}>
            {categories.map((category, index) => (
            <CategoryNode
                key={index}
                index={index}
                category={category.name}
                childCategories={category.childCategories}
                moveNode={moveNode}
            />
            ))}
        </ol>
        </div>
    </div>
    {/* Add the main content for the right column here */}
    <div className="col-md-8">
        <CategoryForm onAddCategory={handleAddCategory} />
    </div>
    </div>
</DndProvider>
);
};

export default ProductCategories;
