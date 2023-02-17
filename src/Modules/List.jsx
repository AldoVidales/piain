import React from 'react';

const ListModal = () => {
    const options = [
      { label: "Opción 1", value: "opcion1" },
      { label: "Opción 2", value: "opcion2" },
      { label: "Opción 3", value: "opcion3" },
    ];
  
    function handleSelect(selected) {
      console.log(`Opción seleccionada: ${selected}`);
    }
  
    return (
    
              
        <select class="form-select" aria-label="Default select example">
            
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    );
  }
  export default ListModal;
