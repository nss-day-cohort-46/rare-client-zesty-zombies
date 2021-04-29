import React, {useContext, useEffect, useState} from "react"
import { useHistory, useParams } from 'react-router-dom';
import { CategoryContext } from "./CategoryProvider"
import "./Category.css"

export const Category = ( { category } ) => {

    const { deleteCategory, getCategoryById } = useContext(CategoryContext)
    const [categories, setCategories] = useState({})

    const history = useHistory();
    const {categoryId} = useParams();

    const handleDelete = () => {
        deleteCategory(category.id)
          .then(() => {
            history.push("/categories")
          })
      }

    useEffect(() => {
        
        getCategoryById(categoryId)
        .then((response) => {
          setCategories(response)
        })
        }, [])

    return (
        <section className="category">
            <h4 className="category__label">{ category.label }</h4>
            <button classname="edit__button" onClick={() => {
                history.push(`/categories/edit/${category.id}`)
                }}>Edit
            </button>
            <button classname="delete__button" onClick={handleDelete}>Remove</button>
        </section>
    )
}