import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <header className="header-home">
                <h1>Welcome to AgriAdvisor</h1>
            </header>

            <section className="grow-with-us">
                <h2>Grow With Us</h2>
                <p>Partnering with farmers, moving towards smart and sustainable agriculture.</p>
            </section>

            <div className="features">
                <div className="feature">
                    <div className="image image1"></div>
                    <div className="content">
                        <h3>Connecting Farmers with Knowledge and Community</h3>
                        <p>
                            AgriAdvisor is not just a production support tool; it’s a vast agricultural community.
                            Here, you can share experiences, learn from experts, and connect with people who share the same passion.
                        </p>
                    </div>
                </div>

                <div className="feature row-reverse">
                    <div className="image image2"></div>
                    <div className="content">
                        <h3>Applying Technology for Sustainable Agriculture</h3>
                        <p>
                            AgriAdvisor uses modern technology to support sustainable agricultural development,
                            from water and soil resource management to optimizing the use of fertilizers and
                            pesticides to protect the environment.
                        </p>
                    </div>
                </div>

                <div className="feature">
                    <div className="image image3"></div>
                    <div className="content">
                        <h3>Digital Support for Vietnamese Farmers</h3>
                        <p>
                            AgriAdvisor is a digital agriculture solution designed specifically for Vietnamese farmers,
                            improving productivity, saving costs, and promoting sustainable production in the 4.0 era.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
