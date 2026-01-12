import React from 'react';

const NavBar = () => {
    return (
        <nav className="w-full bg-black text-white py-2">
            <div className="max-w-6xl mx-auto px-2">
                <div className="flex items-center justify-between h-16">
                    {/*Left*/}
                    <div>Nova Notes</div>
                    {/*Center*/}
                    <ul className="hidden md:flex items-center space-x-8">
                        <li className="mr-2">Features</li>
                        <li className="mr-2">Pricing</li>
                        <li className="mr-2">Security</li>
                        <li className="mr-2">Blog</li>
                    </ul>
                    {/*Right*/}
                    <div>Get Started</div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
