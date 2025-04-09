import { useState } from 'react';
import '../styles/login.css'
// import $ from 'jquery';
import '../js/login';
import { ToastContainer, toast } from 'react-toastify';
import './javaScript/form.js';


const Login = () => {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submit = (e) => {
        e.preventDefault();
        console.log("name : ", name, "email : ", email, "password : ", password);
        toast("Work Soon !")
    }

    return (<>
        <section className="loginsec container mx-auto h-[80vh] w-full flex justify-center items-center">
            <div className="form md:w-[40rem] relative rounded-2xl w-[20rem] h-[20rem] bg-[#fff]">
                <form method="" className="w-full absolute signform py-2 px-4 h-full flex flex-col  items-center justify-center">
                    <h1 className='font-[700]'>Log In</h1>
                    <div>
                        <div className='relative'>
                            <p className=' absolute top-6 left-2' htmlFor="Name">Name : </p>
                        </div>
                        <div>
                            <input className='z-2 mt-5 h-9 w-60 lg:w-80 ' id='name' type="text" onChange={(e) => { setName(e.target.value) }} value={name} name="name" />
                        </div>
                        <div className='relative'>
                            <p className='z-0 absolute top-6 left-2' htmlFor="Email">Email : </p>
                        </div>
                        <input id='email' className='email z-2 mt-5 h-9 w-60 lg:w-80 ' type="email" onChange={(e) => { setEmail(e.target.value) }} value={email} name="email" />
                        <div className='relative'>
                            <p className=' absolute top-6 left-2' htmlFor="Password">Password : </p>
                        </div>
                        <div>
                            <input className='z-2 mt-5 h-9 w-60 lg:w-80 ' id='password' value={password} onChange={(e) => { setPassword(e.target.value) }} type="password" name="password" />
                        </div>
                        <div className='flex justify-evenly mt-2'>
                            <button type="button" onClick={submit} className="loginBtn cursor-pointer border px-6 rounded-2xl border-gray-200">Login</button>
                            <a className='border border-gray-200 rounded-2xl px-3' href="/auth/google">Google</a>
                        </div>
                    </div>
                </form>
            </div>
        </section>
        <ToastContainer />
    </>)
}


export default Login;