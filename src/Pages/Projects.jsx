import React, { useState, useEffect } from "react";
import "./css/Projects.css";

export const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [selectedRepo, setSelectedRepo] = useState(null);
  const [openedProject, steOpenedProject] = useState(false);

  useEffect(() => {
    const fetchRepos = async () => {
      const response = await fetch(
        "https://api.github.com/users/chippest/repos"
      );
      const data = await response.json();
      const reposWithIndex = [];

      for (const repo of data) {
        const indexResponse = await fetch(
          `https://api.github.com/repos/chippest/${repo.name}/contents/index.html`
        );
        if (indexResponse.status === 200) {
          reposWithIndex.push(repo);
        }
      }

      setRepos(reposWithIndex);
    };

    fetchRepos();
  }, []);

  const handleRepoClick = (repo) => {
    setSelectedRepo(repo);
    steOpenedProject(true);
  };

  const handleReset = () => {
    setSelectedRepo(null);
  };

  return (
    <div className="projects-container">
      <div className="projects-nav">
        <section class="wrapper">
          <div class="top">Projects</div>
          <div class="bottom" aria-hidden="true">
            Projects
          </div>
        </section>
        <div className="projectList">
          {repos.map(
            (repo) =>
              repo.name != "chippest.github.io" && (
                <button
                  key={repo.id}
                  onClick={() => handleRepoClick(repo)}
                  className="repo-button"
                >
                  {repo.name}
                </button>
              )
          )}
          <button onClick={handleReset} className="reset-button">
            Reset
          </button>
        </div>
      </div>
      {openedProject && (
        <div className="projects-display">
          <button
            className="proCloseBtn"
            onClick={() => {
              steOpenedProject(false);
            }}
          >
            X
          </button>
          {selectedRepo && (
            <iframe
              src={`https://raw.githack.com/chippest/${selectedRepo.name}/main/index.html`}
              title={selectedRepo.name}
              className="project-iframe"
            ></iframe>
          )}
        </div>
      )}
    </div>
  );
};
