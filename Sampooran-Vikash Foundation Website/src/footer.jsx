function Footer() {
    return (
        <footer id="contact" className="site-footer">
            <div className="container footer-grid">
                
                <div className="footer-about">
                    <h4>Sampooran-Vikash Foundation</h4>
                    <p>A Section 8 non-profit organization dedicated to building a better, healthier, and self-reliant society through grassroots initiatives.</p>
                </div>

                <div className="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#focus-areas">What We Do</a></li>
                        <li><a href="#our-work">Latest Activities</a></li>
                        <li><a href="#leadership">Board & Team</a></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h4>Contact Information</h4>
                    <p><strong>Registered Office:</strong><br />Dhanbad, Jharkhand, India</p>
                    <p><strong>Present Workbase:</strong><br />Patna, Bihar, India</p>
                    <p><strong>Email:</strong><br /><a href="mailto:sampooranfoundation@gmail.com">sampooranfoundation@gmail.com</a></p>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; 2026 Sampooran-Vikash Foundation (SVF). All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;