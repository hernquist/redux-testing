import tv4 from "tv4";
import taskSchema from "middlewares/taskSchema"

export default ({_, getState}) => next => action => {
  next(action);

  console.log(taskSchema)
  const state = getState();

  console.warn(tv4.validate(state.tasks, taskSchema))
}