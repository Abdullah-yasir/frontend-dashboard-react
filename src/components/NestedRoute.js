import React from 'react';
import { Route } from 'react-router';

const NestedRoute = (props) => {
  const { children, path, component: Component } = props;
  const Handler = (props) => {
    return (
      <Component>
        {children}
      </Component>
    )
  }
  return (
    <Route path={path} component={Handler} />
  )
}


export default NestedRoute;