import { PaperPlaneRight } from "phosphor-react";
import { useState, KeyboardEvent } from "react";
import { Header } from "../components/Header";
import { Tweet } from "../components/Tweet";
import "./Status.css";

export function Status() {
  const [newAnswers, setNewAnswers] = useState("");
  const [answers, setAnswers] = useState(["Concordo", "Faz sentido", "vait"]);

  function createNewAnswers(event: React.FormEvent) {
    event?.preventDefault();

    setAnswers([newAnswers, ...answers]);
    setNewAnswers("");
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
      setAnswers([newAnswers, ...answers]);
      setNewAnswers("");
    }
  }

  return (
    <main className="status">
      <Header title="Tweet" />

      <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis minus et odit ad, vel aliquid debitis dolore, doloribus blanditiis ullam, a possimus maiores hic id! Numquam neque quasi voluptas similique." />

      <div className="separator" />

      <form onSubmit={createNewAnswers} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/mayckonalexandre.png" alt="" />
          <textarea
            id="tweet"
            placeholder="Tweet your answer"
            onKeyDown={handleHotKeySubmit}
            value={newAnswers}
            onChange={(event) => setNewAnswers(event.target.value)}
          />
        </label>

        <button type="submit">
          <PaperPlaneRight/>
          <span>Answer</span>
        </button>
      </form>

      {answers.map((answer) => {
        return <Tweet key={answer} content={answer} />;
      })}
    </main>
  );
}
