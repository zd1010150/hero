import React, { Component } from 'react';
import Hero from './hero.jsx';
import propTypes from '../util/propTypes';

export default class HeroList extends Component {
  constructor() {
    super();
  }
  deleteHero(id) {
    this.props.deleteHero(id);
  }
  render() {
    const herosNode = this.props.heros.map(h => (
      <Hero id={h.id} name={h.name} key={h.id} deleteHeroHandler={this.deleteHero} />
    ));
    return (
      <ul className="hero-list">
        {herosNode}
      </ul>
  );
  }
}
HeroList.propTypes = {
  deleteHero: propTypes.func,
  heros: propTypes.arrayType,
};
