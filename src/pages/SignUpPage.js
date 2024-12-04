import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import logo from '../assets/logo.png.png'
import loginImage from '../assets/login.png'
import Button from '../components/Button';
import nav from '../assets/arrow.png'
import pass from '../assets/pass.png'
import name from '../assets/name.png'
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../Api/auth';


function SignUp() {

    const navigate = useNavigate()

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is required'),
        username: Yup.string().min(3, 'Must be at least 3 characters').required('Username is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required'),
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            username: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema,
        onSubmit: async (values) => {
            try {
                await registerUser(values.username, values.email, values.password);
                alert('Registration successful!');
                navigate('/home');
            } catch (error) {
                alert('Registration failed. Please try again.');
                console.error(error);
            }
        },
    });


    return (
        <div className="flex justify-center items-center p-8">

            <div className="flex w-3/4 h-2/4 shadow-sm rounded-3xl overflow-hidden">

                <div className="w-3/5 bg-white flex flex-col justify-center p-8 mx-10 my-10">
                    <div className='flex flex-col items-center justify-center'>
                        <img src={logo} alt="Logo" className="h-8 mb-4" />
                        <h1 className="text-sm font-medium text-gray-800 mb-2 text-center">Listbnb <span className='font-extralight'>a Largest Classified Listing Marketplace offers perfect<br></br> Ads classifieds...</span></h1>
                        <h1 className="text-2xl font-bold text-gray-800 mb-8 text-center">Create Your<br></br> Account</h1>
                    </div>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="mb-2">
                            <label className="block text-gray-600 font-medium mb-2" htmlFor="email">
                                Email<span className='text-red-600'>*</span>
                            </label>
                            <div className='relative'>
                                <input
                                    type="email"
                                    id="email"
                                    className={`w-full border ${formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-300'
                                        } rounded-2xl px-4 py-2`}
                                    placeholder="Type here"
                                    {...formik.getFieldProps('email')}
                                />
                                <img
                                    src={name}
                                    alt="User Icon"
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 w-3 h-3 cursor-pointer"
                                />
                            </div>
                            {formik.touched.email && formik.errors.email && (
                                <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
                            )}
                        </div>
                        <div className="mb-2">
                            <label className="block text-gray-600 font-medium mb-2" htmlFor="username">
                                Username<span className='text-red-600'>*</span>
                            </label>
                            <div className='relative'>
                                <input
                                    type="text"
                                    id="username"
                                    className={`w-full border ${formik.touched.username && formik.errors.username ? 'border-red-500' : 'border-gray-300'
                                        } rounded-2xl px-4 py-2`}
                                    placeholder="Type here"
                                    {...formik.getFieldProps('username')}
                                />
                                <img
                                    src={name}
                                    alt="User Icon"
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 w-3 h-3 cursor-pointer"
                                />
                            </div>
                            {formik.touched.username && formik.errors.username && (
                                <p className="text-red-500 text-sm mt-1">{formik.errors.username}</p>
                            )}
                        </div>
                        <div className="mb-2">
                            <label className="block text-gray-600 font-medium mb-2" htmlFor="password">
                                Password<span className='text-red-600'>*</span>
                            </label>
                            <div className="relative">
                                <input
                                    type="password"
                                    id="password"
                                    className={`w-full border ${formik.touched.password && formik.errors.password ? 'border-red-500' : 'border-gray-300'
                                        } rounded-2xl px-4 py-2 pr-10`}
                                    placeholder="Type here"
                                    {...formik.getFieldProps('password')}
                                />

                                <img
                                    src={pass}
                                    alt="Password Icon"
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 w-3 h-3 cursor-pointer"
                                />
                            </div>
                            {formik.touched.password && formik.errors.password && (
                                <p className="text-red-500 text-sm mt-1">{formik.errors.password}</p>
                            )}
                        </div>

                        <div className="mb-2">
                            <label className="block text-gray-600 font-medium mb-2" htmlFor="password">
                                Confirm Password<span className='text-red-600'>*</span>
                            </label>
                            <div className="relative">
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    className={`w-full border ${formik.touched.confirmPassword && formik.errors.confirmPassword
                                            ? 'border-red-500'
                                            : 'border-gray-300'
                                        } rounded-2xl px-4 py-2 pr-10`}
                                    placeholder="Type here"
                                    {...formik.getFieldProps('confirmPassword')}
                                />

                                <img
                                    src={pass}
                                    alt="Password Icon"
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 w-3 h-3 cursor-pointer"
                                />
                            </div>
                            {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                                <p className="text-red-500 text-sm mt-1">{formik.errors.confirmPassword}</p>
                            )}
                        </div>
                        <Button className="w-full flex items-center justify-center mt-3.5" type="submit">
                            Register
                            <img src={nav} alt="Right Arrow" className="ml-2 h-4 w-4" />
                        </Button>
                    </form>
                </div>

                <div className="w-2/5 bg-pink-100 flex flex-col justify-center items-center">
                    <img src={loginImage} alt="Decorative" className="mb-20 h-30 w-auto" />
                    <p className="text-black text-lg font-bold mb-6">Already have an account?</p>
                    <p className="text-gray-500 text-sm font-extralight mb-4">To connect with us please login to our<br></br>
                        account if you are having one already.</p>
                    <Button className="flex items-center" onClick={() => navigate('/')}>
                        Login
                        <img src={nav} alt="Right Arrow" className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default SignUp;