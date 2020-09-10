import React from 'react'
import s from './UserCard.module.scss'
import Preloader from '../Global/preloader/Preloader'
import { NavLink } from 'react-router-dom'

let Users = (props) => {

let pageCount = Math.ceil (props.usersCount / props.limit)
let pages = []

for (let i = 1; i <= pageCount; i++) {
    pages[i] = i
}

return <>
{ props.isFetched ? <Preloader/> : 
    <div>
<div className={s.paginator}>
    {pages.map( e => {
        return <span className={(props.currentlyPage === e) ? s.activePage : null} onClick={() => props.getUsers(e, props.limit)} key={e}>{e}</span>
    })}
</div>
{props.users.map ( u => {
    return (
    <div className={s.UserCard} key={u._id}>
        <div>
            <h3 >{u.public.fullname}</h3>
            <NavLink to={`/profile/${u._id}`}>
            <img src={u.public.photoUrl.small}></img>
            </NavLink>
            {u.public.followed ? <>
            <button onClick={() => props.unfollowThunk(u._id)} disabled={props.followingInProgress.some (id => id === u._id)}>unfollow</button> 
            <button onClick={() => props.onSendMessage(u._id)}>Send message</button>
            </>: 
            <button onClick={() => props.followThunk(u._id)} disabled={props.followingInProgress.some (id => id === u._id)}>follow</button>}
        </div>
    
        <div>
            <h3>Status: {u.public.status}</h3>
        </div>
    
        <div>
            <h3>{u.public.location.city}</h3>
            <h3>{u.public.location.country}</h3>
        </div>
    
    </div>
    
    )
    }
    )}
    </div>
}

    </>
}

export default Users