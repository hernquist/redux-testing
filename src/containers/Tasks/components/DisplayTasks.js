import React from 'react'
import ShowTask from './ShowTask';


export default class DisplayTasks extends React.Component {
  componentDidMount() {
    this.props.fetchTasks();
  }

  render() {
    const { tasks = [] }  = this.props; 
    return ( 
      <div >
        TASKS
        {tasks.map(task => <ShowTask key={task.id} task={task} />)}
      </div>
    )
  }
}