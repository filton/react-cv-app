import React from "react";
import CvApp from "../images/projects/CvApp.png";
import ChatApp from "../images/projects/ChatApp.png";
import ReactToDo from "../images/projects/ReactToDoApp.png";
import Stopwatch from "../images/projects/Stopwatch.png";
import RestApi from "../images/projects/RestApi.png";
import MemoryGame from "../images/projects/MemoryGame.png";
import JSToDo from "../images/projects/JSToDo.png";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();
  return (
    <div className="right-side">
      <div className="main-contain">
        <label className="border-label">{t('projects.h')}</label>
        <div className="projects-container">
          <div className="project-one">
            <h3>React CV App</h3>
            <p>{t('projects.p')} HTML, SCSS, Javascript, React.</p>
            <img src={CvApp} alt="React CV App"></img>
            <a href="https://github.com/filton/react-cv-app.git" target="_blank" rel="noopener noreferrer">GitHub URL</a>
          </div>
          <div>
            <h3>{t('project.chatapp')}</h3>
            <p>{t('projects.p')} <br /> HTML, CSS, Javascript, React.</p>
            <img src={ChatApp} alt="Chat App"></img>
            <a href="https://github.com/filton/react-chat-app" target="_blank" rel="noopener noreferrer">GitHub URL</a>
          </div>
          <div>
            <br />
            <h3>React ToDo App</h3>
            <p>{t('projects.p')} <br /> HTML, CSS, Javascript, React.</p>
            <img src={ReactToDo} alt="React ToDo App"></img>
            <a href="https://github.com/filton/react-todo-app" target="_blank" rel="noopener noreferrer">GitHub URL</a>
          </div>
          <div>
            <h3>{t('project.stopwatch')}</h3>
            <p>{t('projects.p')} <br /> HTML, CSS, Javascript, React.</p>
            <img src={Stopwatch} alt="Stopwatch"></img>
            <a href="https://github.com/filton/react-stopwatch" target="_blank" rel="noopener noreferrer">GitHub URL</a>
          </div>
          <div>
            <h3>React REST API</h3>
            <p>{t('projects.p')} <br /> HTML, CSS, Javascript, React.</p>
            <img src={RestApi} alt="React REST Api"></img>
            <a href="https://github.com/filton/react-rest-api" target="_blank" rel="noopener noreferrer">GitHub URL</a>
          </div>
          <div>
            <h3>{t('project.memorygame')}</h3>
            <p>{t('projects.p')} <br /> HTML, CSS, Javascript.</p>
            <img src={MemoryGame} alt="Memory Game"></img>
            <a href="https://github.com/filton/memory-game" target="_blank" rel="noopener noreferrer">GitHub URL</a>
          </div>
          <div>
            <h3>Javascript ToDo App</h3>
            <p>{t('projects.p')} <br /> HTML, CSS, Javascript.</p>
            <img src={JSToDo} alt="Javascript ToDo App"></img>
            <a href="https://github.com/filton/todo-app" target="_blank" rel="noopener noreferrer">GitHub URL</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
