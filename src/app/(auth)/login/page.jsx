"use client"
import React from "react";
import Link from "next/link";
import {signIn} from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  // define server action
  async function handleLogin (userInfo) {
    // define object structure
    const newUserInfo = {
      email : userInfo.get("email"),
      password : userInfo.get("password")
    }

    // calling next auth service and passing "newUserInfo"
    const res = await signIn('credentials', {
      redirect : false,
      ... newUserInfo
    })

    // Checking login success
    if(res?.ok){
      router.push("/todo-list");
    }
  }

  return (
    <main className="w-full px-32 pt-28">
      <img src="assets/icons/logo.svg" alt="" />
      <section className="flex justify-between mt-10 ml-[185px]">
        {/* Login info */}
        <form action={handleLogin}>
          <p className="font-bold">Login</p>
          <input
            placeholder="Email"
            type="email"
            name="email"
            className="border border-gray mt-3 w-[400px] h-10 rounded-lg pl-4 text-sm"
          />{" "}
          <br />
          <input
            placeholder="Password"
            type="password"
            name="password"
            className="border border-gray mt-3 w-[400px] h-10 rounded-lg pl-4 text-sm"
          />{" "}
          <br />
          <button className="mt-5 mb-2 w-[400px] bg-[#306BFF] text-white  py-2 rounded-lg">
            Login
          </button>
          <p>
            <small className="text-[#94A3B8] ">Didn't have account yet?</small>
            <small className="text-[#306BFF]">
                <Link href={"/register"}>Register</Link></small>
          </p>
          <div className="my-5 border-b-2 text-center text-gray">
                            <div className="leading-none px-5 inline-block text-sm  tracking-wide font-medium bg-white transform translate-y-3">
                                Continue with
                            </div>
                        </div>
          <button className="mt-5 mb-2 w-[400px] border border-gray text-gray  py-2 rounded-lg">
            Google
          </button>
        </form>
        {/* image */}
        <div>
          <img src="assets/icons/login.svg" className="w-[300px] " alt="" />
        </div>
      </section>
      <p className="text-gray">© 2024 My office. All Rights Reserved</p>
    </main>
  );
};

export default LoginPage;
