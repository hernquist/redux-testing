import {
  connect
} from "react-redux";
import Tasks from "./components/Tasks";
import fetchTasks from "../../store/actions";

const mapDispatchToProps = dispatch => ({
  fetchTasks: () => dispatch(fetchTasks())
})

const mapStateToProps = state => ({
  data: state.tasks.data,
  loading: state.tasks.loading,
  error: state.tasks.error
})

export default connect(mapStateToProps, mapDispatchToProps)(Tasks)