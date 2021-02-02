import React, { useEffect, useState } from 'react';
import { fetchEmployeeList, newEmployee, updateEmployee } from '../api';
import { Link } from 'react-router-dom';
//import EmployeeInfo from './EmployeeInfo';
 
const EmployeeList = ( props ) => {
    //console.log(props.header);
    const initialFormState = {
        fullname : '',
        email : '',
        id: null
    }
	
	const [result, setResults] = useState([]);
	const [allFormValues, setAllFormValues] = useState(initialFormState)
    const [show, setShow] = useState(true);
    const [editForm, setEditForm] = useState(false);
    const [insertForm, setInsertForm] = useState(false);

    const fetchEmployees = () => {
        fetchEmployeeList().then(res =>{
            setResults(res.data);
        })
        additionalFunc();
    }

    const additionalFunc = () => {
        console.log('After fetching Function');
    }
	
	useEffect(() => {

        fetchEmployees(); 
    },[]) // eslint-disable-line react-hooks/exhaustive-deps

    const changeHandler = e => {
        setAllFormValues({...allFormValues, [e.target.name]: e.target.value})
    }

    const handleUpdate = e => {
        e.preventDefault();
        console.log(e);
        console.log(allFormValues);
        updateEmployee(allFormValues.id, allFormValues).then(res => {
            console.log(res);
            fetchEmployees();
            setAllFormValues(initialFormState);
        })

    }

    const handleSubmit = e => {
        e.preventDefault();

        newEmployee(allFormValues).then(res => {
            console.log(res);
            //setResults([...result, res.data]);
            fetchEmployees();
            setAllFormValues(initialFormState);
        })
    }

    const editInfo = (obj) => {
        console.log(obj);
        //editForm = true;
        
        setAllFormValues({
            fullname: obj.fullname,
            email: obj.email,
            id : obj.id
        });


        editForm ? setEditForm(false): setEditForm(true);
        insertForm ? setInsertForm(false) : setInsertForm(true);

    }

    const toggleForm = () => {
        insertForm ? setInsertForm(false) : setInsertForm(true);
        editForm ? setEditForm(false): setEditForm(true);
        setAllFormValues(initialFormState);
    }

    const renderTableHeader = props.header.map( e => {
        return (
            <td key={e.id}>{e.name}</td>
        )
    })

    const renderTableBody = result.map((e, index) => {
        return (
            <tr key={e.id}>
                <td>{e.fullname}</td>
                <td>{e.email}</td>
                <td><button onClick={()=> editInfo(e)}>Edit</button></td>
                <td>
                    <Link to={`/test/${e.id}`}>
                        <button onClick={() => {props.setEmployeeObj(e)}}>
                            View
                        </button>
                    </Link>
                </td>
                <td><button onClick={()=> props.hello()}>Hello</button></td>
            </tr>
        )
    })

    const renderTable = () => {
        return (
            <table>
                <tbody>
                    <tr>
                        {renderTableHeader}
                    </tr>
                    {renderTableBody}
                </tbody>
            </table>
        )
    }

    const hide =() => {
        show ? setShow(false) : setShow(true);
        console.log(show);
    }

    const style= {
        margin :{
            marginTop: '50px',
        }
    }
	
	
	return (
		<div>
            {result.length > 0  ? 
                <div>
                {renderTable()}
                { insertForm ? 
                    <div style={{marginTop :'20px'}}>
                        <button onClick={() => toggleForm()}>Insert Form</button>
                    </div> 
                    : 
                    <div>
                    </div> 
                
                }
                {editForm ? 
                    <div>
                        <div style={style.margin}>
                            <h4>Edit Form</h4>
                            <form>
                            <label>Name: </label>
                                <input
                                name="fullname"
                                value={allFormValues.fullname}
                                onChange={changeHandler}
                                />

                                <br />
                                <br />

                                <label>email</label>
                                <input
                                name="email"
                                value={allFormValues.email}
                                onChange={changeHandler}
                                />
                            </form>
                            <button onClick={handleUpdate} style={{marginTop:'20px'}}>Update</button>
                        </div>
                    </div> 
                    : 
                    <div>
                    <div style={style.margin}>
                            <h4>Insert Form</h4>
                            <form>
                            <label>Name: </label>
                                <input
                                name="fullname"
                                value={allFormValues.fullname}
                                onChange={changeHandler}
                                />

                                <br />
                                <br />

                                <label>email</label>
                                <input
                                name="email"
                                value={allFormValues.email}
                                onChange={changeHandler}
                                />
                            </form>
                            <button onClick={handleSubmit} style={{marginTop:'20px'}}>Submit</button>
                        </div>
                    </div>
                }

                    
                </div> 
                : 
                <div>
                    loading......
                </div>
            }

            <h4>Substitue of ngIf</h4>
            <div>Ternary Expression</div>
            {show ? <div>True</div> : <></>}
            <button onClick={hide}>Toggle</button>
			
		</div>
    )
}

export default EmployeeList;