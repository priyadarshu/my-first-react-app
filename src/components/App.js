import React, { Component } from 'react'
import Comp from "./Comp/Comp"
class App extends Component {

  state={
    Value:""
  };
  setValue= Value=>this.setState({
    Value
  });
  render() {
    return (
      <div className="App">
       <div className="container my-5">
         <div className="row">
           <div className="col-6 offset-3">

            <h1>Connected Components</h1>
            <Comp Title="Component 1" SubTitle="This is Component 1" Value={this.state.Value} setValue={this.setValue}/>
            <pre></pre>
            <Comp Title="Component 2" SubTitle="This is Component 2" Value={this.state.Value} setValue={this.setValue}/>
            
            <pre className="my-3 border rounded p-3">{JSON.stringify(this.state,null,2)}</pre>
           </div>
         </div>
       </div>
        
      </div>
    )
  }
}
export default App;