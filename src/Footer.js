import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-section footer-contact">
                    <p>500 Terry Francine Street<br />
                        San Francisco, CA 94158</p>
                    <p>info@my-domain.com</p>
                    <p>Tel: 123-456-7890<br />
                        Fax: 123-456-7890</p>
                </div>
                <div className="footer-section footer-hours">
                    <h3>Operating Hours</h3>
                    <p>Mon - Fri: 8am - 8pm<br />
                        Saturday: 9am - 7pm<br />
                        Sunday: 9am - 8pm</p>
                </div>
                <div className="footer-section footer-delivery">
                    <h3>Delivery Hours</h3>
                    <p>Mondays: 8am - 1pm<br />
                        Wednesdays: 8am - 1pm<br />
                        Fridays: 8am - 1pm</p>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-links">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#forum">Forum</a>
                    <a href="#contact">Contact Us</a>
                </div>
                <div className="footer-newsletter">
                    <h3>Get the Latest News & Updates from Our Farm</h3>
                    <form>
                        <label htmlFor="email">Email*</label>
                        <input type="email" id="email" placeholder="Enter your email" />
                        <div className="newsletter-subscribe">
                            <div>
                                <input type="checkbox" id="subscribe" />
                                <label htmlFor="subscribe">Yes, subscribe me to your newsletter</label>
                            </div>
                            <button type="submit" style={{ width: "8.3rem", height: "3rem" }}>Join</button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="footer-social">
                <span>Facebook</span>
                <span className="separator">|</span>
                <span>Twitter</span>
                <span className="separator">|</span>
                <span>Instagram</span>
            </div>


            <div className="footer-copyright">
                <p>&copy; 2023 AgriAdvisor. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
