function Header(){
    return(
        <header className="site-header">
            <div className="top-bar">
                <div className="container top-bar-content">
                    <div className="contact-info">
                        <span>📧 <a href="mailto:sampooranfoundation@gmail.com">sampooranfoundation@gmail.com</a></span>
                        <span>📍 Present Workbase: Patna, Bihar</span>
                    </div>
                    <div className="registration-info">
                        <span>Section 8 Company | Pan-India Operation</span>
                    </div>
                </div>
            </div>
            <nav className="navbar">
                <div className="container nav-content">
                    <div className="brand">
                        <h1 className="logo-text">Sampooran-Vikash <span>Foundation</span></h1>
                    </div>
                    <ul className="nav-links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About SVF</a></li>
                        <li><a href="#focus-areas">Focus Areas</a></li>
                        <li><a href="#our-work">Our Work</a></li>
                        <li><a href="#leadership">Leadership</a></li>
                        <li><a href="#contact" className="btn-donate">Support Us</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;
