import React from 'react';
import { NavLink } from 'react-router-dom';

const ListItem = ({ planet }) => {
  return (
    <NavLink to={`/${planet.title}`}>{planet.title}</NavLink>
  )
}

export default ListItem;