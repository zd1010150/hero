import React, { Component } from 'react';
import propTypes from '../util/propTypes';

export default class Hero extends Component {
  constructor() {
    super();
    this.deleteThisHero = this.deleteThisHero.bind(this);
    this.lookDetail = this.lookDetail.bind(this);
  }
  deleteThisHero() {
    this.props.deleteHeroHandler(this.props.id);
  }
  lookDetail() {
    const id = this.props.id;
    
  }
  render() {
    return (
      <li onClick={this.lookDetail}>
        <span>{this.props.name}</span>
        <button onClick={this.deleteThisHero} id={this.props.id}>X</button>
      </li>
    );
  }
}
Hero.propTypes = {
  id: propTypes.required(propTypes.number),
  name: propTypes.required(propTypes.string),
  deleteHeroHandler: propTypes.func,
};
