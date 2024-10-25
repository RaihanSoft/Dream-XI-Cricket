
import "./Navbar.css"
const Navbar = () => {
  return (

<section className="shadow-md bg-white border-b sticky top-0 z-50 border-gray-200 ">
      <nav className="w-11/12 mx-auto">
        <div className="container mx-auto flex justify-between items-center px-4 py-3">
          {/* Logo Section */}
          <div className="flex items-center ">
            <img src="logo-footer.png" alt="Logo" className="h-10" />
          </div>
  
          <div className="hidden md:flex items-center">
          {/* Links Section */}
          <div className="hidden md:flex space-x-6 mr-16">
            <a href="/" className="text-gray-800 hover:text-gray-600">Home</a>
            <a href="/fixtures" className="text-gray-800 hover:text-gray-600">Fixture</a>
            <a href="/teams" className="text-gray-800 hover:text-gray-600">Teams</a>
            <a href="/schedules" className="text-gray-800 hover:text-gray-600">Schedules</a>
          </div>
  
          {/* Coins Section */}
            <span className="flex items-center text-gray-800">
              <span>60000 Coin</span>
              <img src="https://img.icons8.com/?size=48&id=GlRpln3p4tC0&format=png" alt="Coin Icon" className="ml-2 w-5 h-5" />
            </span>
          </div>
  
          {/* Hamburger Menu */}
          <div className="md:hidden">
            <input type="checkbox" id="menu-toggle" className="hidden" />
            <label htmlFor="menu-toggle" className="cursor-pointer">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </label>
            
            {/* Mobile Menu */}
            <div className="mobile-menu hidden bg-white absolute top-16 left-0 w-full shadow-lg">
              <ul className="p-4">
                <li className="py-2"><a href="/" className="block text-gray-800 hover:text-gray-600">Home</a></li>
                <li className="py-2"><a href="/fixtures" className="block text-gray-800 hover:text-gray-600">Fixture</a></li>
                <li className="py-2"><a href="/teams" className="block text-gray-800 hover:text-gray-600">Teams</a></li>
                <li className="py-2"><a href="/schedules" className="block text-gray-800 hover:text-gray-600">Schedules</a></li>
                <li className="py-2 flex justify-between">
                  <span>60000 Coin</span>
                  <img src="logo-footer.png" alt="Coin Icon" className="ml-2 w-5 h-5" />
                </li>
              </ul>
            </div>
          </div>
        </div>
  
  
      </nav>
</section>
  );
};

export default Navbar;
