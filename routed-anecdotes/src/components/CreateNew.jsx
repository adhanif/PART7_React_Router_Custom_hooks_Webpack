import React from "react";
import { useState } from "react";
import { useField } from "../hooks/index";

const CreateNew = ({ addNew }) => {
  const content = useField("text");
  const author = useField("text");
  const url = useField("text");

  const handleSubmit = (e) => {
    e.preventDefault();
    addNew({
      content: content.value,
      author: author.value,
      url: url.value,
      votes: 0,
    });
  };

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input {...content} />
        </div>
        <div>
          author
          <input {...author} />
        </div>
        <div>
          url for more url
          <input {...url} />
        </div>
        <button>create</button>
      </form>
    </div>
  );
};

export default CreateNew;
