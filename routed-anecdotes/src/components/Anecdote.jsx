import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const Anecdote = ({ anecdote }) => {
  return (
    anecdote && (
      <div>
        <h1>{anecdote.content}</h1>
        <h3>{anecdote.author}</h3>
        <h3>{anecdote.url}</h3>
        <p>has {anecdote.votes} votes</p>
      </div>
    )
  );
};

export default Anecdote;
