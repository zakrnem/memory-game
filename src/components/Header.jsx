import imgUrl from "../assets/github-svgrepo-com.svg";
import "../styles/Header.css";

function Header() {
  return (
    <>
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
    </>
  );
}

export default Header;
