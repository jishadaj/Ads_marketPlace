import React from 'react';
import Sidebar from '../components/SideBar';
import Button from '../components/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { updateUserProfile } from '../Api/profile';
import { useNavigate } from 'react-router-dom';


const EditProfile = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string(),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    username: Yup.string().required('Username is required'),
    photo: Yup.string().url('Invalid URL format').required('Profile Photo URL is required'),
    location: Yup.string().required('Location is required'),
    contact: Yup.string()
      .matches(/^\d+$/, 'Contact number must be digits only')
      .min(10, 'Contact number must be at least 10 digits')
      .required('Contact number is required'),
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      username: '',
      photo: '',
      location: '',
      phone: '',
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting, setStatus }) => {
      try {
        setStatus({ success: false, error: '' });
        await updateUserProfile(values);
        setStatus({ success: true, error: '' });
        alert('Profile updated successfully!');
        navigate('/manage/account')
      } catch (error) {
        setStatus({ success: false, error: 'Failed to update profile. Please try again.' });
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="p-20">
      <h1 className="text-gray-500 text-lg mb-4 font-light">
        Home <span className="mx-2"> &gt; </span>  Profile
      </h1>
      <div className="flex gap-6">
        {/* Sidebar */}
        <Sidebar />

        
        <div className="flex-1 px-56 py-10 border shadow rounded-2xl">
          <h2 className="text-2xl font-semibold mb-6">Edit Profile</h2>
          {formik.status?.error && (
            <div className="text-red-600 mb-4">{formik.status.error}</div>
          )}
          <form onSubmit={formik.handleSubmit} className="space-y-6">
            
            <div>
              <label className="block text-sm font-medium text-gray-700">First Name<span className='text-red-500'>*</span></label>
              <input
                type="text"
                name="firstName"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`mt-1 block w-full px-3 py-2 border ${formik.touched.firstName && formik.errors.firstName
                  ? 'border-red-500'
                  : 'border-gray-300'
                  } rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black`}
                placeholder="Type here"
              />
              {formik.touched.firstName && formik.errors.firstName && (
                <div className="text-red-500 text-sm mt-1">{formik.errors.firstName}</div>
              )}
            </div>

            
            <div>
              <label className="block text-sm font-medium text-gray-700">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
                placeholder="Type here"
              />
            </div>

            
            <div>
              <label className="block text-sm font-medium text-gray-700">Email<span className='text-red-500'>*</span></label>
              <input
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`mt-1 block w-full px-3 py-2 border ${formik.touched.email && formik.errors.email
                  ? 'border-red-500'
                  : 'border-gray-300'
                  } rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black`}
                placeholder="Type here"
              />
              {formik.touched.email && formik.errors.email && (
                <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
              )}
            </div>

            
            <div>
              <label className="block text-sm font-medium text-gray-700">Username<span className='text-red-500'>*</span></label>
              <input
                type="text"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`mt-1 block w-full px-3 py-2 border ${formik.touched.username && formik.errors.username ? 'border-red-500' : 'border-gray-300'
                  } rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black`}
                placeholder="Type here"
              />
              {formik.touched.username && formik.errors.username && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.username}</p>
              )}
            </div>

            
            <div>
              <label className="block text-sm font-medium text-gray-700">Profile Photo URL<span className='text-red-500'>*</span></label>
              <input
                type="url"
                name="photo"
                value={formik.values.photo}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`mt-1 block w-full px-3 py-2 border ${formik.touched.photo && formik.errors.photo ? 'border-red-500' : 'border-gray-300'
                  } rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black`}
                placeholder="Image URL"
              />
              {formik.touched.photo && formik.errors.photo && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.photo}</p>
              )}
            </div>

            
            <div>
              <label className="block text-sm font-medium text-gray-700">Location<span className='text-red-500'>*</span></label>
              <input
                type="text"
                name="location"
                value={formik.values.location}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`mt-1 block w-full px-3 py-2 border ${formik.touched.location && formik.errors.location ? 'border-red-500' : 'border-gray-300'
                  } rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black`}
                placeholder="Type here"
              />
              {formik.touched.location && formik.errors.location && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.location}</p>
              )}
            </div>

            
            <div>
              <label className="block text-sm font-medium text-gray-700">Contact Number<span className='text-red-500'>*</span></label>
              <input
                type="tel"
                name="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`mt-1 block w-full px-3 py-2 border ${formik.touched.phone && formik.errors.phone ? 'border-red-500' : 'border-gray-300'
                  } rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black`}
                placeholder="Type here"
              />
              {formik.touched.phone && formik.errors.phone && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.phone}</p>
              )}
            </div>

            
            <div>
              <Button
                type="submit"
                disabled={formik.isSubmitting}
                className="w-full"
              >
                {formik.isSubmitting ? 'Saving...' : 'Save'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
