import React, { useState } from 'react';
import ListModal from './Modules/List';

const RegisterModal = () => {
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
    console.log(formData);
    // Cierra el modal una vez que el formulario es enviado
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Registrarse</button>
      {isOpen && (
        <div>
          <div onClick={() => setIsOpen(false)}>X</div>
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                type="name"
                name="name"
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
            <label>
                Repeat Password:
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Product:   
                <input
                type="text"
                name="product"
                value={formData.product}
                onChange={handleChange}
                />
                </label>
                <br />
                  <label>
                Edficio:
                </label>
                <ListModal />
                <br />
                
            <button type="submit">Registrar</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default RegisterModal;
