// import React from 'react'
// import UserContext from '../context/UserContext'
// import { useContext } from 'react'

// function Profile() {
//     const { user } = useContext(UserContext)
//     if (!user) return <div>Please Login</div>
//     return <div>Welcome {user.userName}</div>
// }

// export default Profile


import React from 'react'
import UserContext, { UserContextHook } from '../context/UserContext'
import { useContext } from 'react'

function Profile() {
    const { user } = UserContextHook(UserContext)
    if (!user) return <div>Please Login</div>
    return <div>Welcome {user.userName}</div>
}

export default Profile