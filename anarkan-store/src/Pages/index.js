import React from 'react';
import { FaSwimmer, FaUmbrellaBeach } from 'react-icons/fa';
import { BiSun } from 'react-icons/bi';
import { GiPalmTree, GiSharkFin } from 'react-icons/gi';
import beach from '../images/wall_beach1.jpg';
import './style.css';
//import "./index.scss";

const Home = () => {
  return (
    <div className="main--home">
      <div className="home--first">
        
        <div className="home--sec">
          <h1>Welcome to Anarchaik !</h1>
          <h3>Let your dreams come true&nbsp;<BiSun /></h3>
        </div>

        <div className="beach--img">
          <img src={beach} alt="beach" />
        </div>

        <div className="home--third">
          <article>
            <h3>History&nbsp;<FaUmbrellaBeach /></h3>
            <p>
            Last week we found special features for you !
            Last week we found special features for you !
            Last week we found special features for you !
            Last week we found special features for you !
            Last week we found special features for you !
            Last week we found special features for you !
            Last week we found special features for you !
            </p>
            <p>
            Last week we found special features for you !
            Last week we found special features for you !
            Last week we found special features for you !
            Last week we found special features for you !<br />
            Last week we found special features for you !
            Last week we found special features for you !
            Last week we found special features for you !
            </p>

          </article>
        </div>

        <div className="home--third">
          <article>
            <h3>Our Work&nbsp;<GiPalmTree /></h3>
            <p>
            Last week we found special features for you !
            Last week we found special features for you !
            Last week we found special features for you !
            Last week we found special features for you !
            Last week we found special features for you !
            Last week we found special features for you !
            Last week we found special features for you
            </p>
            <p>
            Last week we found special features for you !
            Last week we found special features for you !
            Last week we found special features for you !
            Last week we found special features for you<br />
            Last week we found special features for you !
            Last week we found special features for you !
            </p>

          </article>
        </div>

        <div className="home--third">
          <article>
            <h3>Yes we can !&nbsp;&nbsp;
              <FaSwimmer />&nbsp;&nbsp;
              <GiSharkFin />
            </h3>
            <p>
            Last week we found special features for you !
            Last week we found special features for you !
            Last week we found special features for you !
            Last week we found special features for you !
            Last week we found special features for you !
            Last week we found special features for you !
            Last week we found special features for you !
            </p>
            <p>
            Last week we found special features for you !
            Last week we found special features for you !
            Last week we found special features for you !
            Last week we found special features for you !<br />
            Last week we found special features for you !
            </p>

          </article>
        </div>
      </div>
    </div>
  );
};

export default Home;

/*
      <footer>
        <nav id="footer--nav">
          <ul>
            <li>
              <a href="#">
                Panier (PayPal)
              </a>
            </li>
            <li>
              <a href="#">
                Photo-Boutique
              </a>
            </li>
            <li>
              <a href="#">
                Ours Partners
              </a>
            </li>
          </ul>
        </nav>
      </footer>
*/