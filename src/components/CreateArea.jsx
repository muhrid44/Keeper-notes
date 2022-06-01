import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function titleHandler(event) {
    const { name, value } = event.target;

    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  function submitButton(event) {
    props.submit(note);
    event.preventDefault();
    setNote({ title: "", content: "" });
  }

  return (
    <div>
      <form>
        <input
          onChange={titleHandler}
          value={note.title}
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={titleHandler}
          value={note.content}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitButton}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
