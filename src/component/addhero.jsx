import React, { Component } from 'react';
import propTypes from '../util/propTypes';


export default class AddHero extends Component {
  constructor() {
    super();
    this.addHero = this.addHero.bind(this);
  }
  addHero() {
    this.props.addHero(this.heroNameInput.value);
    this.heroNameInput.value = '';
  }
  render() {
    return (
      <div>
        <span>input the name:</span>
        <input type="text" ref={(heroNameInput) => { this.heroNameInput = heroNameInput; }} />
        <button onClick={this.addHero}>click add a new hero</button>
      </div>
    );
  }
}
AddHero.propTypes = {
  addHero: propTypes.func,
};
