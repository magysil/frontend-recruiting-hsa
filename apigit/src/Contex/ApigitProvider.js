import React from "react";

export const ApigitContext = React.createContext();

const ApigitProvider = (props) => {
  const [userName, setUserName] = React.useState("");
  const [resUserGit, setResUserGit] = React.useState([]);
  const [resReposGit, setResReposGit] = React.useState([]);

  const apiGit = async () => {
    console.log("click boton");
    const data = await fetch(`https://api.github.com/users/${userName}`);
    const repos = await fetch(`https://api.github.com/users/${userName}/repos`);
    const userGit = await data.json();
    const reposGit = await repos.json();
    console.log(userGit);
    console.log(reposGit);
    setResUserGit(userGit);
    setResReposGit(reposGit);
  };

  if (resUserGit.message !== "Not Found") {
    resReposGit.sort((a, b) =>
      a.stargazers_count > b.stargazers_count
        ? -1
        : a.stargazers_count < b.stargazers_count
        ? 1
        : 0
    );
  }

  return (
    <ApigitContext.Provider
      value={{
        userName,
        setUserName,
        apiGit,
        resUserGit,
        resReposGit,
        setResUserGit,
        setResReposGit,
      }}
    >
      {props.children}
    </ApigitContext.Provider>
  );
};

export default ApigitProvider;
