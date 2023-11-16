import UserService from "../../services/userService"



import { useState } from 'react';
function AddBooks() {

    const [data, setData] = useState({
        first_name: "",
        last_name: "",
        email: "",
    })

    //on change handler
    const onChangeHandler = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };

    //onoCLick aadd book in btn
    const onClickAddBtn = async () => {
        if (data.first_name !== "" && data.last_name !== "" && data.email !== "") {
            const newData = {
                first_name: data.first_name,
                last_name: data.last_name,
                email: data.email
            }
            const initialData = await UserService.addBookList(newData)
        }
        else {
            alert("every feild is required")
        }
    }

    return (
        <>
            <div className="user-sign-in-form-wrapper-inner-right">
                <div className="user-sign-in-form-wrapper-inner-right-inner">
                    <div className="user-sign-in-form-sign-in-here">
                         Add Users
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
                    id = "onClickAddBtn"
                        onClick={() => onClickAddBtn()}
                    >
                        AddBooks
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddBooks