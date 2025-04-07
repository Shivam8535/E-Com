

const Login = () => {
    
    return (<>
        <section className="container mx-auto bg-red-300 h-[80vh] w-full flex justify-center items-center">
            <div className="w-[40rem] h-[20rem] bg-[#fff]">
                <form method="" className="py-2 px-4 border h-full">
                    <div>
                        <label htmlFor="Name">Name : </label>
                    </div>
                    <input id='name' type="text" name="name" /><br />
                    <div>
                        <label htmlFor="Email">Email : </label>
                    </div>
                    <input id='email' type="email" className="" name="email" /><br />
                    <div>
                        <label htmlFor="Password">Password : </label>
                    </div>
                    <input id='password' type="password" className="" name="password" /><br />
                    <div>
                        <button type="submit" className="loginBtn border px-6 rounded-2xl border-gray-200">Login</button>
                        <a href="/auth/google">G</a>
                    </div>
                </form>
            </div>
        </section>
    </>)
}


export default Login;