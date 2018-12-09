import axios from "axios";

export const getTasks = axios.get('http://localhost:3000/tasks');
