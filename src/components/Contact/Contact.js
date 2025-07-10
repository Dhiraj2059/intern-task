import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: null,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, success: null, error: null });

    try {
      // Send data to the API as required in point #4
      const response = await axios.post('https://api.aakashlabs.com', formData);
      
      setFormStatus({
        submitting: false,
        success: 'Thank you for your message! We will get back to you soon.',
        error: null
      });
      
      // Clear form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      console.log('Form submitted successfully:', response.data);
    } catch (error) {
      setFormStatus({
        submitting: false,
        success: null,
        error: 'There was an error submitting your form. Please try again later.'
      });
      console.error('Error submitting form:', error);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <h3>Address</h3>
              <p>Lalitpur, Nepal</p>
            </div>
            <div className="info-item">
              <h3>Email</h3>
              <p>info@tasktest.com</p>
            </div>
            <div className="info-item">
              <h3>Phone</h3>
              <p>+977 1234567890</p>
            </div>
            <div className="info-item">
              <h3>Working Hours</h3>
              <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
            </div>
          </div>
          
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="submit-btn"
                disabled={formStatus.submitting}
              >
                {formStatus.submitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {formStatus.success && (
                <div className="form-success">{formStatus.success}</div>
              )}
              
              {formStatus.error && (
                <div className="form-error">{formStatus.error}</div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;