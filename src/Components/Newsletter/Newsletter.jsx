const Newsletter = () => {
  return (

      <section className="bg-white py-12 xl:mt-20  ">
        <div className="w-11/12 mx-auto ">
          <div className=" xl:left-1/2 xl:transform xl:-translate-x-1/2 xl:-translate-y-1/2 bg bg-white p-8  rounded-lg shadow-lg max-w-4xl xl:absolute backdrop-blur-sm xl:border-8  border-2  xl:w-full xl:z-10  xl:mt-12  mx-auto text-center">
    
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Subscribe to our Newsletter
            </h2>
            <p className="text-gray-600 mb-6">
              Get the latest updates and news right in your inbox!
            </p>
  
       
            <form className="flex justify-center items-center flex-wrap">
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full max-w-xs"
              />
              <button className="btn  bg-gradient-to-r from-pink-200 to-yellow-200 ml-2">Subscribe</button>
            </form>
          </div>
        </div>
      </section>

  );
};

export default Newsletter;
