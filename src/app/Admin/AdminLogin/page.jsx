"use client"
import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/navigation';
export default function page() {
  const router = useRouter();
    const handleLogin = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const username = formData.get("username");
        const password = formData.get("password");
       if(username || password){
        const response = await axios.post("/api/adminAccess",{username,password});
        if(response.status == 200){
          localStorage.setItem("access","admin")
          console.log("LOGGED IN");
          router.push("/Programs")
        }else{
            return {error : "ERROR OCCURED"}
        }
       }
    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Head>
        <title>Admin Login</title>
      </Head>
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
        <form method='POST' onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
