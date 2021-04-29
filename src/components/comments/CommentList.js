import React, { useContext, useEffect, useState } from "react"
import { CommentContext } from "./CommentProvider"
import { UserContext } from "../users/UserProvider"
import { Comment } from "./Comment"
import { useHistory } from "react-router-dom"
import "./Comment.css"

export const CommentList = () => {
    const { getUserById } = useContext(UserContext)
    const { comments, getComments } = useContext(CommentContext)
    const [userObject, setUserObject] = useState({})

    const currentUser = parseInt(localStorage.getItem("rare_user_id"))
    const history = useHistory()

    useEffect(() => {
        getUserById(currentUser)
            .then(setUserObject)
            .then(getComments)
    }, [])

    return (
        <div className="comments">
                {
                    comments.map(comment => {
                        return <Comment key={comment.id} comment={comment}/>
                    })
                }
        </div>
    )

}