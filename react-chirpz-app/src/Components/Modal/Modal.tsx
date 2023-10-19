import React, { useState } from "react";
import { getChirpzData, postChirpzData } from "../../Redux/Action";
import "./Modal.css";
import cross from "../../images/cross.svg";

interface ModalProps {
  setOpenModal: (value: boolean) => void;
}

export const Modal: React.FC<ModalProps> = ({ setOpenModal }) => {
  const [caption, setCaption] = useState<string>("");
  const [arr, setArr] = useState<string[]>([]);
  const [tags, setTags] = useState<string>("");
  const [userName, setUserName] = useState<string>("");

  const apiCall = () => {
    let data = {
      userName,
      caption,
      tags: arr,
      createdAt: new Date().toISOString(),
      isVerified: userName.length % 2 === 0,
      comments: [],
    };
    console.log(userName, caption, tags);
    if (userName.length > 0 && caption.length > 0 && arr.length > 0) {
      postChirpzData(data);
      setOpenModal(false);
      getChirpzData();
    }
  };

  const handleClickAddBtn = () => {
    if (tags.length > 0) {
      let str = `#${tags}`;
      let arr2 = [...arr];
      arr2.push(str);
      setArr(arr2);
      setTags("");
    }
  };

  const handleChangeAddBtn = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTags(e.target.value);
  };

  return (
    <div className="modal-background">
      <div className="modal-popup">
        <div className="modal-heading">
          <h3>
            Create <span> Chirps</span>
          </h3>
          <img src={cross} alt="cross" onClick={() => setOpenModal(false)} />
        </div>
        <div>
          <div className="input-group">
            <label>Name</label>
            <input
              style={{ color: "white" }}
              type="text"
              placeholder="Username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Create</label>
            <input
              style={{ color: "white" }}
              type="text"
              placeholder="What's on your mind?"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
            />
          </div>
          <div className="input-group tags">
            <label>Add Tags</label>
            <input
              style={{ color: "white" }}
              type="text"
              placeholder="Write Tags"
              value={tags}
              onChange={(e) => handleChangeAddBtn(e)}
            />
            <button onClick={() => handleClickAddBtn()}>Add</button>
          </div>
          <div className="bottom-tags">
            {arr?.map((ar, index) => {
              return <span key={index}>{ar}</span>;
            })}
          </div>
          <div className="modal-bottom-button-group">
            <div>
              <button className="modal-create-btn" onClick={() => apiCall()}>
                Create
              </button>
              <button
                className="modal-cancel-btn"
                onClick={() => setOpenModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
