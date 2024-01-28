import React, { useState } from 'react';

const CategoryForm = ({ onAddCategory }) => {
const [formData, setFormData] = useState({
name: '',
permalink: '',
description: '',
status: 'published',
image: null, // Use null for the file
Icon: '',
isFeatured: false,
seoTitle: '',
seoDescription: '',
});

const handleChange = (field, value) => {
setFormData((prevData) => ({ ...prevData, [field]: value }));
};

const handleImageChange = (e) => {
const file = e.target.files[0];
handleChange('image', file);
};
const handleIconChange = (e) => {
const value = e.target.value;
handleChange('fontIcon', value);
}

const handleAddCategory = () => {
// Validate form data if needed
onAddCategory(formData);

// Clear form fields after adding a category
setFormData({
    name: '',
    permalink: '',
    description: '',
    status: 'published',
    image: null,
    fontIcon: '',
    isFeatured: false,
    seoTitle: '',
    seoDescription: '',
});
};

return (
<div className="m-4" style={{  }}>
    <h2>Add New Category</h2>
    <form>
    <div className="container mt-5">
        <div className="row">
        <div className="col-md-12">
            <div className="mb-3">
            <label for="name" className="form-label">
                Name:
            </label>
            <input
                type="text"
                className="form-control"
                id="name"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
            />
            </div>
            <div className="mb-3">
            <label for="permalink" className="form-label">
                Permalink:
            </label>
            <input
                type="text"
                className="form-control"
                id="permalink"
                value={formData.permalink}
                onChange={(e) => handleChange('permalink', e.target.value)}
            />
            </div>
            <div className="mb-3">
            <label for="description" className="form-label">
                Description:
            </label>
            <textarea
                className="form-control"
                id="description"
                value={formData.description}
                onChange={(e) => handleChange('description', e.target.value)}
            ></textarea>
            </div>
            <div className="mb-3">
            <label for="status" className="form-label">
                Status:
            </label>
            <select
                className="form-select"
                id="status"
                value={formData.status}
                onChange={(e) => handleChange('status', e.target.value)}
            >
                <option value="published">Published</option>
                <option value="draft">Draft</option>
            </select>
            </div>
        </div>
        <div className="col-md-12">
            <div className="mb-6">
            <label for="image" className="form-label">
                Image:
            </label>
            <input
                type="file"
                className="form-control"
                id="image"
                onChange={handleImageChange}
                accept="image/*"
            />
            </div>
            <div className="mb-6">
            <label for="fontIcon" className="form-label">
                Icon:
            </label>
            <input
                type="file"
                className="form-control"
                id="image"
                onChange={handleIconChange}
                accept="image/*"
            />
            </div>
            <div className="mb-6 form-check">
            <input
                type="checkbox"
                className="form-check-input"
                id="isFeatured"
                checked={formData.isFeatured}
                onChange={(e) => handleChange('isFeatured', e.target.checked)}
            />
            
            <label className="form-check-label mb-5" for="isFeatured">
                Is Featured
            </label>
            </div>
        </div>
        </div>
        <div className="row">
        <div className="col-md-12">
            <div className="mb-3">
            <label for="seoTitle" className="form-label">
                SEO Title:
            </label>
            <input
                type="text"
                className="form-control"
                id="seoTitle"
                value={formData.seoTitle}
                onChange={(e) => handleChange('seoTitle', e.target.value)}
            />
            </div>
            <div className="mb-3">
            <label for="seoDescription" className="form-label">
                SEO Description:
            </label>
            <textarea
                className="form-control"
                id="seoDescription"
                value={formData.seoDescription}
                onChange={(e) => handleChange('seoDescription', e.target.value)}
            ></textarea>
            </div>
        </div>
        </div>
        <div className="row">
        <div className="col-md-12">
            <div className="button-group">
            <button type="button" className="btn btn-primary" onClick={handleAddCategory}>
                Save
            </button>
            <button type="button" className="btn btn-secondary m-2">
                Save & Exit
            </button>
            </div>
        </div>
        </div>
    </div>
    </form>
</div>
);
};

export default CategoryForm;
