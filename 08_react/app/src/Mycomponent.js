/* import React from "react";
import PropTypes from 'prop-types';

export default function Mycomponent(props) {
    const {children, name} = props
  return (
    <div>
      <h2>안녕하세요. 제 이름은 {name}입니다.</h2>
      {children}
    </div>
  );
}

Mycomponent.propTypes  = {
    name: PropTypes.string,
    children: PropTypes.string,

}

Mycomponent.defaultProps = {
  name: "기본 이름",
};
 */

import PropTypes from "prop-types";
import React, { Component } from "react";

export default class Mycomponent extends Component {
  static defaultProps = {
    name: "기본이름"
  };
  static propTypes  = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number,
  };
  render() {
    const { name, children, favoriteNumber } = this.props;
    return (
      <div>
        안녕하세요. 제 이름은 {name}입니다. <br></br>
        children 값은 {children}입니다.
        <br />
        제가 좋아하는 숫자는 {favoriteNumber}
      </div>
    );
  }
}
Mycomponent.defaultProps = {};
