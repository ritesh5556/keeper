import React, { useDebugValue, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    const [notes, setNotes] = useState([])
    function addNote(newNote){
        setNotes( preValue =>{
           return [...preValue, newNote]
    
        });
        

    }
    function deleteNote(id){
        setNotes( preValue =>{
            return preValue.filter((items, index) =>{
                return index != id;
            })
        })
        
    }

  return (
    <div>
      <Header />
      <CreateArea
       add={addNote} />
       {notes.map( (noteItem, index) => {
        return <Note 
        title={noteItem.title}
         content={noteItem.content}
         key={index}
         id = {index}
         onClick={deleteNote}
           />
       })}
     
      <Footer />
    </div>
  );
}

export default App;
