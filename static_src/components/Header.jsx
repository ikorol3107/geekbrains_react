import React from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

const style = {
  display: 'inline-block',
  margin: '16px 32px 16px 0',
};

const MenuExampleSimple = () => (
  <div>
      <div id="header">
        <MenuItem primaryText="Архив" />
        <MenuItem primaryText="Избранное" />
        <MenuItem primaryText="Настройки" />
      </div>
  </div>
);

export default MenuExampleSimple;
