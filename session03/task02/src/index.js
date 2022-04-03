import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './Profile';

function App() {
  return (
      <Profile name="Amal" bio="Blackcodher student" />
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

