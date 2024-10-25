const Newsletter = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto">
        <div className="bg-gradient-to-r from-blue-300 to-yellow-200 p-8 rounded-xl shadow-lg max-w-2xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Subscribe to our Newsletter
          </h2>

          {/* Subheading */}
          <p className="text-gray-600 mb-6">
            Get the latest updates and news right in your inbox!
          </p>

          {/* Form */}
          <form className="flex justify-center items-center flex-wrap">
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full max-w-xs"
            />
            <button className="btn btn-accent ml-2 bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-bold">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
