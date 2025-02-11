import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './contact.css';
import { useTheme } from '../ThemeContext';

function Contact() {
    const { isPhysician, toggleTheme } = useTheme(); // Access values from ThemeContext
    const navigate = useNavigate(); // For navigation

    useEffect(() => {
        // Update the theme dynamically based on isPhysician
        document.documentElement.setAttribute('data-theme', isPhysician ? 'physician' : 'resident');
    }, [isPhysician]);

    return (
        <div className="dn-contact-container">
            <div className="dn-contact-box dn-contact-about">
                <h2 className="dn-contact-title">About PhysiLink</h2>
                <div className="dn-contact-highlight">
                    <p><strong>Founded:</strong> August 2024</p>
                    <p><strong>Founder:</strong> Shyam Ganesh Babu</p>
                    <p><strong>Co-founder:</strong> Dr. Cecilia Fernandes</p>
                    <p><strong>Supported by:</strong> Healthcare professionals and students</p>
                </div>
                <p>
                    PhysiLink was born from a vision to empower pre-health students with comprehensive
                    resources for their pre-health journey. Our mission is to bridge the gap between aspiring
                    medical professionals and experienced physicians & residents.
                </p>
                <p>We offer a unique platform that provides:</p>
                <ul className="dn-contact-list">
                    <li>Personalized mentorship from physicians</li>
                    <li>Expert advice from practicing physicians and residents</li>
                    <li>Live webinars, Q&A sessions, and access to webinar and podcast recordings</li>
                    <li>Potential shadowing opportunities</li>
                </ul>
                <p>
                    Our goal is to nurture the next generation of healthcare providers by offering real-world
                    insights and guidance from those already in the field.
                </p>
                <div className="dn-contact-highlight">
                    <p>
                        <strong>Getting Started:</strong> Check out our "Physician of the Month" or "Resident of the Month" page to connect with featured physicians and residents. Ask them anything—from personal insights to professional expertise—and explore their specialties!
                    </p>
                </div>
                <div className="dn-contact-button-container dn-contact-button-container-spaced">
                    <button
                        className="dn-contact-cta-button"
                        onClick={() => {
                            if (!isPhysician) toggleTheme(); // Switch to physician theme if not already
                            navigate('/'); // Navigate to the Doctors page
                        }}
                    >
                        Visit Physician of the Month
                    </button>
                    <button
                        className="dn-contact-cta-button-2"
                        onClick={() => {
                            if (isPhysician) toggleTheme(); // Switch to resident theme if not already
                            navigate('/ResidentOfMonth'); // Navigate to the Residents page
                        }}
                    >
                        Visit Resident of the Month
                    </button>
                </div>
                <div className="dn-contact-highlight">
                    <p>
                        <strong>Utilize the  Database:</strong> Explore our database of physicians and residents from previous months to learn about their specialties and review the questions they’ve answered. If you’d like to connect with a specific doctor or resident, feel free to reach out to us for more information.
                    </p>
                </div>
                <div className="dn-contact-button-container">
                    <button
                        className="dn-contact-cta-button"
                        onClick={() => {
                            if (!isPhysician) toggleTheme(); // Switch to physician theme if not already
                            navigate('/PreviousDoc'); // Navigate to the previous Doctors page
                        }}
                    >
                        View Previous Physicians
                    </button>
                    <button
                        className="dn-contact-cta-button-2"
                        onClick={() => {
                            if (isPhysician) toggleTheme(); // Switch to resident theme if not already
                            navigate('/PreviousRes'); // Navigate to the previous Residents page
                        }}
                    >
                        View Previous Residents
                    </button>
                </div>
            </div>
            <div className="dn-contact-box dn-contact-info-box">
                <h2 className="dn-contact-title">Contact Us</h2>
                <p>
                    We welcome inquiries from pre-health students, healthcare professionals, and anyone
                    interested in supporting our mission. Whether you have questions, feedback, or partnership
                    proposals, we'd love to hear from you!
                </p>
                <div className="dn-contact-info-details">
                    <div className="dn-contact-info-item">
                        <span className="dn-contact-info-label">Contact Person:</span>
                        <span className="dn-contact-info-value">Shyam Ganesh Babu</span>
                    </div>
                    <div className="dn-contact-info-item">
                        <span className="dn-contact-info-label">Email:</span>
                        <span className="dn-contact-info-value">physilink2024@gmail.com</span>
                    </div>
                    <div className="dn-contact-info-item">
                        <span className="dn-contact-info-label">Phone:</span>
                        <span className="dn-contact-info-value">803-357-3579</span>
                    </div>
                </div>
                <p><br />We encourage reaching out if you are:</p>
                <ul className="dn-contact-list">
                    <li>Pre-health students at any educational level</li>
                    <li>Medical professionals interested in mentoring</li>
                    <li>Healthcare institutions for partnerships</li>
                    <li>Anyone passionate about supporting medical education</li>
                </ul>
                <p>
                    Your support, ideas, and collaborations are invaluable to us as we work to enhance the
                    journey of future medical professionals.
                </p>
                <div className="dn-contact-button-container">
                    <a href="mailto:physilink2024@gmail.com" className="dn-contact-cta-button">Contact Us Now</a>
                    <a href="https://www.linkedin.com/company/physilink/" className="dn-contact-cta-button">LinkedIn</a>
                </div>
                <br /><br />
                <h2 className="dn-contact-title">How to Use PhysiLink</h2>
                <br />
                <div className="video-wrapper-1">
                    <iframe
                        src="https://www.youtube.com/embed/-1slFiAJLfY"
                        title="How to Use PhysiLink"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default Contact;
