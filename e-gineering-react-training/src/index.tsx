import React from 'react';
import {render} from 'react-dom';
import App from './App';

// HTML                         vs  JSX
// class                            className
// for                              htmlFor
// inlines styles are strings       Inline styles for objects, Numbers = px

render(<App/>, document.getElementById('root'));