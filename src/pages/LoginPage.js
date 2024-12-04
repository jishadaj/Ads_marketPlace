import React from 'react';
import logo from '../assets/logo.png.png'
import loginImage from '../assets/login.png'
import Button from '../components/Button';
import nav from '../assets/arrow.png'
import pass from '../assets/pass.png'
import name from '../assets/name.png'
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { loginUser } from '../Api/auth';


function Login() {

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
          username: '',
          password: '',
        },
        validationSchema: Yup.object({
          username: Yup.string().required('Username is required'),
          password: Yup.string().required('Password is required'),
        }),
        onSubmit: async (values) => {
          try {
            const user = await loginUser(values.username, values.password);
            navigate('/home');
          } catch (error) {
            console.error('Login failed:', error.message);
            alert(error.message)
          }
        },
      });

    return (
        <div className="flex justify-center items-center pt-16">

            <div className="flex w-3/4 h-3/4 shadow-sm rounded-3xl overflow-hidden">

                <div className="w-3/5 bg-white flex flex-col justify-center p-8 mx-10 my-10">
                    <div className='flex flex-col items-center justify-center gap-5'>
                        <img src={logo} alt="Logo" className="h-8" />
                        <h1 className="text-sm font-medium text-gray-800 mb-4 text-center">Listbnb <span className='font-extralight'>a Largest Classified Listing Marketplace offers perfect<br></br> Ads classifieds...</span></h1>
                        <h1 className="text-2xl font-bold text-gray-800 mb-8 text-center">Login To Your<br></br> Account</h1>
                    </div>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-600 font-medium mb-2" htmlFor="username">
                                Username<span className='text-red-600'>*</span>
                            </label>
                            <div className='relative'>
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    className="w-full border border-gray-300 rounded-2xl px-4 py-2"
                                    placeholder="Type here"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.username}
                                />
                                <img
                                    src={name}
                                    alt="User Icon"
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 w-3 h-3 cursor-pointer"
                                />
                            </div>
                            {formik.touched.username && formik.errors.username && (
                                <div className="text-red-600 text-sm">{formik.errors.username}</div>
                            )}
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-600 font-medium mb-2" htmlFor="password">
                                Password<span className='text-red-600'>*</span>
                            </label>
                            <div className="relative">
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="w-full border border-gray-300 rounded-2xl px-4 py-2 pr-10"
                                    placeholder="Type here"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.password}
                                />

                                <img
                                    src={pass}
                                    alt="Password Icon"
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 w-3 h-3 cursor-pointer"
                                />
                            </div>
                            {formik.touched.password && formik.errors.password && (
                                <div className="text-red-600 text-sm">{formik.errors.password}</div>
                            )}

                        </div>
                        <Button className="w-full flex items-center justify-center" type='submit'>
                            Login
                            <img src={nav} alt="Right Arrow" className="ml-2 h-4 w-4" />
                        </Button>
                    </form>
                </div>

                <div className="w-2/5 bg-pink-100 flex flex-col justify-center items-center">
                    <img src={loginImage} alt="Decorative" className="mb-20 h-30 w-auto" />
                    <p className="text-black text-lg font-bold mb-6">Don’t have an account?</p>
                    <p className="text-gray-500 text-sm font-extralight mb-4">To connect with us please register for a new<br></br>
                        account if you are not having one already.</p>
                    <Button className="flex items-center" onClick={() => navigate('/register')}>
                        Register
                        <img src={nav} alt="Right Arrow" className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Login;