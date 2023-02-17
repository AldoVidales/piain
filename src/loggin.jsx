import React, { useState } from 'react';
import getNameLoggin from './scripts/loggin.js';

const LoginModal = () => {
  // State para controlar si el modal está abierto o cerrado
  const [isOpen, setIsOpen] = useState(false);

  // State para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    name: '',
    password: ''
  });

  // Función para manejar los cambios en los campos del formulario
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
   
  }

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Envía los datos del formulario a tu backend para la autenticación
    console.log(formData.name);
    getNameLoggin(formData);
    
    // Cierra el modal una vez que el formulario es enviado
    
    setIsOpen(false);


  }

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Iniciar Sesión</button>
      {isOpen && (
        <div>
          <div onClick={() => setIsOpen(false)}>X</div>
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                type="name"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Password:
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </label>
            <br />
            <button type="submit"  >Enviar </button>
            
          </form>
        </div>
      )}
    </div>
  );
}

export default LoginModal;