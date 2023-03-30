import React, { useState } from "react";
import NoteContext from "./noteContext";


const NoteState = (props)=>{
    const notesInitial = [
        {
          "_id": "641a88104a8a8a8788f6af77",
          "user": "6419eacd0bfwb90953f22b931",
          "title": "My title3",
          "description": "wake up early in morning",
          "tag": "personal devlop",
          "date": "2023-03-22T04:46:08.106Z",
          "__v": 0
        },
        {
          "_id": "641a88104a8ae8a8788f6af79",
          "user": "6419eacd0bfb90953f22b931",
          "title": "My title3",
          "description": "wake up early in morning",
          "tag": "personal devlop",
          "date": "2023-03-22T04:46:08.947Z",
          "__v": 0
        },
        {
          "_id": "641aw88124a8a8a8788f6af7f",
          "user": "6419eacd0bfb90953f22b931",
          "title": "My title3",
          "description": "wake up early in morning",
          "tag": "personal devlop",
          "date": "2023-03-22T04:46:10.681Z",
          "__v": 0
        },
        {
          "_id": "641a88104a8a8a8788rf6af77",
          "user": "6419eacd0bfb90953f22b931",
          "title": "My title3",
          "description": "wake up early in morning",
          "tag": "personal devlop",
          "date": "2023-03-22T04:46:08.106Z",
          "__v": 0
        },
        {
          "_id": "641a8810w4a8a8a8788f6af79",
          "user": "6419eacd0bfb90953f22b931",
          "title": "My title3",
          "description": "wake up early in morning",
          "tag": "personal devlop",
          "date": "2023-03-22T04:46:08.947Z",
          "__v": 0
        },
        {
          "_id": "641a88104a8a8a8t788f6af77",
          "user": "6419eacd0bfb90953f22b931",
          "title": "My title3",
          "description": "wake up early in morning",
          "tag": "personal devlop",
          "date": "2023-03-22T04:46:08.106Z",
          "__v": 0
        },
        {
          "_id": "641a88104a81a8a8788f6af79",
          "user": "6419eacd0bfb90953f22b931",
          "title": "My title3",
          "description": "wake up early in morning",
          "tag": "personal devlop",
          "date": "2023-03-22T04:46:08.947Z",
          "__v": 0
        },
        {
          "_id": "641a88104a8a8aw8788f6af77",
          "user": "6419eacd0bfb90953f22b931",
          "title": "My title3",
          "description": "wake up early in morning",
          "tag": "personal devlop",
          "date": "2023-03-22T04:46:08.106Z",
          "__v": 0
        },
        {
          "_id": "641a88104a8a8a8q788f6af79",
          "user": "6419eacd0bfb90953f22b931",
          "title": "My title3",
          "description": "wake up early in morning",
          "tag": "personal devlop",
          "date": "2023-03-22T04:46:08.947Z",
          "__v": 0
        },
        {
          "_id": "641a88104a8sa8a8788f6af77",
          "user": "6419eacd0bfb90953f22b931",
          "title": "My title3",
          "description": "wake up early in morning",
          "tag": "personal devlop",
          "date": "2023-03-22T04:46:08.106Z",
          "__v": 0
        },
        {
          "_id": "641a881a04a8a8a8788f6af79",
          "user": "6419eacd0bfb90953f22b931",
          "title": "My title3",
          "description": "wake up early in morning",
          "tag": "personal devlop",
          "date": "2023-03-22T04:46:08.947Z",
          "__v": 0
        },
        {
          "_id": "641a88104a8aa8a8788f6af79",
          "user": "6419eacd0bfb90953f22b931",
          "title": "My title3",
          "description": "wake up early in morning",
          "tag": "personal devlop",
          "date": "2023-03-22T04:46:08.947Z",
          "__v": 0
        }
      ]
      const [notes, setNotes] = useState(notesInitial)

      // Add a Note
      const addNote = (title, description, tag)=>{
        console.log("Adding a new note")
        //TO DO API call
        const note = {
          "_id": "641a88104sa8aa8a8788f6af79",
          "user": "6419eacd0bfb90953f22b931",
          "title": title,
          "description": description,
          "tag":tag,
          "date": "2023-03-22T04:46:08.947Z",
          "__v": 0
        };
        setNotes(notes.concat(note))    // concat returns and array where as push updates an array
      }

      // Delete a Note
      const deleteNote = (id)=>{
        console.log("Deleting a node with id" + id)
        // TO DO API call 
        const newNotes = notes.filter((note)=>{return note._id!==id})
        setNotes(newNotes)
      }
      
      // Edit a Note
      const editNote = ()=>{
        
      }


    return(
       <NoteContext.Provider value={{notes, addNote, deleteNote, editNote}}>
        {props.children}
       </NoteContext.Provider>
    )
}

export default NoteState;