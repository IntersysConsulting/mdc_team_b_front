import React from 'react';
import Dropdown from './dropdown.jsx';

const DropdownDemo = () => {
  const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const weird = 3;
  const weird2 = 'weirdoption';
  const weird3 = null;
  return (
    <div>
      <h2>Dropdown</h2>
      <div className='dropdown-container'>
        <p>Array de Meses</p>
        <Dropdown id={'month'} options={months}/>
      </div>
      <div className='dropdown-container'>
        <p>Array de Numeros</p>
        <Dropdown options={numbers}/>
      </div>
      <div className='dropdown-container'>
        <p>Numero (invalido)</p>
        <Dropdown options={weird}/>
      </div>
      <div className='dropdown-container'>
        <p>string (invalido)</p>
        <Dropdown options={weird2}/>
      </div>
      <div className='dropdown-container'>
        <p>null (invalido)</p>
        <Dropdown options={weird3}/>
      </div>
      <div className='dropdown-container'>
        <p>Sin parametro</p>
        <Dropdown />
      </div>
    </div>
  );
};

export default DropdownDemo;
