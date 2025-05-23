import React from "react";

export default function LoginModal({ isOpen, onClose, setIsLogin }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0000008a] bg-opacity-50">
      <div className="bg-white w-full max-w-md mx-4 rounded-2xl shadow-xl p-6 relative">
        <button className="absolute top-6 right-6 text-gray-500 hover:text-gray-800 cursor-pointer" onClick={onClose}>
          ✕
        </button>
        <h2 className="text-2xl font-semibold text-center mb-6 text-[#08798b]">Đăng nhập</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Tài khoản</label>
            <input type="email" className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Mật khẩu</label>
            <input type="password" className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" required />
          </div>
          <button
            type="submit"
            className="w-full bg-[#08798b] text-white py-2 rounded-md transition cursor-pointer"
            onClick={() => {
              setIsLogin(true);
              onClose();
            }}
          >
            Đăng nhập
          </button>
        </form>
      </div>
    </div>
  );
}
