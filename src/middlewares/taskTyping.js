import tv4 from "tv4";
import taskSchema from "middlewares/taskSchema"

export default ({_, getState}) => next => action => {
  next(action);
  const { tasks } = getState();
  const validate = tv4.validate(tasks, taskSchema);

  if (!validate) console.warn(tv4.validateResult(tasks, taskSchema));
}