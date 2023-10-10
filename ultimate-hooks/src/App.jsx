import { useField, useResource } from "./hooks/index";
import "./App.css";
import { useEffect } from "react";

function App() {
  const content = useField("text");
  const name = useField("text");
  const number = useField("text");

  const [notes, notesService] = useResource("http://localhost:3001/notes");
  const [persons, personsService] = useResource(
    "http://localhost:3001/persons"
  );

  const handleNotes = (e) => {
    e.preventDefault();

    notesService.create({ content: content.inputProps.value, important: true });
    content.reset();
  };

  const handlePersons = (e) => {
    e.preventDefault();
    personsService.create({
      name: name.inputProps.value,
      number: number.inputProps.value,
    });

    name.reset();
    number.reset();
  };

  useEffect(() => {
    notesService.getAll();
    personsService.getAll();
  }, []);

  // console.log(persons);
  return (
    <>
      <div>
        <h1>Notes</h1>
        <form onSubmit={handleNotes}>
          <input {...content.inputProps} />
          <button>create</button>
        </form>
        {notes.map((n) => (
          <p key={n.id}>{n.content}</p>
        ))}
      </div>
      <div>
        <form onSubmit={handlePersons}>
          <h1>persons</h1>
          <div>
            name: <input {...name.inputProps} />
          </div>
          <div>
            number: <input {...number.inputProps} />
          </div>
          <button>create</button>
        </form>
        {persons.map((per) => (
          <p key={per.id}>
            {per.name}: {per.number}
          </p>
        ))}
      </div>
    </>
  );
}

export default App;
