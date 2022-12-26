import React, { useState } from "react";
const Sea = ({searchText}) => {
    const [text,setText]=useState('')

    const handleSubmit = (e) =>{
        e.preventDefault();
        setText(text)
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
            <input type="text" placeholder="search...." onChange={(e) => setText(e.target.value)}/>
            <button type="submit">search</button>
            </form>
        </div>
    )
}

export default Sea;