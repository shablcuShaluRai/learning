import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as ReadableApi from './utils/ReadableAPI'


class App extends React.Component {

state = {
categories:[{'path':'hello'}]
}

hello(){

  ReadableApi.getAllCategories().then(categories => {
    this.setState({ categories })
  });

}

componentDidMount(){
  ReadableApi.getAllCategories().then(categories => {
    this.setState({ categories })
  });
}

render() {

let  elms = this.state.categories.map((data, key) => <h4 key={key}>{data.path}</h4>);
return (
  <div>
  {elms}
  <button onClick={this.hello.bind(this)}>click</button>
  </div>
  );
}
}
export default App;
