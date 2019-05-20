import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import PopoverCart from '../pages/Cart/components/PopoverCart';

const Navbar: React.FC = () => {
  return (
    <Menu inverted fixed="top" size="massive">
      <Menu.Item />
      <Menu.Item>
        <NavLink exact to="/" activeStyle={{ color: 'orange' }}>
          <b>Shopping Cart</b>
        </NavLink>
      </Menu.Item>

      <Menu.Item position="right">
        <PopoverCart />
      </Menu.Item>
      <Menu.Item />
    </Menu>
  );
};

export default Navbar;
