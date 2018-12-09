import React, {
  Component
} from 'react'


export default class Tasks extends Component {
  componentDidMount() {
    this.props.fetchTasks();
  }
  render() {
    return ( <
      div >

      <
      /div>
    )
  }
}