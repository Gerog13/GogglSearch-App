import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from './Search';

export const Navbar = ({ darkTheme, setDarkTheme }) => {
    return (
        <div className="px-4 pt-6 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200 w-full">
            <div className="flex justify-between items-center space-x-5 w-screen">
                <Link to="/">
                    <p className="text-2xl font-serif ml-3 tracking-wider text-blue-900 font-bold py-1 px-2 dark:text-gray-50">
                        Goggl
                    </p>
                </Link>
                <button type="button" onClick={() => setDarkTheme(!darkTheme)} className="text-xl font-mono dark:bg-gray-50 dark:text-gray-900 bg-white rounded-full px-5 py-1 transform-gpu hover:-translate-y-1 transition-all duration-50 ease-in-out">
                    {darkTheme ? 'Light 🌙' : 'Dark 🌑'}
                </button>
            </div>
            <Search />
        </div>
    )
}
