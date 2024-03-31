import React, {useState} from 'react';
import './App.css';


const emojiData = [
  {
    id: 1,
    name: "smiling happy, ",
    symbol: ["😀", "😁", "😂", "🤣", "😃",  
    "😄", "😅", "😆", "😉", "😊", 
    "😋", "😎", "😍","😘","🥰","😗","😙","😚","🤗","🤩","🤔","🤨","😐","😑","😶","😶","🙄","😏","😣","😥",'😮','🤐','😪','😫','🥱','😴','😌','😛','😜','😝','🤤','😒','😓','😔','😕','🙃','🤑','😲','☹','🙁','😖','😞','😟','😤','😢','😭','😦','😧','😨','😩','🤯','😬','😰','😱','🥵','🥶','😳','🤪','😵','🥴','😠','😡','🤬','😷','🤒','🤕'],
  },

   {
    id: 2,
    name: "people",
    symbol: ['👩','👩','👨','🧑','🧑','🧑','👧','👦','🧒','👶','👵','👴','🧓','👩‍🦰','👨‍🦰','👩‍🦱','👨‍🦱','👩‍🦲','👨‍🦲','🕵️‍♀️','👮‍♂️','👼','🧔','👲','👩‍🦳','👨‍🦳','👨‍💻','👩‍💻','👩‍🎨','🧜‍♂️','🧛‍♀️','💁‍♀️',],
  },
   {
    id: 3,
    name: "objects",
    symbol: ['🎈','🎆','🎇','🧨','✨','🎉','🎊','🎃','🎄','🎋','🎍','🎎','🎏','🎐','🎑','🧧',],
  },
   {
    id: 4,
    name: "food",
    symbol: ['🍕🍔🍟🌭🍿🧂🥓🥚🥯🥨🥐🥞🧇☕🍾🌽🍏🥂🍻🍺🍹🍸🍉🍊🍋🍌🌲🌱☘🥀🌷🌻🌼🌺'],
  },

  {
    id: 5,
    name: "transportation",
    symbol: ["🚗🚓🚕🚕🚙🚌🚐🚎🚑🚒🚛🚜🚔🚖✈🪂🛩⛽🚘🚔🛰"]
  },

  {
    id: 5,
    name: "love",
    symbol: ["❤🧡💛💛💚💙💜💜🖤💖💗💓💞❣💔🤍💘💝💟💌💢💥💤💦"]
  }

];



const App = () => {



const [searchTerm, setSearchTerm] = useState("");

const HandleSearch = (e) =>{
setSearchTerm(e.target.value);
};

const HandleButtonSearch = () =>{
setSearchTerm("");
}

const filteredEmojis = emojiData.filter((emoji) => {
    const emojiName = emoji.name.toLocaleLowerCase();
    return searchTerm && emojiName.startsWith(searchTerm.toLowerCase());
});

//  setSearchTerm(filteredEmojis)


  return (
    <div className="App">
      <h1>Hi! Search and copy your favourite Emojis</h1>
      <p>Search something like smiling, love, objeccts and transportation💃🎆</p>

      <div className='form'>
    <input
      type="text"
      placeholder="Search for an emoji..."
      value={searchTerm}
      onChange={HandleSearch}
    />
    <button onClick={HandleButtonSearch}>Search</button>
    
    <div className='filter'>
       {filteredEmojis.map((emoji) => emoji.symbol)}
      </div>
  </div>
  <h3>Created by Ani Emmanuel</h3>
    </div>
  );
}

export default App;
