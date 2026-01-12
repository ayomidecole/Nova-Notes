import React from 'react';

const NavBar = () => {
    return (
        <nav className="w-full bg-black text-white py-2">
            <div className="mx-auto px-4 md:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/*Left*/}
                    <div>Nova Notes</div>
                    {/*Center*/}
                    <ul className="hidden md:flex items-center space-x-8">
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>Security</li>
                        <li>Blog</li>
                    </ul>
                    {/*Right*/}
                    <div className="flex items-center space-x-4">
                        <a className="hidden md:inline">Sign in</a>
                        <button className="bg-blue-600 rounded-full px-4 py-2">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
