const Footer = () => {
  return (
    <div>
      {/* Footer Section */}
      <footer className="bg-gray-900 py-10 text-gray-400 ">


                  {/* Logo Section */}
                  <div className="flex justify-center md:justify-center mt-32">
            <img
              src="logo.png"
              alt="Cricket Logo"
              className="w-24 mx-auto"
            />
          </div>




        <div className="w-11/12  mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Us Section */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">About Us</h3>
            <p className="text-gray-400">
              We are a passionate team dedicated to providing the best services
              to our customers.
            </p>
          </div>

          <div>
              <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/services" className="hover:text-white">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

        



    
          <div className="flex flex-col space-y-6">
            {/* Quick Links */}

            {/* Subscribe */}
            <div>
              <h3 className="text-lg font-bold text-white">Subscribe</h3>
              <p className="mb-4">Subscribe to our newsletter for the latest updates.</p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered w-full -mr-10"
                />
                <button className="btn  bg-gradient-to-r from-pink-200 to-yellow-200 -ml-10 ">Subscribe</button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-gray-500 mt-10">
          &copy; 2024 Your Company All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
