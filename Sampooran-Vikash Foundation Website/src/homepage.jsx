function Homepage() {
    return (
        <main>
            <section id="home" className="hero">
                <div className="hero-overlay">
                    <div className="container hero-content">
                        <h2>Empowering Individuals, Building Sustainable Communities</h2>
                        <p>Promoting inclusive development through education, healthcare, and social welfare across India.</p>
                        <a href="#about" className="btn-primary">Learn More About Us</a>
                    </div>
                </div>
            </section>
            <section id="about" className="section about-section">
                <div className="container about-grid">
                    <div className="about-text">
                        <h3 className="section-title">About SVF</h3>
                        <p>Sampooran-Vikash Foundation is a Section 8 non-profit organization established on 29 August 2025. We are committed to promoting inclusive and sustainable development through education, healthcare, women empowerment, skill development, environmental protection, and social welfare.</p>
                    </div>
                    <div className="vision-mission">
                        <div className="box vision-box">
                        <h4>Our Vision</h4>
                        <p>To build a better and sustainable society through empowered individuals, healthy families, and inclusive, self-reliant communities.</p>
                        </div>
                        <div className="box mission-box">
                        <h4>Our Mission</h4>
                        <p>To promote education, healthcare, skill development, women empowerment, environmental protection, and social welfare through community participation and sustainable development initiatives.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="focus-areas" className="section bg-light">
                <div className="container">
                    <h3 className="section-title center">Key Focus Areas</h3>
                    <div className="focus-grid">
                        <div className="focus-card">📚 <h4>Education & Child Welfare</h4></div>
                        <div className="focus-card">🏥 <h4>Healthcare & Nutrition</h4></div>
                        <div className="focus-card">👩 <h4>Women Empowerment</h4></div>
                        <div className="focus-card">🛠️ <h4>Skill Dev & Livelihood</h4></div>
                        <div className="focus-card">🌱 <h4>Environmental Protection</h4></div>
                        <div className="focus-card">🤝 <h4>Social Welfare</h4></div>
                    </div>
                </div>
            </section>
            <section id="our-work" className="section">
                <div className="container">
                    <h3 className="section-title center">Our Recent Work</h3>
                    <div className="work-content">
                        <div className="work-text">
                        <h4>Educational Support in Danapur</h4>
                        <p>SVF has undertaken an educational support initiative for children at an Anganwadi Centre in Danapur, Patna. Educational materials and school kits were distributed to support children's learning, taking a small but significant step towards an educated and empowered generation.</p>
                        </div>
                            <div className="work-image-placeholder">
                            [Activity Photograph Goes Here]
                        </div>
                    </div>
                </div>
            </section>
            <section id="leadership" className="section bg-light">
                <div className="container">
                    <h3 className="section-title center">Leadership Messages</h3>
                    <div className="leadership-grid">
                        <div className="message-card">
                            <div className="leader-img-placeholder">Founder photo not provided</div>
                            <h4>Dr. Kanchan Rani</h4>
                            <span className="designation">Founder & Chairperson</span>
                            <p className="quote">"I believe that every individual deserves an opportunity to live with dignity, equality, and respect. The vision behind establishing SVF is to create meaningful social change. Our journey is driven by the belief that even small efforts, when made with dedication and compassion, can bring significant changes to society. We are committed to working with communities, especially the underprivileged, to build a self-reliant society. I invite everyone to join hands with us in this mission."</p>
                        </div>
                        <div className="message-card">
                            <div className="leader-img-placeholder">Director photo not provided</div>
                            <h4>Mr. Sujit Kumar</h4>
                            <span className="designation">Director</span>
                            <p className="quote">"At SVF, we believe that sustainable development begins with collective efforts, strong leadership, and a commitment to serving society. With nearly 20 years of experience in the corporate sector, I believe that effective management, teamwork, and strategic planning can bring meaningful positive changes to communities. Through SVF, we aim to contribute towards building an inclusive society. I sincerely invite well-wishers to join us in this journey."</p>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    )
}

export default Homepage;