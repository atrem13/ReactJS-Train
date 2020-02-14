import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// import ES6
// import AppES6 from './ES6/AppES6';

// import RenderHtml
// import AppRenderHtml from './RenderHtml/AppRenderHtml';

// import RenderJSX
// import RenderJSX from './RenderJSX/AppRenderJSX';

// import Component
// import AppComponent from './Component/AppComponent';

// import Props 
// import AppProps from './Props/AppProps';

// import State
// import AppState from './State/AppState';

// import Livecycle
// import AppLivecycle from './Livecycle/AppLivecycle';

// import Event
// import AppEvent from './Event/AppEvent';

// import Form
// import AppForm from './Form/AppForm';

// import ReactCss
import AppReactCss from './ReactCss/AppReactCss';


import * as serviceWorker from './serviceWorker';

ReactDOM.render(<AppReactCss />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
