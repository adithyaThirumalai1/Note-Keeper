import React from "react";

function CreateBox(props){
    return (
        <div className="createBox">
            <form>
                <input name="title" type="text" placeholder="Title" onChange={props.handleTitleChange} 
                value={props.title}/>
                <textarea name="content" rows="3" placeholder="Take a note..." onChange={props.handleContentChange} value={props.content}></textarea>
                <button onClick={props.handleClick}>Add</button>
            </form>
        </div>
    );
}

export default CreateBox;