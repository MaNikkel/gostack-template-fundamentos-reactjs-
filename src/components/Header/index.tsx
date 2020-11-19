import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import { Link, useRouteMatch } from 'react-router-dom';

import { Container, Nav } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  const { path } = useRouteMatch();
  const [active, setActive] = useState('');

  useEffect(() => {
    setActive(path);
  }, [path]);

  const dashClasses = classnames({
    active: path === '/',
  });
  const importClasses = classnames({
    active: path === '/import',
  });

  return (
    <Container size={size}>
      <header>
        <img src={Logo} alt="GoFinances" />
        <Nav>
          <Link to="/" className={dashClasses}>
            Listagem
          </Link>
          <Link to="/import" className={importClasses}>
            Importar
          </Link>
        </Nav>
      </header>
    </Container>
  );
};

export default Header;
