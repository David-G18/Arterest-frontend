import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../redux/actions/userSignActions";
import { Link, useNavigate } from "react-router-dom";


export default function SignIn() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const loggedUser = useSelector((state) => state.userSignReducer.userData)



    useEffect(() => {
        if(loggedUser){
            navigate("/home")
        }
    }, [loggedUser])

    const signForm = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().min(4, "Must be 4 characters or more").required("Required"), //string().matches^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$ //  8-16 may minus Puede tener otros símbolos.
        }),
        onSubmit: async (values) => {
            console.log(values, "values");
            dispatch(signIn(values))
            signForm.handleReset();
        },
    });

    return (
        <div className="h-full gradient-form bg-gray-200 md:h-screen">
            <div className="container py-12 px-6 h-full">
                <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                    <div className="xl:w-10/12">
                        <div className="block bg-white shadow-lg rounded-lg">
                            <div className="lg:flex lg:flex-wrap g-0">
                                <div class="lg:w-6/12 flex items-center lg:rounded-l-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-gray-100" >
                                    <div class="text-white px-4 py-6 md:p-12 md:mx-6">
                                        <h4 class="text-xl font-semibold mb-6">Fill up the form to have access to our whole list of artworks</h4>
                                        <p class="text-sm">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat.
                                        </p>
                                    </div>
                                </div>

                                <div className="lg:w-6/12 px-4 md:px-0">
                                    <div className="md:p-12 md:mx-6">
                                        <div class="text-center">
                                            <img class="mx-auto w-48"
                                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                                                alt="logo" />
                                            <h4 class="text-xl font-semibold mt-1 mb-12 pb-1">Welcome to Arterest</h4>
                                        </div>
                                        <form action="" onSubmit={signForm.handleSubmit}>
                                            <div className="text-4xl font-bold text-gray-500 m-5"><h1>Sign In</h1></div>
                                            
                                            <div>
                                                <label htmlFor="email" className="text-gray-500">Email</label>
                                                <input
                                                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    onChange={signForm.handleChange}
                                                    value={signForm.values.email}
                                                    onBlur={signForm.handleBlur}
                                                />
                                                {signForm.touched.email && signForm.errors.email ? (
                                                    <div className="text-sm text-red-500">{signForm.errors.email}</div>
                                                ) : null}
                                            </div>

                                            <div>
                                                <label htmlFor="password" className="text-gray-500">Password</label>
                                                <input
                                                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                    id="password"
                                                    name="password"
                                                    type="password"
                                                    onChange={signForm.handleChange}
                                                    value={signForm.values.password}
                                                    onBlur={signForm.handleBlur}
                                                />
                                                {signForm.touched.password && signForm.errors.password ? (
                                                    <div className="text-sm text-red-500">{signForm.errors.password}</div>
                                                ) : null}
                                            </div>

                                            <div className="text-center pt-1 mb-12 pb-1"><button type="submit" className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-gray-100">Log in</button></div>

                                            <div
                                                class="flex items-center justify-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                                                <p class="text-center font-semibold mx-4 mb-0">OR</p>
                                            </div>

                                            <a class="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3 bg-blueFb"
                                                href="#!" role="button" data-mdb-ripple="true"
                                                data-mdb-ripple-color="light">

                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="w-3.5 h-3.5 mr-2">

                                                    <path fill="currentColor"
                                                        d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                                                </svg>Continue with Facebook
                                            </a>
                                            <div className="flex items-center justify-left pb-6">Not have an account yet? <span className="inline-block px-6 py-2.5 bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-gray-100 focus:text-blue-700 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 active:text-blue-800 transition duration-300 ease-in-out"><Link to={"/signUp"} >Sign Up here</Link></span></div>
                                        </form>
                                    </div>
                                </div>
                                

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}