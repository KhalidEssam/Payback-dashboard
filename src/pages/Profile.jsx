import React from 'react';

const EditProfileForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className='container'>
      <h2>Edit profiles this is ahmed samir</h2>
      <form id='editProfile' onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label htmlFor='fullName' className='form-label'>Full Name</label>
          <input type='text' className='form-control' id='fullName' placeholder='Enter your full name' />
        </div>
        <div className='mb-3'>
          <label htmlFor='email' className='form-label'>Email address</label>
          <input type='email' className='form-control' autoComplete="Email" id='email' placeholder='Enter your email address' />
        </div>
        <div className='mb-3'>
          <label htmlFor='password' className='form-label'>Password</label>
          <input type='password' className='form-control' autoComplete="new-password" id='password' placeholder='Enter your password' />
        </div>
        <div className='mb-3'>
          <label htmlFor='confirmPassword' className='form-label'>Confirm Password</label>
          <input type='password' className='form-control' autoComplete="new-password" id='confirmPassword' placeholder='Confirm your password' />
        </div>
        <div className='mb-3'>
          <label htmlFor='bio' className='form-label'>Bio</label>
          <textarea className='form-control' id='bio' rows='3' placeholder='Tell us something about yourself'></textarea>
        </div>
        <button type='submit' className='btn btn-primary'>Save Changes</button>
      </form>
    </div>
  );
};

export default EditProfileForm;
