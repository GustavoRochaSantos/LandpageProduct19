import React from 'react';
import { ReactComponent as Logo } from 'assets/images/logo.svg';
const Navbar: React.FC = () => {
  return (
    <nav>
      <Logo className='logo' />
      <div className='menu'>
        <div className='nav-menu-item'>Funcionalidades</div>
        <div className='nav-menu-item'>App</div>
        <div className='nav-menu-item'>Planos</div>
        <div className='nav-menu-item'>Contato</div>
      </div>
    </nav>
  );
};

export default Navbar;
