import React, { useState } from 'react';
import '../Styles/contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    website: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
  };

  return (
    <div id="contact" className="main-container">
      <div className="containerForm">
        <div className="text">CONTACTO</div>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="input-data">
              <input
                type="text"
                name="nombre"
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
                name="Apellido"
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
                type="tel"
                name="tel"
                value={formData.website}
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
        </form>
      </div>
    </div>
  );
};

export default Contact;
