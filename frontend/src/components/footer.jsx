



const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10 px-6 md:px-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

                {/* Logo & Description */}
                <div>
                    <h2 className="text-2xl font-bold mb-2">MyBrand</h2>
                    <p className="text-sm text-gray-400">
                        Empowering your web journey with beautiful and responsive design.
                    </p>
                </div>

                {/* Navigation Links */}
                <div>
                    <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li><a href="//as" className="hover:text-white transition">Home</a></li>
                        <li><a href="//as" className="hover:text-white transition">About</a></li>
                        <li><a href="//as" className="hover:text-white transition">Services</a></li>
                        <li><a href="//as" className="hover:text-white transition">Contact</a></li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
                    <div className="flex space-x-4 text-gray-400 text-2xl">
                        <a href="//as" className="hover:text-white transition">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="//as" className="hover:text-white transition">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="//as" className="hover:text-white transition">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="//as" className="hover:text-white transition">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
                &copy; {new Date().getFullYear()} MyBrand. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
