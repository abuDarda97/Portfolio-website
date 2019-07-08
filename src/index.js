const React = require('react');
const ReactDOM = require('react-dom');
import './index.css';

class Hello extends React.Component {
  render() {
    return (
      <h1>Hello</h1>
    );
  }
}

ReactDOM.render(
  <Hello />,
  document.getElementById('app')
);