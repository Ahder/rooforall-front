import React, { Component } from 'react';
import MenuItem from '../menu-item/menu-item.component';
import { descriptions } from '../../data/descriptions';
import './directroy.styles.css';
class Directory extends Component {
  state = {
    sections: descriptions,
  };

  render() {
    const { sections } = this.state;
    return (
      <div className="directory-menu">
        {descriptions.map(({ image, title, description, percent }) => {
          return (
            <MenuItem title={title} imageUrl={image} description={description} percent={percent} />
          );
        })}
      </div>
    );
  }
}

export default Directory;
