import axios from "axios";

export const login = async (loginCred?: {
   email?: string;
   password?: string;
}) => {
   let res = await axios.post("http://localhost:3000/signin", loginCred);
   return res.data;
};

export const addTask = async (task: {
   task: { tname: string; userId: number };
}) => {
   let res = axios.post("http://localhost:3000/addtask", task);
   return (await res).data;
};

export const getAllTask = async (userId: number) => {
   let res = await axios.get(`http://localhost:3000/getalltask/${userId}`);
   return res.data;
};

export const deleteUserTask = async (tid: number) => {
   let res = await axios.delete(`http://localhost:3000/task/${tid}`);
   return res.data;
};

export const markcompleted = async (tid: number) => {
   let res = await axios.post(`http://localhost:3000/markcompleted/${tid}`);
   return res.data;
};

export const markInCompleted = async (tid: number) => {
   let res = await axios.post(`http://localhost:3000/markincompleted/${tid}`);
   return res.data;
};

export const register = async (userData?: {
   name?: string;
   email?: string;
   password?: string;
}) => {
   let res = await axios.post("http://localhost:3000/register", userData);
   return res.data;
};
