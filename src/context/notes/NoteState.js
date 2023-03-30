import React, { useState } from "react";
import NoteContext from "./noteContext";


const NoteState = (props)=>{
    const notesInitials = [
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
      const [notes, setNotes] = useState(notesInitials)

    return(
       <NoteContext.Provider value={{notes, setNotes}}>
        {props.children}
       </NoteContext.Provider>
    )
}

export default NoteState;