import React, {useState} from 'react';
import './App.css';





const App = () => {



const [searchTerm, setSearchTerm] = useState("");
const [searchResult, setSearchResult] = useState([]);

const copyToClipboard = () => {
  const textToCopy = document.getElementById('copy').innerText;
  navigator.clipboard.writeText(textToCopy)
    .then(() => alert('Copied'))
    .catch((error) => console.error('Failed to copy:', error));
};

const HandleSearch = () =>{
  
  
const emojiData = [
  
  
  {
    id: 1,
    name: "smile",
    symbol1: "😀",
    symbol2: "😁",
    symbol3: "😂",
    symbol4: "🤣",
    symbol5: "😃",
    symbol6: "😄",
    symbol7: "😅",
    symbol8: "😆",
    symbol9: "😊",
    symbol10: "😋",
    symbol11: "😉",
    symbol12: "😎",
  },
  {
    id: 2,
    name: "love",
    symbol1: "😍",
    symbol2: "😘",
    symbol3: "🥰",
    symbol4: "🤩",
    symbol5: "💟",
    symbol6: "🧡",
    symbol7: "💛",
    symbol8: "💚",
    symbol9: "💜",
    symbol10: "💞",
    symbol11: "💝",
    symbol12: "💖",
  },
  {
    id: 3,
    name: "sad",
    symbol1: "😪",
    symbol2: "😥",
    symbol3: "😒",
    symbol4: "😫",
    symbol5: "😔",
    symbol6: "😣",
    symbol7: "😟",
    symbol8: "😕",
    symbol9: "😌",
    symbol10: "😡",
    symbol11: "🥵",
    symbol12: "🤬",
  },
  {
    id: 4,
    name: "object",
    symbol1: "🎄",
    symbol2: "🎁",
    symbol3: "🎞",
    symbol4: "👔",
    symbol5: "🎢",
    symbol6: "👙",
    symbol7: "🩳",
    symbol8: "👑",
    symbol9: "🥇",
    symbol10: "🏀",
    symbol11: "🎈",
    symbol12: "🎏",
   
  },
  
  {
    id: 5,
    name: "food",
    symbol1: "🍕",
    symbol2: "🍔",
    symbol3: "🍟",
    symbol4: "🌭",
    symbol5: "🍿",
    symbol6: "🍞",
    symbol7: "🧇",
    symbol8: "🥞",
    symbol9: "🍗",
    symbol10: "🧀",
    symbol11: "🥙",
    symbol12: "🎂"
  }
 
];



const filteredEmojis = emojiData.filter((emoji) => {
  const emojiName = emoji.name.toLocaleLowerCase();
  return searchTerm && emojiName.startsWith(searchTerm.toLowerCase());
}
);
setSearchResult(filteredEmojis);
};



  return (
    <div className="App">
      <h1>Hi! Search and copy your favourite Emojis</h1>
      <p>Search something like smiling, love, food, and objeccts 😂 </p>

      <div className='form'>
        <div className='input-container'>
        <input
      type="text"
      placeholder="Search for an emoji..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
    <button onClick={HandleSearch}>Search</button>
        </div>
  
    <div id='filter'>
      
       <li id='copy' onClick={copyToClipboard}> {searchResult.map((emoji) => emoji.symbol1)}</li>
       <li id='copy' onClick={copyToClipboard}> {searchResult.map((emoji) => emoji.symbol2)}</li>
       <li id='copy' onClick={copyToClipboard}> {searchResult.map((emoji) => emoji.symbol3)}</li>
       <li id='copy' onClick={copyToClipboard}> {searchResult.map((emoji) => emoji.symbol4)}</li>
       <li id='copy' onClick={copyToClipboard}> {searchResult.map((emoji) => emoji.symbol5)}</li>
       <li id='copy' onClick={copyToClipboard}> {searchResult.map((emoji) => emoji.symbol6)}</li>
       <li id='copy' onClick={copyToClipboard}> {searchResult.map((emoji) => emoji.symbol7)}</li>
       <li id='copy' onClick={copyToClipboard}> {searchResult.map((emoji) => emoji.symbol8)}</li>
       <li id='copy' onClick={copyToClipboard}> {searchResult.map((emoji) => emoji.symbol9)}</li>
       <li id='copy' onClick={copyToClipboard}> {searchResult.map((emoji) => emoji.symbol10)}</li>
       <li id='copy' onClick={copyToClipboard}> {searchResult.map((emoji) => emoji.symbol11)}</li>
       <li id='copy' onClick={copyToClipboard}> {searchResult.map((emoji) => emoji.symbol12)}</li>
      </div >
  </div>
  <h3>Created by Ani Emmanuel</h3>
    </div>
  );
};

export default App;
