
import $ from 'jquery';
import React, { Component } from 'react';
import HeroList from '../component/herolist.jsx';
import AddHero from '../component/addhero.jsx';

export default class PageContainer extends Component {
  constructor() {
    super();
    this.state = {
      heros: [],
    };
    this.addHero = this.addHero.bind(this);
    this.deleteHero = this.deleteHero.bind(this);
  }
  componentDidMount() {
    $.ajax({
      url: 'data.json',
      dataType: 'json',
      cache: false,
      success: ((data) => {
        this.setState({ heros: data });
      }),
    });
  }
  deleteHero(id) {
    const heroS = this.state.heros.filter(hero => (
      hero.id !== id)
    );
    this.setState({ heros: heroS });
  }
  addHero(nameTemp) {
    const maxHero = this.state.heros.reduce((preHero, currenHero) => (
      preHero.id < currenHero.id ? currenHero : preHero
    ));
    const newHero = [{
      name: nameTemp,
      id: maxHero.id + 1,
    }];
    this.setState({
      heros: this.state.heros.concat(newHero),
    });
  }
  render() {
    return (
      <div>
        <AddHero addHero={this.addHero} />
        <HeroList heros={this.state.heros} deleteHero={this.deleteHero} />
      </div>
    );
  }
}
