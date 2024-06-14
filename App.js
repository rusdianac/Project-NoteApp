import React, { useState } from "react";
import Home from "./src/screens/home";
import AddNote from "./src/screens/addNote";
import EditNote from "./src/screens/editNote";

const CurrentPageWidget = ({ currentPage, noteList, setCurrentPage, addNote, deleteNote, editNote }) => {
  switch (currentPage.page) {
    case "home":
      return <Home noteList={noteList} setCurrentPage={setCurrentPage} deleteNote={deleteNote} />;
    case "add":
      return <AddNote setCurrentPage={setCurrentPage} addNote={addNote} />;
    case "edit":
      return <EditNote note={currentPage.note} setCurrentPage={setCurrentPage} editNote={editNote} />;
    default:
      return <Home setCurrentPage={setCurrentPage} noteList={noteList} deleteNote={deleteNote} />;
  }
};

const App = () => {
  const [currentPage, setCurrentPage] = useState({ page: "home" });
  const [noteList, setNoteList] = useState([
    {
      id: 1,
      title: "Note pertama",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
      createdAt: new Date().toLocaleString(),
      updatedAt: new Date().toLocaleString(),
    },
  ]);

  const addNote = (title, desc) => {
    const id = noteList.length > 0 ? noteList[noteList.length - 1].id + 1 : 1;
    const now = new Date().toLocaleString();
    setNoteList([
      ...noteList,
      {
        id,
        title: title,
        desc: desc,
        createdAt: now,
        updatedAt: now,
      },
    ]);
  };

  const deleteNote = (id) => {
    setNoteList(noteList.filter((note) => note.id !== id));
  };

  const editNote = (id, title, desc) => {
    const now = new Date().toLocaleString();
    setNoteList(noteList.map((note) => (note.id === id ? { ...note, title, desc, updatedAt: now } : note)));
  };

  return <CurrentPageWidget currentPage={currentPage} noteList={noteList} setCurrentPage={setCurrentPage} addNote={addNote} deleteNote={deleteNote} editNote={editNote} />;
};

export default App;
