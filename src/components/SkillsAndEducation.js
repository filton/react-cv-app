import React, { useState } from 'react';
import Reactlogo from "../images/skills/react.png";
import JSlogo from "../images/skills/javascript.png";
import CSSlogo from "../images/skills/css.png";
import HTMLlogo from "../images/skills/html.png";
import Gitlogo from "../images/skills/git.png";
import GitHublogo from "../images/skills/github.png";
import Experience from "../images/skills/Experience.jpg";
import { useTranslation } from "react-i18next";

const ReadMore = ({ children }) => {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(false);

  const text = () => {
    return (
      <>
        <h3>{t('experience.h2')}</h3>
        {expanded &&
          <div className="experience-span">
            <p>{t('experience.p1')}</p>
            <p className="experience-hp">{t('experience.p2')}</p>
              <div className="experience-p">
                <p>{t('experience.p3')}</p>
                <p>{t('experience.p4')}</p>
                <p>{t('experience.p5')}</p>
                <p>{t('experience.p6')}</p>
                <p>{t('experience.p7')}</p>
                <p>{t('experience.p8')}</p>
                <p>{t('experience.p9')}</p>
                <p>{t('experience.p10')}</p>
              </div>
            <p>{t('experience.p11')}</p>
            <p>{t('experience.p12')}</p>
            <p>{t('experience.p13')}</p>
            <p>{t('experience.p14')}</p>
          </div>
        }
      </>
    )
  };

  return (
    <div className={`experience ${expanded ? 'expanded' : 'collapsed'}`}>
      <div>
        {text()}
        {expanded 
          ? <div onClick={() => setExpanded(false)}>{t('experience.readless')}</div> 
          : <div onClick={() => setExpanded(true)}>{t('experience.readmore')}</div>
        }
      </div>
    </div> 
  );
}

const SkillsAndEducation = () => {
  const { t } = useTranslation();

  return (
    <div className="right-side">
      <div className="main-contain">
        <label className="border-label">{t('skills.h')}</label>
        <div className="skills-container">
          <div>
            <h3>React</h3>
            <img src={Reactlogo} alt="React logo"></img>
            <div className="skills-bar">
              <div className="skills react"></div>
            </div>
          </div>
          <div>
            <h3>JavaScript</h3>
            <img src={JSlogo} alt="JavaScript logo"></img>
            <div className="skills-bar">
              <div className="skills js"></div>
            </div>
          </div>
          <div>
            <h3>CSS / SCSS</h3>
            <img src={CSSlogo} alt="CSS logo"></img>
            <div className="skills-bar">
              <div className="skills css"></div>
            </div>
          </div>
          <div>
            <h3>HTML</h3>
            <img src={HTMLlogo} alt="HTML logo"></img>
            <div className="skills-bar">
              <div className="skills html"></div>
            </div>
          </div>
          <div>
            <h3>Git / GitHub</h3>
            <img src={Gitlogo} alt="Git logo"></img>
            <img src={GitHublogo} alt="GitHub logo"></img>
            <div className="skills-bar">
              <div className="skills git"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-contain">
        <label className="border-label">{t('education.h')}</label>
        <div className="education">
          <h4>{t('education.h1')}</h4>
          <h4>{t('education.h2')}</h4>
          <h4>{t('education.h3')}</h4>
        </div>
      </div>
      <div className="main-contain">
        <label className="border-label">{t('experience.h')}</label>
        <div className="experience">
          <h3>{t('experience.h1')}</h3>
          <ReadMore />
          <img src={Experience} alt="Experience"></img>
        </div>
      </div>
    </div>
  );
}

export default SkillsAndEducation;
