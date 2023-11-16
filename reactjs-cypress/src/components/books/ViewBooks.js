import { useEffect, useState } from "react"
import UserService from "../../services/userService"
import "./books.css"
import { useHistory } from "react-router-dom"
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateData from "./UpdateBooks"
import {editUser} from "../../reduxStore/Actions/user"
import { useSelector, useDispatch } from 'react-redux'



function ViewBooks() {
    const users = useSelector((state) => state.UserReducer)
    const dispatch = useDispatch()

    const [book, getBook] = useState([])
    const [id, setId] = useState(0)


    const history = useHistory()
    const getBooksData = async () => {
        const initialData = await UserService.getBookDataList()
        getBook(initialData.data)
    }

    useEffect(() => {
        getBooksData()
    }, [])

    const onClickAddBtn = () => {
        history.push("add-books")
    }

    const onClickEditIcon = (b) => {
        console.log("b is : " ,b);
        // setEditFlag(true)
        // setEditData(b)  
        dispatch(editUser(b))
        history.push("update-books")
    }

    const onClickDeleteIcon = async (id) => {
        const initialData = await UserService.deleteList(id)
        setId(initialData.id)
    }

    useEffect(() => {
        if (id !== 0) {
            getBooksData()
        }
    }, [id])

    return (
        <>

            <div className="user-sign-in-form-signin-btn"
                onClick={() => onClickAddBtn()}
            >
                Add user
            </div>
            <table className='table1'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th style={{ paddingLeft: "40px" }}>First Name</th>
                        <th>Last_Name</th>
                        <th>Email</th>
                        <th>Delete</th>
                        <th>Edit</th>
                    </tr>
                </thead>

                <tbody className='tbody1'>
                    {
                        book.map((b) => (
                            <tr key={b.id}>
                                <td>{b.id}</td>
                                <td style={{ paddingLeft: "40px" }}>{b.first_name}</td>
                                <td>{b.last_name}</td>
                                <td>{b.email}</td>
                                <td ><DeleteIcon
                                    className="deleteIcon"
                                    onClick={() => onClickDeleteIcon(b.id)}
                                /></td>
                                <td><ModeEditOutlineIcon
                                    className="edit-icon"
                                    onClick={() => onClickEditIcon(b)}
                                />
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
                <div>
                </div>
</table>
        </>
    )
}

export default ViewBooks