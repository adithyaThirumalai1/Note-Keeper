import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
//import notes from "../sample";
import CreateBox from './CreateBox';

// Function to render all the existing notes
function createNote(note){
    return (
        <Note 
        key={note.key}
        title={note.title}
        content={note.content} />
    );
}

function App(){
    
    // Function to handle change in title
    const [title,setTitle]=useState("");

    function handleTitleChange(event){
        const val=event.target.value;
        console.log(val);
        setTitle(val);
    }

    // Function to handle change in content
    const [content,setContent]=useState("");

    function handleContentChange(event){
        const val=event.target.value;
        console.log(val);
        setContent(val);
    }

    const [notes,setNotes]=useState([]);
    // Function to handle submit button
    function handleClick(event){
        // Create a new note obj
        const newNote={title:title,content:content};
        // Append it to the array of notes
        setNotes((prevNotes)=>{
            return [...prevNotes,newNote];
        })
        // Clear the input area
        setContent("");
        setTitle("");
        event.preventDefault();
    }

    function handleDelete(id){
        setNotes((prevNotes)=>{
            return prevNotes.filter((noteItem,index)=>{
                return index!==id;
            })
        })
    }
    
    return (
        <div>
            <Header/>
            
            <CreateBox handleTitleChange={handleTitleChange} title={title} 
            handleContentChange={handleContentChange} content={content}
            handleClick={handleClick}/>
            
            {notes.map((note,index)=>{
                return <Note key={index} id={index} title={note.title} content={note.content} 
                handleDelete={handleDelete}/>
            })}
            <Footer />
        </div>
    )        
}

export default App;