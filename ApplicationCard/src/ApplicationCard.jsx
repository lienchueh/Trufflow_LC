import React from "react";
import { Icons } from "./Icons";
import { User } from "./User";
import charmChevronsUp from "./charm-chevrons-up.svg";
import materialSymbolsCloud from "./material-symbols-cloud.svg";
import materialSymbolsMoneyBag from "./material-symbols-money-bag.svg";
import mdiUsers from "./mdi-users.svg";
import "./style.css";

export const ApplicationCard = () => {
  return (
    <div className="application-card">
      <div className="wrapper">
        <div className="content">
          <div className="name-description">
            <div className="div">
              <div className="title">
                <div className="text-wrapper">Application Name</div>
              </div>

              <div className="label">
                <div className="ellipse" />

                <div className="text-wrapper-2">Active</div>
              </div>
            </div>

            <div className="div">
              <p className="lorem-ipsum-dolor">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </p>
            </div>
          </div>

          <div className="details">
            <div className="row">
              <div className="text-wrapper-3">Owner</div>

              <div className="field-value">
                <User className="elements-user" />
                <div className="text-wrapper-4">Jane Doe</div>
              </div>
            </div>

            <div className="row">
              <div className="text-wrapper-3">Business Model</div>

              <div className="text-wrapper-5">License Plus</div>
            </div>
          </div>
        </div>

        <div className="label-tags">
          <div className="stats">
            <div className="stat">
              <img
                className="img"
                alt="Material symbols"
                src={materialSymbolsMoneyBag}
              />

              <div className="text-wrapper-6">$5k</div>
            </div>

            <div className="stat">
              <img
                className="img"
                alt="Charm chevrons up"
                src={charmChevronsUp}
              />

              <div className="div-2">1.8</div>
            </div>

            <div className="stat">
              <img className="img" alt="Mdi users" src={mdiUsers} />

              <div className="div-2">7</div>
            </div>

            <div className="stat">
              <Icons className="img" />
              <p className="div-2">
                <span className="span">10</span>

                <span className="text-wrapper-7">GB</span>
              </p>
            </div>
          </div>

          <div className="label-2">
            <img
              className="material-symbols"
              alt="Material symbols"
              src={materialSymbolsCloud}
            />

            <div className="text-wrapper-8">Cloud</div>
          </div>
        </div>
      </div>
    </div>
  );
};
