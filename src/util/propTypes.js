import React from 'react';

const propTypes = {
  // You can declare that a prop is a specific JS primitive. By default, these
  // are all optional.
  arrayType: React.PropTypes.array,
  bool: React.PropTypes.bool,
  func: React.PropTypes.func,
  number: React.PropTypes.number,
  object: React.PropTypes.object,
  string: React.PropTypes.string,
  symbol: React.PropTypes.symbol,

  // Anything that can be rendered: numbers, strings, elements or an array
  // (or fragment) containing these types.
  node: React.PropTypes.node,

  // A React element.
  element: React.PropTypes.element,

  // You can also declare that a prop is an instance of a class. This uses
  // JS's instanceof operator.
  instanceofOneClass(_class) {
    return React.PropTypes.instanceOf(_class);
  },

  // You can ensure that your prop is limited to specific values by treating
  // it as an enum.
  oneOf(arr) {
    if (Object.prototype.toString.call(arr) === '[object Array]') {
      return React.PropTypes.oneOf(arr);
    }
    return new Error('the arguments isn`t array');
  },

  // An object that could be one of many types
  // {propType:,args:},
  oneOfType(...types) {
    const arg = [];
    for (const type of types) {
      const typeArg = type.args;
      arg.push(type.propType.call(null, typeArg));
    }
    return React.PropTypes.oneOfType(arg);
  },

  // An array of a certain type
  // propTypes.string
  arrayofOneType(arrayPropName, ...arg) {
    if (arg.length > 0) {
      return React.PropTypes.arrayOf(arrayPropName(...arg));// 注意es6中如何通过解构赋值调用函数
    }
    return React.PropTypes.arrayOf(arrayPropName);
  },

  // An object with property values of a certain type
  objectof(type) {
    return React.PropTypes.objectOf(type);
  },

  // An object taking on a particular shape
  objectwithShape(obj) {
    return React.PropTypes.shape(obj);
  },
  // A value of any data type
  required(...arg) {
    if (arg.length < 1) {
      return React.PropTypes.any.isRequired;
    } else if (arg.length === 1) {
      if (arg[0].isRequired) {
        return arg[0].isRequired;
      }
    }
    return new Error('arguments isn`t  valid,should be undefined or a proptypes.key');
  },
};

export default propTypes;
