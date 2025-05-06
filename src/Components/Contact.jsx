import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    tel: '',
    customerNumber: '',
    serviceType: '',
    reason: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'your_service_id',
        'your_template_id',
        {
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          phone: formData.tel,
          customer_number: formData.customerNumber,
          service_type: formData.serviceType,
          reason: formData.reason,
          message: formData.message
        },
        'your_user_id'
      )
      .then((response) => {
        console.log('Email sent successfully:', response);
        setStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          tel: '',
          customerNumber: '',
          serviceType: '',
          reason: '',
          message: ''
        });
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setStatus('error');
      });
  };

  return (
    <div
      id="contact"
      className="flex items-center justify-center min-h-screen bg-gray-100 p-4"
    >
      <div className="w-full max-w-2xl p-8 bg-white rounded-2xl shadow-lg border border-gray-300">
        <h2 className="text-3xl font-bold mb-6 text-red-500 uppercase text-center">
          Contáctanos
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Nombre
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-400"
                placeholder="Juan"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Apellido
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-400"
                placeholder="Pérez"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-400"
                placeholder="example@correo.com"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Teléfono
              </label>
              <input
                type="tel"
                name="tel"
                value={formData.tel}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-400"
                placeholder="+54 9 387 1234 5678"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Número de Cliente (opcional)
              </label>
              <input
                type="text"
                name="customerNumber"
                value={formData.customerNumber}
                onChange={handleChange}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-400"
                placeholder="123456"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Servicio contratado
              </label>
              <select
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <option value="">Seleccionar</option>
                <option value="Internet">Internet</option>
                <option value="TV">TV</option>
                <option value="Internet + TV">Internet + TV</option>
                <option value="Otro">Otro</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Motivo del contacto
            </label>
            <select
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="">Seleccionar motivo</option>
              <option value="Problemas técnicos">Problemas técnicos</option>
              <option value="Soporte de facturación">
                Soporte de facturación
              </option>
              <option value="Consulta general">Consulta general</option>
              <option value="Solicitar nuevo servicio">
                Solicitar nuevo servicio
              </option>
            </select>
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Mensaje
            </label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
              placeholder="Escribe tu mensaje aquí..."
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="px-8 py-3 bg-red-500 hover:bg-red-600 text-white rounded-full font-semibold transition-all duration-300"
            >
              Enviar mensaje
            </button>
          </div>

          {status === 'success' && (
            <p className="text-green-600 text-center font-medium mt-4">
              ¡Mensaje enviado exitosamente!
            </p>
          )}
          {status === 'error' && (
            <p className="text-red-600 text-center font-medium mt-4">
              Hubo un error al enviar el mensaje.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
