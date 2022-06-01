import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [submits, setSubmit] = useState([]);

  function addItem(newNote) {
    setSubmit((prevValue) => {
      return [...prevValue, newNote];
    });
  }

  function deleteNotes(id) {
    setSubmit((prevValue) => {
      return prevValue.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea submit={addItem} />

      {submits.map((notes, index) => (
        <Note
          key={index}
          id={index}
          title={notes.title}
          content={notes.content}
          delete={deleteNotes}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
