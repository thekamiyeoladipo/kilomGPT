import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import gptLogo from "./assets/chatgpt.svg";
import addBtn from "./assets/add-30.png";
import msgIcon from "./assets/message.svg";
import home from "./assets/home.svg";
import saved from "./assets/bookmark.svg";
import rocket from "./assets/rocket.svg";
import sendBtn from "./assets/send.svg";
import userIcon from "./assets/user-icon.png";
import chatgptLogo from "./assets/chatgptLogo.svg";
import sendMessage from "./openai"; // Assuming you have a function to send messages to OpenAI
// import hamburger from "./assets/list.svg";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef();
  // Close sidebar if clicked outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setSidebarOpen(false);
      }
    }

    if (sidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarOpen]);

  return (
    <div className="App">
      {/* Hamburger Button */}
      {!sidebarOpen && (
        <button className="hamburger" onClick={() => setSidebarOpen(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            class="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </button>
      )}

      {/* Backdrop for mobile sidebar */}
      {sidebarOpen && <div className="backdrop"></div>}

      <div ref={sidebarRef} className={`sideBar ${sidebarOpen ? "open" : ""}`}>
        <div className="upperSide">
          <div className="upperSideTop">
            <img className="logo" src={gptLogo} alt="logo" />
            <span className="brand">KilomGPT</span>
          </div>
          <button className="midBtn">
            <img className="addBtn" src={addBtn} alt="" />
            New Chat
          </button>

          <div className="upperSideBottom">
            <button className="query">
              <img src={msgIcon} alt="" />
              What is coding?
            </button>
            <button className="query">
              <img src={msgIcon} alt="" />
              What is computer science?
            </button>
          </div>
        </div>
        <div className="lowerSide">
          <div className="listItems">
            <img src={home} alt="" className="listItemsImg" />
            Home
          </div>
          <div className="listItems">
            <img src={saved} alt="" className="listItemsImg" />
            Saved
          </div>
          <div className="listItems">
            <img src={rocket} alt="" className="listItemsImg" />
            Upgrade to Pro
          </div>
        </div>
      </div>

      <div className="main">
        <div className="chats">
          <div className="chat">
            <img className="chatImg" src={userIcon} alt="" />
            <p className="txt">Lorem ipsum dolor sit amet...</p>
          </div>
          <div className="chat bot">
            <img className="chatImg" src={chatgptLogo} alt="" />
            <p className="txt">
              Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Pellentesque euismod, nisi eu
              consectetur consectetur, nisl nisi consectetur nisi, euismod
              euismod nisi nisi euismod. Sed euismod, nisi eu consectetur
              consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi
              euismod. Pellentesque euismod, nisi eu consectetur consectetur,
              nisl nisi consectetur nisi, euismod euismod nisi nisi euismod. Sed
              euismod, nisi eu consectetur consectetur, nisl nisi consectetur
              nisi, euismod euismod nisi nisi euismod. Pellentesque euismod,
              nisi eu consectetur consectetur, nisl nisi consectetur nisi,
              euismod euismod nisi nisi euismod. Sed euismod, nisi eu
              consectetur consectetur, nisl nisi consectetur nisi, euismod
              euismod nisi nisi euismod.
            </p>
          </div>
        </div>

        <div className="chat-footer">
          <div className="inp">
            <input type="text" placeholder="Send a message" />
            <button className="send">
              <img src={sendBtn} alt="Send" />
            </button>
          </div>
          <p>Kamiye's GPT may produce incorrect result, don't trust her</p>
        </div>
      </div>
    </div>
  );
}

export default App;
