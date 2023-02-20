import LOGO from "@/assets/approve.png";
import React from "react";

export default function Page() {
  return (
    <div className="w-full h-[100vh] patternBg">
      <div className="w-full h-full flex justify-center items-center">
        <div
          id="login-card"
          className="w-full rounded-xl bg-white shadow-lg max-w-[350px] md:max-w-[400px] text-slate-600"
        >
          <div className="w-full h-full flex flex-col items-center gap-6 p-6">
            <div
              id="title"
              className="w-full flex items-center justify-center gap-3"
            >
              <div id="title-logo">
                <img src={LOGO} alt="icon" className="w-11 h-11" />
              </div>
              <div className="font-[700] text-2xl">Absensi</div>
            </div>
            <div
              id="greeting-msg"
              className="w-full flex flex-col items-center text-center gap-1"
            >
              <div className="text-xl font-medium">Welcome to Absensi! 👋</div>
              <div>Please sign-in to your account and start the conquest</div>
            </div>
            <form className="w-full flex flex-col gap-4">
              <div id="username" className="w-full flex flex-col gap-3">
                <div className="text-xs">
                  NIK<span className="text-red-500 text-sm">*</span>
                </div>
                <div>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-slate-300 p-2"
                  />
                </div>
              </div>
              <div id="password" className="flex flex-col gap-3">
                <div className="w-full flex items-center justify-between">
                  <div className="text-xs">
                    PASSWORD<span className="text-red-500 text-sm">*</span>
                  </div>
                  <div className="text-xs text-indigo-600">
                    Forgot Password?
                  </div>
                </div>
                <div>
                  <input
                    type="password"
                    className="w-full rounded-lg border border-slate-300 p-2"
                  />
                </div>
              </div>
              <div id="remember" className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded-lg border border-slate-300 p-2"
                />
                <div className="text-sm text-slate-600">
                  Remember me on this device
                </div>
              </div>
              <div id="login-btn">
                <button className="w-full rounded-lg bg-indigo-600 text-white p-2">
                  Login
                </button>
              </div>
              <div id="register-btn">
                <button className="w-full rounded-lg bg-white border border-indigo-600 text-indigo-600 p-2">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
