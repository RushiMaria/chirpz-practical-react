import React from "react";
import "./chirpz.css";

import verified from "../../images/verified.png";

interface ChirpzProps {
  userName: string;
  tags: string[];
  caption: string;
  tick: boolean;
}

export const Chirpz: React.FC<ChirpzProps> = ({
  userName,
  tags,
  caption,
  tick,
}) => {
  return (
    <div className="card">
      <div className="content">
        <p className="heading">
          {userName}
          {tick ? <img src={verified} alt="verified" /> : ""}
        </p>
        <p className="para">{caption}</p>
        <div className="tags">
          {tags?.length > 0 &&
            tags?.map((tag) => {
              return (
                <p className="btn" key={tag}>
                  {tag}
                </p>
              );
            })}
        </div>
      </div>
    </div>
  );
};
