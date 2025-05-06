import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    servicio: '',
    motivo: '',
    mensaje: ''
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
        'your_service_id', // ← Reemplazar con tu ID real
        'your_template_id', // ← Reemplazar con tu ID real
        {
          from_name: `${formData.nombre} ${formData.apellido}`,
          from_email: formData.email,
          phone: formData.telefono,
          service_type: formData.servicio,
          reason: formData.motivo,
          message: formData.mensaje
        },
        'your_user_id' // ← Reemplazar con tu ID real
      )
      .then((response) => {
        console.log('Email enviado correctamente:', response);
        setStatus('success');
        setFormData({
          nombre: '',
          apellido: '',
          email: '',
          telefono: '',
          servicio: '',
          motivo: '',
          mensaje: ''
        });
      })
      .catch((error) => {
        console.error('Error al enviar el mensaje:', error);
        setStatus('error');
      });
  };

  return (
    <div
      id="contacto"
      className="flex items-center justify-center min-h-screen bg-gray-100 p-4"
    >
      <div className="w-full max-w-2xl p-8 bg-white rounded-2xl shadow-lg border border-gray-300">
        <h2 className="text-3xl font-bold mb-6 text-red-600 uppercase text-center">
          Contactanos
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nombre
              </label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                placeholder="Juan"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Apellido
              </label>
              <input
                type="text"
                name="apellido"
                value={formData.apellido}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                placeholder="Pérez"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                placeholder="correo@ejemplo.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Teléfono
              </label>
              <input
                type="tel"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                placeholder="+54 9 381 123 4567"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Servicio
            </label>
            <select
              name="servicio"
              value={formData.servicio}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-red-500"
            >
              <option value="">Seleccionar servicio</option>
              <option value="Alineado y Balanceado">
                Alineado y Balanceado
              </option>
              <option value="Reparación de Llantas">
                Reparación de Llantas
              </option>
              <option value="Suspensión y Tren Delantero">
                Suspensión y Tren Delantero
              </option>
              <option value="Otros">Otros</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Motivo
            </label>
            <select
              name="motivo"
              value={formData.motivo}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-red-500"
            >
              <option value="">Seleccionar motivo</option>
              <option value="Consulta sobre servicio">
                Consulta sobre servicio
              </option>
              <option value="Solicitud de turno">Solicitud de turno</option>
              <option value="Reclamo o sugerencia">Reclamo o sugerencia</option>
              <option value="Otro">Otro</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mensaje
            </label>
            <textarea
              name="mensaje"
              rows="5"
              value={formData.mensaje}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 resize-none"
              placeholder="Escribí tu consulta aquí..."
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full font-semibold transition-all duration-300"
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
