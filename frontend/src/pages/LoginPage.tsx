const LoginPage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row">
      
      {/* Left Image Section */}
      <div className="md:w-2/5 h-64 md:h-auto">
        <img
          src="https://images.pexels.com/photos/9967912/pexels-photo-9967912.jpeg"
          className="w-full h-full object-cover"
          alt="Login visual"
        />
      </div>

]      <div className="md:w-3/5 flex items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-md flex flex-col items-center">
          
          <div className="text-2xl font-bold text-center">
            Welcome back to Fried Carboretor
          </div>
          <div className="text-md text-gray-500 text-center mt-1">
            Write and Edit your blog
          </div>

          <div className="mt-6 w-full flex flex-col border border-gray-300 rounded-md p-2">
            <label className="text-xs text-gray-600">Email</label>
            <input
              type="email"
              className="w-full text-black text-sm outline-none"
              placeholder="Enter your email"
            />
          </div>

          <div className="mt-3 w-full flex flex-col border border-gray-300 rounded-md p-2">
            <label className="text-xs text-gray-600">Password</label>
            <input
              type="password"
              className="w-full text-black text-sm outline-none"
              placeholder="Enter your password"
            />
          </div>

          <button className="mt-6 bg-red-400 hover:bg-red-500 transition w-full p-2 text-black font-bold rounded-md">
            Login
          </button>

        </div>
      </div>
    </div>
  );
};

export default LoginPage;
