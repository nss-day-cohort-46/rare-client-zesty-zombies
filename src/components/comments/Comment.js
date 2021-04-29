import React, { useState, useContext, useEffect } from "react"
import { UserContext } from "../users/UserProvider"

export const Comment = ({ comment }) => {
    const currentUser = parseInt(localStorage.getItem("rare_user_id"))
    const { getUserById } = useContext(UserContext)
    const [ userObject, setUserObject ] = useState({})

    useEffect(() => { 
        getUserById(currentUser)
            .then(setUserObject)
    }, [])

    return (
        <section className="comment">
            <div className="comment_text">"{comment.content}"</div>
        </section>
    )
}