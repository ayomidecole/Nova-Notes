import React from 'react';

const Hero = () => {
    return (
        <section className="my-8">
            <div className="mx-auto px-4 md:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                    {/*Left*/}
                    <div className="flex flex-col space-y-4 p-8 bg-amber-100 my-2 rounded-lg border-2">
                        <span>New: Offline mode</span>
                        <h2 className="text-2xl font-bold">
                            Write faster. Think clearer.
                        </h2>
                        <p>
                            Nova Notes helps you capture ideas quickly and
                            organize them into projects — even when you’re
                            offline.
                        </p>
                        <div className='flex items-center space-x-4'>
                            <button className='bg-blue-600 rounded-full px-4 py-2 text-amber-50'>Start Free</button>
                            <a href='#' className="text-blue-600 hover:underline">See how it works</a>
                        </div>
                        <small>No credit card required • Cancel anytime</small>
                    </div>
                    {/*Right*/}
                    <div className="p-8 my-2">hi</div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
