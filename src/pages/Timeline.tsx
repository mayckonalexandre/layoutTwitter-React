import { Header } from "../components/Header";
import { Tweet } from "../components/Tweet";
import { useState, KeyboardEvent } from "react";
import "./Timeline.css";

export function Timeline() { 
  const [newTweet, setNewTweet] = useState('')
  const [tweets, setTweets] = useState(["tweet 1", "tweet 2", "tweet "]);

  function createNewTweet(event: React.FormEvent) {
    event?.preventDefault();

    setTweets([newTweet,...tweets])
    setNewTweet('')
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
      setTweets([newTweet,...tweets])
      setNewTweet('')
    }
  }

  return (
    <main className="timeline">
      <Header title="Home" />

      <form onSubmit={createNewTweet} className="new-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/mayckonalexandre.png" alt="" />
          <textarea
            id="tweet"
            placeholder="What`s happening?"
            onKeyDown={handleHotKeySubmit}
            value={newTweet}
            onChange={(event) => setNewTweet(event.target.value)}
          />
        </label>
        <button type="submit">Tweet</button>
      </form>

      <div className="separator" />

      {tweets.map((tweet) => {
        return <Tweet key={tweet} content={tweet} />;
      })}
    </main>
  );
}
