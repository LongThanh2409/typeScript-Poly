import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Container from '../Content';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        // gọi API để kiểm tra thông tin đăng nhập
        // nếu thông tin hợp lệ, chuyển hướng đến trang chính
        window.location.href = "/"
    }
    return (


        <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <Container />
            <div class="w-full max-w-sm">
                <form onSubmit={handleSubmit} class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div class="mb-4">
                        <label class="block text-gray-700 font-bold mb-2" for="username">
                            Tên đăng nhập
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="Nhập tên đăng nhập của bạn" value={email} onChange={handleEmailChange}
                        />
                    </div>
                    <div class="mb-6">
                        <label class="block text-gray-700 font-bold mb-2" for="password">
                            Mật khẩu
                        </label>
                        <input
                            class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="********" value={password} onChange={handlePasswordChange}
                        />
                        <p class="text-red-500 text-xs italic">
                            Vui lòng nhập mật khẩu của bạn.
                        </p>
                    </div>
                    <div class="flex items-center justify-between">
                        <button
                            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Đăng nhập
                        </button>
                        <a
                            class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                            href="#"
                        >
                            Quên mật khẩu?
                        </a>
                    </div>
                </form>
                <p class="text-center text-gray-500 text-xs">
                    &copy;2023 Tác giả. Bản quyền thuộc về họ.
                </p>
            </div>
        </div>



    );
};

export default Login;