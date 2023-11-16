import UserService from "../../services/userService"

import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom";
import { useEffect, useState } from 'react';
function UpdateData(props) {

    const users = useSelector((state) => state.UserReducer)
    const history = useHistory()
    const [data, setData] = useState({
        first_name: "",
        last_name: "",
        email: "",
    })

    const {user} = users

    //on change handler
    const onChangeHandler = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };

    //onoCLick aadd book in btn
    const onClickAddBtn = async () => {
        console.log("onClickAddBtn");
        if (data.first_name !== "" && data.last_name !== "" && data.email !== "") {
            const id = data.id
            const newData = {
                first_name: data.first_name,
                last_name: data.last_name,
                email: data.email
            }
            console.log("newData is : " ,newData);
            const initialData = await UserService.updateBookList(id , newData)
            console.log("initialData : " , initialData);
            history.push('/')
        }
        else {
            alert("every feild is required")
        }
    }

    useEffect(() => {
        setData(user)
    },[])

    console.log("data is : " ,data);

    return (
        <>
            <div className="user-sign-in-form-wrapper-inner-right">
                <div className="user-sign-in-form-wrapper-inner-right-inner">
                    <div className="user-sign-in-form-sign-in-here">
                         Update Users
                    </div>
                    <div>
                        First name
                    </div>
                    <div className="user-sign-in-form-name">
                        <input
                         name="first_name"
                          type="text"
                          value={data.first_name}
                          onChange={onChangeHandler}
                          style = {{height:"40px",width:"500px"}} />
                    </div>

                    <div>
                        last name
                    </div>
                    <div className="user-sign-in-form-name">
                        <input
                          type="text"
                          name="last_name"
                          value={data.last_name}
                          onChange={onChangeHandler}
                          style = {{height:"40px",width:"500px"}} />
                    </div>

                    <div>
                        email
                    </div>
                    <div className="user-sign-in-form-name">
                        <input
                          type="text"
                          name="email"
                          value={data.email}
                          onChange={onChangeHandler}
                          style = {{height:"40px",width:"500px"}} />
                    </div>

                    <div className="user-sign-in-form-signin-btn"
                    id = "updatebtn"
                        onClick={() => onClickAddBtn()}
                    >
                        UpdateUsers
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpdateData