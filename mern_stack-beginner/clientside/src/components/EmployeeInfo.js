import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { updateEmployee } from "../api/index";
import { Link } from 'react-router-dom';

const EmployeeInfo = ({info}) => {
    const [allFormValues, setAllFormValues] = useState({
		fullname : '',
		email : ''
    })
    const { id } = useParams();

    const changeHandler = e => {
        setAllFormValues({...allFormValues, [e.target.name]: e.target.value})

    }

    const handleUpdate = e => {
        e.preventDefault();

        console.log(allFormValues);
       updateEmployee(id, allFormValues).then(res => {
            console.log(res);
        })
    }

    useEffect(() => {
        const populate = () => {
            setAllFormValues({...allFormValues, fullname: info.fullname, email: info.email});
        }

        if(info){
            populate();
        } else {
            console.log('error');
        }
        
    }, []) // eslint-disable-line react-hooks/exhaustive-deps


    return (
        <div>
            Employee Id : {id}

            <div>
                <form>
                    <label>Name: </label>
                        <input
                        name="fullname"
                        value={allFormValues.fullname || ''}
                        onChange={changeHandler}
                        />

                        <br />
                        <br />

                        <label>email</label>
                        <input
                        name="email"
                        value={allFormValues.email || ''}
                        onChange={changeHandler}
                        />
                </form>
                <button onClick={handleUpdate} style={{marginTop:'20px'}}>Update</button>
                <Link to="/">
                    <button>Back</button>
                </Link>
                
            </div>
        </div>
    )
}

export default EmployeeInfo;
