import axios from 'axios';

const url = 'http://localhost:4000'; 

export const fetchEmployeeList = async () => {
    const res = await axios.get(url+"/getemployees");
    return res.data;
}


export const newEmployee = async (newEmployeeObj) => {
    const res = await axios.post(url+"/newemployee", newEmployeeObj);
    return res.data;
}

export const updateEmployee = async (id, newObj) => {
    const res = await axios.post(url+"/updateemployee/"+id, newObj);

    return res.data;
}
