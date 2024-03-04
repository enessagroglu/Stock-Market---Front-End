import React, { useState } from 'react';
import '../components/Contact/Contact.css'


const Contact = () => {
  const [formValues, setFormValues] = useState({ name: '', email: '', message: '' });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formValues);
  };
  return (
    <div className='bodyContact' >
    <div className="contact-container">
      
      <form onSubmit={handleSubmit} className="contact-form">
      <div className="contact-header">
        <h1 style={{ color: '#333', fontFamily: 'Roboto', fontSize: '34px', fontWeight: 'bold'}}>Bize Ulaşın</h1>
      </div>

        <input
          type="text"
          name="name"
          value={formValues.name}
          onChange={handleInputChange}
          placeholder="İsim"
          required
        />
        <input
          type="email"
          name="email"
          value={formValues.email}
          onChange={handleInputChange}
          placeholder="E-Mail"
          required
        />
        <textarea
          name="message"
          value={formValues.message}
          onChange={handleInputChange}
          placeholder="Geridönüş..."
          required
        />
        <button type="submit" className="submit-btn">Gönder</button>
      </form>
      <div className="social-media-icons">
        
        <a href="https://facebook.com"><i className="fab fa-facebook-f"></i></a>
        <a href="https://twitter.com"><i className="fab fa-twitter"></i></a>
        <a href="https://instagram.com"><i className="fab fa-instagram"></i></a>
        <a href="https://pinterest.com"><i className="fab fa-pinterest-p"></i></a>
        <a href="https://yoursite.com"><i className="fas fa-globe"></i></a>
      </div>
    </div>
    </div>
    
  );
};
export default Contact;