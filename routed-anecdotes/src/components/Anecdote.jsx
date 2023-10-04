import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const Anecdote = ({ anecdotes }) => {
  const { id } = useParams();
  const anecdote = anecdotes.find((anecdote) => anecdote.id === Number(id));

  return (
    <div>
      <h1>{anecdote.content}</h1>
      <p>has {anecdote.votes} votes</p>
    </div>
  );
};

export default Anecdote;
