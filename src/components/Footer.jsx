import React from 'react'

export const Footer = () => {
    return (
        <div className="absolute bottom-0 w-full h-20 flex items-center justify-center text-center border-t dark:border-gray-700 border-gray-200">
            <div className="flex w-24 justify-between items-center">
                <a className="px-2 py-1 rounded-md text-black bg-gray-200 hover:bg-blue-200 transition ease-in-out duration-200" href="https://www.linkedin.com/in/geronimo-garcia/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin-in"></i>
                </a>
                <a className="px-2 py-1 rounded-md text-black bg-gray-200 hover:bg-red-200 transition ease-in-out duration-200" href="https://github.com/Gerog13" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                </a>
            </div>
        </div>
    )
}
