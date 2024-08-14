import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSignIn = (e:any) => {
      e.preventDefault();
      // Add your sign-in logic here
      console.log('Email:', email);
      console.log('Password:', password);
    };
  
    return (
        <>
        <Header />

      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Admin Sign In</h2>
          <form onSubmit={handleSignIn}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>

      <Footer />
      </>
    );
}

export default Signin