

const Hero = ({addMoney}) => {
  return (
    <section className="w-11/12  bg-black bg rounded-lg mx-auto py-20 mt-5  flex items-center justify-center">
      <div className="text-center max-w-md md:max-w-lg lg:max-w-4xl">
        {/* Logo */}
        <div className="mb-6">
          <img
            src="banner-main.png"
            alt="Cricket Logo"
            className="mx-auto w-40 md:w-52"
          />
        </div>

        {/* Heading */}
        <h1 className="text-white text-2xl md:text-4xl font-bold mb-4">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>

        {/* Subheading */}
        <p className="text-gray-400 mb-8">
          Beyond Boundaries Beyond Limits
        </p>

        {/* Button */}
        <button  onClick={()=>addMoney(`${6000000}`)} className="btn hover:bg-lime-300 ring-2 border-4 p-2 ring-lime-300 border-black primary-color">
          Claim Free Credit
        </button>
      </div>
    </section>
  );
};

export default Hero;
