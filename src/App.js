import React, {
  Component
} from 'react';
import './App.css';
import Tasks from 'containers/Tasks/container';

class App extends Component {

  render() {
    return ( 
      <div className = "App" >
        <Tasks number={2}/>
      </div>
    );
  }
}

export default App;