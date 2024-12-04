import React from 'react';
import Button from '../components/Button';
import Sidebar from '../components/SideBar';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import {postAd} from '../Api/ads';
import { useNavigate } from 'react-router-dom';

const PostAd = () => {
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      adTitle: '',
      price: '',
      description: '',
      photo: '',
    },
    validationSchema: Yup.object({
      adTitle: Yup.string().required('Ad title is required'),
      price: Yup.number().required('Price is required').positive('Price must be positive').integer('Price must be an integer'),
      description: Yup.string().required('Description is required').min(20, 'Description must be at least 20 characters'),
      photo: Yup.string().url('Invalid URL').required('Photo URL is required'),
    }),
    onSubmit: async (values) => {      
      try {
        const response = await postAd(values);
        alert('Ad Posted Successfully!');
        navigate('/home')
      } catch (error) {
        console.error('Error posting ad:', error);
        alert('Failed to post the ad');
      }
    },
  });

  return (
    <div className="p-20">
      <h1 className="text-gray-500 text-lg mb-4 font-light">
        Home <span className="mx-2"> &gt; </span> Post Ad
      </h1>
      <div className="flex gap-6">
        {/* Sidebar */}
        <Sidebar />

        
        <div className="flex-1 px-56 py-10 border shadow rounded-2xl">
          <h2 className="text-2xl font-semibold mb-6">Post an Ad</h2>
          <form onSubmit={formik.handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Ad Title<span className='text-red-500'>*</span></label>
              <input
                type="text"
                name="adTitle"
                value={formik.values.adTitle}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`mt-3 block w-full px-3 py-2 border ${formik.touched.adTitle && formik.errors.adTitle ? 'border-red-500' : 'border-gray-300'
                  } rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black`}
                placeholder="Enter the ad title"
              />
              {formik.touched.adTitle && formik.errors.adTitle && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.adTitle}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Price<span className='text-red-500'>*</span></label>
              <input
                type="number"
                name="price"
                value={formik.values.price}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`mt-3 block w-full px-3 py-2 border ${
                  formik.touched.price && formik.errors.price ? 'border-red-500' : 'border-gray-300'
                } rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black`}
                placeholder="Enter the price"
              />
              {formik.touched.price && formik.errors.price && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.price}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Description<span className='text-red-500'>*</span></label>
              <textarea
                name="description"
                value={formik.values.description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`mt-3 block w-full px-3 py-2 border ${
                  formik.touched.description && formik.errors.description ? 'border-red-500' : 'border-gray-300'
                } rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black`}
                rows="4"
                placeholder="Enter the ad description"
              ></textarea>
              {formik.touched.description && formik.errors.description && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.description}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Photo URL<span className='text-red-500'>*</span></label>
              <input
                type="url"
                name="photo"
                value={formik.values.photo}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`mt-3 block w-full px-3 py-2 border ${
                  formik.touched.photo && formik.errors.photo ? 'border-red-500' : 'border-gray-300'
                } rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black`}
                placeholder="Paste the URL of the photo"
              />
              {formik.touched.photo && formik.errors.photo && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.photo}</p>
              )}
            </div>

            <div>
              <Button
                type="submit"
                className="w-full"
              >
                Post
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostAd;
