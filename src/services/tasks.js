import axios from "axios";

export const fetchTasks = axios.get('http://localhost:3000/tasks')
  // .then(response => response)
  // .catch(error => console.log(error))

// export const fetchTasks = axios({
//   url: 'http://localhost:3000/tasks',
//   method: "GET",
//   withCredentials: true,
//   data: { query }
// });