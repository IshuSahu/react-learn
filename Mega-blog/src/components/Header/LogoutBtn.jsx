import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/configService'
import { logout } from '../../store/authSlice'
function LogoutBtn() {

    const dispatch = useDispatch()
    const logoutHandler = () => {
        // its ans promise
        authService.logout().then(() => {
            dispatch(logout()) // to keep the updated status on store
        })
    }
    return (
        <button
            className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
            onClick={logoutHandler}
        >Logout</button>
    )
}

export default LogoutBtn