import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useEffect } from 'react'
import { useRouter } from 'next/router';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter()
    useEffect(() => {
        if (localStorage.getItem('myuser')) {
            router.push('./admin')
        }
      }, [])
  return (
    <>
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-md w-full p-8 bg-white shadow-lg rounded-md flex justify-center flex-col items-center">
        <h1 className="text-3xl text-black font-bold mb-10">HR Management System</h1>
        <div className="mb-4">
          <Link href="/login">
            <div className="text-blue-500 text-2xl hover:underline">Login</div>
          </Link>
        </div>
        <div>
          <Link href="/register">
            <div className="text-blue-500 text-2xl hover:underline">Register</div>
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}
