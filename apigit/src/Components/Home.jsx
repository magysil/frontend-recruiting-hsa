import React from "react";
import "../Style/Home.css";
import { withRouter } from "react-router-dom";
import { ApigitContext } from "../Contex/ApigitProvider";

const Home = (props) => {
  const { userName, setUserName, apiGit } = React.useContext(ApigitContext);

  const gitSearch = () => {
    apiGit();
    props.history.push("/detalle");
  };

  return (
    <div className="home-container">
      <div className="homeLogo">
        <h3 className="homeLogoGit">Github</h3>
        <h3 className="homeLogoSch">Search</h3>
      </div>
      <div className="homeSearch">
        <input
          id="homeInputSearch"
          type="text"
          placeholder="ingrese Usuario"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
        />
        <button id="homeBtnSearch" onClick={() => gitSearch()}>
          <img
            className="homeImgSearch"
            src="https://i.ibb.co/4TGp9gj/lupa.png"
            alt="lupa"
            border="0"
          ></img>
        </button>
      </div>
    </div>
  );
};

export default withRouter(Home);
