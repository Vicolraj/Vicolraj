import React, { useState } from 'react';
import './styles/Contact.css'
import { FaUser, FaEnvelope, FaComment, FaPaperPlane, FaPhone } from 'react-icons/fa';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState({
    show: false,
    message: '',
    type: '' // 'success' or 'error'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  const subject = `Message from ${formData.name}`;
  const body = `${formData.message}\n\nName: ${formData.name}\nEmail: ${formData.email}`;
  const mailtoLink = `mailto:vicolraj@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  window.location.href = mailtoLink;

  // Optional visual feedback (won't fire if mail app hijacks navigation)
  showNotification('Opening mail app...', 'success');
};


  const showNotification = (message, type) => {
    setNotification({
      show: true,
      message,
      type
    });

    setTimeout(() => {
      setNotification({
        show: false,
        message: '',
        type: ''
      });
    }, 3000);
  };

  return (
    <section className='modSec contactMe'>
      <div className="contact-container">
        <div className="window-header">
          <div className="window-buttons">
            <div className="window-btn btn-close"></div>
            <div className="window-btn btn-minimize"></div>
            <div className="window-btn btn-fullscreen"></div>
          </div>
          <div className="window-title">Contact Me</div>
        </div>
        
        <div className="contact-content">
          <h2>Get in Touch</h2>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group float-label">
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                placeholder=" "
                required 
              />
              <label htmlFor="name"><FaUser /> Name</label>
            </div>
            
            <div className="form-group float-label">
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                placeholder=" "
                required 
              />
              <label htmlFor="email"><FaEnvelope /> Email</label>
            </div>
            
            <div className="form-group">
              <label htmlFor="message"><FaComment /> Message</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn" disabled={isLoading}>
              <span id="btnText" style={{ display: isLoading ? 'none' : 'inline' }}>
                Send Message
              </span>
              {isLoading && <div className="loader"></div>}
              <FaPaperPlane />
            </button>
          </form>
          
        </div>

        {notification.show && (
          <div className={`notification ${notification.type}`}>
            {notification.message}
          </div>
        )}

        
      </div>
    </section>
  );
};

export default ContactForm;