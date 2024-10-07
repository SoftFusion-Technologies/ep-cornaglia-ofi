import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../Styles/contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    tel: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS configuration
    const { firstName, lastName, email, tel, message } = formData;
    emailjs.send('your_service_id', 'your_template_id', {
      from_name: `${firstName} ${lastName}`,
      from_email: email,
      phone: tel,
      message: message,
    }, 'your_user_id')
      .then((response) => {
        console.log('Email sent successfully:', response);
        setStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          tel: '',
          message: ''
        });
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setStatus('error');
      });
  };

  return (
    <div id="contact" className="main-container max-w-full overflow-hidden">
      <div className="containerForm">
        <div className="text">CONTACTO</div>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="input-data">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <div className="underline"></div>
              <label>Nombre</label>
            </div>
            <div className="input-data">
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
              <div className="underline"></div>
              <label>Apellido</label>
            </div>
          </div>
          <div className="form-row">
            <div className="input-data">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <div className="underline"></div>
              <label>Email</label>
            </div>
            <div className="input-data">
              <input
                type="number"
                name="tel"
                value={formData.tel}
                onChange={handleChange}
                required
              />
              <div className="underline"></div>
              <label>Teléfono</label>
            </div>
          </div>
          <div className="form-row">
            <div className="input-data textarea">
              <textarea
                rows="8"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <div className="underline"></div>
              <label>Deja tu mensaje</label>
            </div>
          </div>
          <div className="form-row submit-btn">
            <div className="input-data">
              <div className="inner"></div>
              <input type="submit" value="Enviar" />
            </div>
          </div>
          {status === 'success' && <p className="status-message">¡Mensaje enviado exitosamente!</p>}
          {status === 'error' && <p className="status-message">Hubo un error al enviar el mensaje.</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
