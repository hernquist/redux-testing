import { connect } from "react-redux";
import Tasks from "./components/DisplayTasks";
import { fetchTasks } from "actions";

const mapDispatchToProps = dispatch => ({
  fetchTasks: () => dispatch(fetchTasks())
})

const mapStateToProps = state => { 
  return ({
    tasks: state.tasks.data,
    loading: state.tasks.loading,
    error:  state.tasks.error
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks)