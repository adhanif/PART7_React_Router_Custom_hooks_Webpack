import "./App.css";
import { Routes, Route, useNavigate, useMatch } from "react-router-dom";
import { useState } from "react";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import AnecdoteList from "./components/AnecdoteList";
import About from "./components/About";
import CreateNew from "./components/CreateNew";
import Anecdote from "./components/Anecdote";
import Notification from "../src/components/Notification";


function App() {
  const [anecdotes, setAnecdotes] = useState([
    {
      content: "If it hurts, do it more often",
      author: "Jez Humble",
      info: "https://martinfowler.com/bliki/FrequencyReducesDifficulty.html",
      votes: 0,
      id: 1,
    },
    {
      content: "Premature optimization is the root of all evil",
      author: "Donald Knuth",
      info: "http://wiki.c2.com/?PrematureOptimization",
      votes: 0,
      id: 2,
    },
  ]);
  const navigate = useNavigate();
  const [message, setMessage] = useState(null);

  const match = useMatch("/:id");
  const anecdote = match
    ? anecdotes.find((anecdote) => anecdote.id === Number(match.params.id))
    : null;

  const addNew = (anecdote) => {
    anecdote.id = Math.round(Math.random() * 10000);
    setAnecdotes(anecdotes.concat(anecdote));
    navigate("/");
    setMessage(`a new anecdote "${anecdote.content}" created`);
    setTimeout(() => {
      setMessage(null);
    }, 3000);
  };

  return (
    <>
      <Menu />
      <h1>Software anecdotes</h1>
      {message ? <Notification message={message} /> : null}
      <Routes>
        <Route path="/" element={<AnecdoteList anecdotes={anecdotes} />} />
        <Route path="/:id" element={<Anecdote anecdote={anecdote} />} />
        <Route path="/create" element={<CreateNew addNew={addNew} />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
