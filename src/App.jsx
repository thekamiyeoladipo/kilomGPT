import './App.css';
import gptLogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg';
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';
import sendBtn from './assets/send.svg';
import userIcon from './assets/user-icon.png';
import chatgptLogo from './assets/chatgptLogo.svg';

function App() {
  return (
    <div className="App">
      <div className="sideBar">
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
              <img className="" src={msgIcon} alt="" />
              What is coding?
            </button>
            <button className="query">
              <img className="" src={msgIcon} alt="" />
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
            <img src={userIcon} alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="chat">
            <img src={chatgptLogo} alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="chat-footer">
          <div className="imp">
            <input type="text" placeholder="Send a message" />
            <button className="send">
              <img src={sendBtn} alt="Send" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
