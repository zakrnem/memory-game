import imgUrl from "../assets/github-svgrepo-com.svg";
import "../styles/Header.css";
import Score from "./Score";

function Header({ score, bestScore }) {
  return (
    <header>
      <div className="title-logo">
        <h1>Memory game</h1>
        <a
          href="https://github.com/zakrnem/"
          title="Zakrnem's Github"
          target="_blank"
          rel="noreferrer"
        >
          <img src={imgUrl} className="gh-logo" />
        </a>
      </div>
      <Score score={score} bestScore={bestScore} />
    </header>
  );
}

export default Header;
