import "./Tweet.css";
import { ChatCircle, Heart, ArrowsClockwise } from "phosphor-react";
import {Link} from 'react-router-dom'

interface TweetProps {
  content: string
}

export function Tweet(props: TweetProps) {
  return (
    <Link className="tweet" to="/status">
      <img src="https://github.com/mayckonalexandre.png" alt="" />
      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Mayckon Alexandre</strong>
          <span>@mayckon_a</span>
        </div>

        <p>
          {props.content}
        </p>
        
        <div className="tweet-content-footer">
          <button title="button">
            <ChatCircle />10
          </button>
          <button title="button">
            <ArrowsClockwise />15
          </button>
          <button title="button">
            <Heart />20
          </button>
        </div>
      </div>
    </Link>
  );
}
