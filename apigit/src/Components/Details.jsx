import React from "react";
import "../Style/Details.css";
import { ApigitContext } from "../Contex/ApigitProvider";
import NotFound from "./NotFound";

const Details = () => {
  const {
    userName,
    setUserName,
    apiGit,
    resUserGit,
    resReposGit,
    setResUserGit,
    setResReposGit,
  } = React.useContext(ApigitContext);
  let totalST = 0;
  const search = () => {
    apiGit();
    if (resUserGit.message === "Not Found") {
      setResUserGit([]);
      setResReposGit([]);
    }
  };

  const counterStar = () => {
    resReposGit.map((item) => {
      return (totalST += item.stargazers_count);
    });
  };

  if (resUserGit.message !== "Not Found") {
    counterStar();
  }

  return (
    <>
      <div className="details-container">
        <div className="logo">
          <h3 className="logoGit">Github</h3>
          <h3 className="logoSch">Search</h3>
        </div>
        <div className="search">
          <input
            id="inputSearch"
            type="text"
            placeholder="ingrese Usuario"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
          />
          <button id="btnSearch" onClick={() => search()}>
            <img
              className="imgSearch"
              src="https://i.ibb.co/4TGp9gj/lupa.png"
              alt="lupa"
              border="0"
            ></img>
          </button>
        </div>

        {resUserGit.message === "Not Found" ? (
          <NotFound />
        ) : (
          <>
            <div className="userprofile">
              <div className="avatar">
                <a target="blank" href={resUserGit.html_url}>
                  <img
                    src={resUserGit.avatar_url}
                    className="imgavatar"
                    alt="avatar"
                  />
                </a>
              </div>
              <div className="name">
                <a target="blank" href={resUserGit.html_url}>
                  <p>{resUserGit.name}</p>
                </a>
              </div>
              <div className="login">
                <p>{resUserGit.login}</p>
              </div>
              <div className="bio">
                <img
                  className="reposGit-imgStart"
                  src="https://i.ibb.co/xMt1YtV/organization-icon.png"
                  alt="organization"
                />
                <p>{resUserGit.bio}</p>
              </div>
              <div className="email">
                <img
                  className="reposGit-imgStart"
                  src="https://i.ibb.co/pRQdSSf/location-icon.png"
                  alt="location"
                />
                <p>{resUserGit.email}</p>
              </div>
              <div className="star">
                <img
                  className="reposGit-imgStart"
                  src="https://i.ibb.co/NxcVSd1/star-icon.png"
                  alt="Star"
                />
                <p>{totalST}</p>
              </div>
              <div className="rep_public">
                <img
                  className="reposGit-imgStart"
                  src="https://i.ibb.co/g7Q4yyJ/repositorie-icon.png"
                  alt="repositorie"
                />
                <p>{resUserGit.public_repos}</p>
              </div>

              <div className="fallowers">
                <img
                  className="reposGit-imgStart"
                  src="https://i.ibb.co/Yk817cq/followers-icon.png"
                  alt="followers"
                />
                <p>{resUserGit.followers}</p>
              </div>
            </div>
            <div className="repository">
              {resReposGit.map((item) => (
                <div key={item.id} className="reposGit">
                  <a target="blank" className="repos-name" href={item.html_url}>
                    <h6 className="reposGit-name">{item.name}</h6>
                  </a>
                  <p className="reposGit-description">{item.description}</p>
                  <div className="reposGit-stars">
                    <img
                      className="repos-imgStart"
                      src="https://i.ibb.co/NxcVSd1/star-icon.png"
                      alt="Star"
                    />
                    <p className="reposGit-allStart">{item.stargazers_count}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Details;
