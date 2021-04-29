import React, { useState, createContext } from "react"

export const CommentContext = createContext()

export const CommentProvider = (props) => {
    const [comments, setComments] = useState([])
    
    const getComments = () => {
        return fetch(`http://localhost:8088/comments`)
        .then(res => res.json())
        .then(setComments)
    }

    return (
        <CommentContext.Provider value={{
            comments, getComments
            }}>
                {props.children}
        </CommentContext.Provider>
    )
}