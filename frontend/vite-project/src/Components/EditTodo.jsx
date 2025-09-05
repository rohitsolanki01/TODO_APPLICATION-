import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { toast } from 'react-toastify';

const EditTodo = () => {

    const [title, setTitle] = React.useState("");
    const [description, setDescription] = React.useState("");   

    const handleSubmit = (e) => {
        e.preventDefault();
        useEffect( (id) => {
            axios.put(`http://localhost:8080/api/todo/${id}`).then( (res) => {
                console.log(res.data)
                toast.success("Todo updated ✅");
            }).catch( (e) => {
                toast.error(e.response.data.message || "Failed to update todo ❌"); 
            });
        })
    }
    return (
        <>
            <div>EditTodo</div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Title"  onChange={(e) => setTitle(e.target.value)}/>
                <textarea placeholder="Description" onChange={(e) => setDescription(e.target.value)}></textarea>
                <button type="submit"  onClick={handleSubmit}>Save</button>
            </form>
        </>
    )
}

export default EditTodo