import React from "react";
// Profile
import { FiCalendar } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FiMapPin } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
// Hobbies
import { FaFutbol } from "react-icons/fa";
import { FaBasketballBall } from "react-icons/fa";
import { FaTableTennis } from "react-icons/fa";
import { FaSwimmer } from "react-icons/fa";
import { FaSkiing } from "react-icons/fa";
import { FaItunesNote } from "react-icons/fa";
import { FaBookReader } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Profile = () => {
  const { t } = useTranslation();
  return (
    <div className="right-side">
      <div className="main-contain">
        <label className="border-label">{t('aboutme.h')}</label>
        <div className="about-me">
          <ul>
            <li><FiCalendar className="about-me-icons"/> 18 May 1994</li>
            <li><FiPhone className="about-me-icons"/> +385 92 503 7296</li>
            <li><FiMapPin className="about-me-icons"/> Rijeka, {t('aboutme.country')}</li>
            <li><FiMail className="about-me-icons"/><a href="mailto:toni.filipovic18@gmail.com"> toni.filipovic18@gmail.com</a></li>
            <li><FaGithub className="about-me-icons"/><a href="https://github.com/filton" target="_blank" rel="noopener noreferrer"> filton</a></li>
            <li><FaSkype className="about-me-icons"/> Toni Filipovic</li>
          </ul>
          <p>{t('aboutme.p')}</p>
        </div>
      </div>
      <div className="main-contain">
        <label className="border-label">{t('languages.h')}</label>
          <div className="languages-container">
            <li>{t('languages.cro')}</li>
            <div className="languages-bar">
              <div className="languages croatian"></div>
            </div>
          </div>
          <div className="languages-container">
            <li>{t('languages.ger')}</li>
            <div className="languages-bar">
              <div className="languages german"></div>
            </div>
          </div>
          <div className="languages-container">
            <li>{t('languages.eng')}</li>
            <div className="languages-bar">
              <div className="languages english"></div>
            </div>
          </div>
        </div>
      <div className="main-contain">
        <label className="border-label">{t('hobbies.h')}</label>
        <div className="hobbies">
          <ul>
            <li><FaFutbol /></li>
            <li><FaBasketballBall /></li>
            <li><FaTableTennis /></li>
            <li><FaSwimmer /></li>
            <li><FaSkiing /></li>
            <li><FaItunesNote /></li>
            <li><FaBookReader /></li>
            <li><FaGraduationCap /></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Profile;
