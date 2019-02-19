import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Gameboard from './components/Gameboard/Gameboard.js';
import AvatarChoices from './components/AvatarChoices/AvatarChoices.js';
import hponbroom from './imgs/hponbroom.png';
import griffindoravatar from './imgs/Gryffindorcrest.png';
import slytherinavatar from './imgs/Slytherin_Crest.png';

class App extends Component {

  constructor(){
    super()
    this.state={
        currentplayer: "Player 1's Turn",
        player: "player1",
        p1status: "go",
        p2status: "go",
        player1: 1, 
        player2: 1, 
        player1dice: 0, 
        player2dice: 0,
        gameover: false, 
        testvalue: "What?",
        player1avatar: griffindoravatar,
        player2avatar: slytherinavatar, 
        avatar1choice: false, 
        avatar2choice: false,
        avatar1: "", 
        avatar2: ""
    }
  }

onRollDice = () => {
let value  = Math.floor(Math.random() * 4) +1;
if(this.state.player==="player1"){ 
  this.setState({player1dice: value});}else{
  this.setState({player2dice: value});
}
return(value);
}

onBothLoseTurn = (value)=>{
  setTimeout (()=>{
    if (this.state.player1===value && this.state.player2===value){
    console.warn("ON BOTH LOOSE TURN WORKING???????????????????????????????????????");
    }

  }, 2000);
  
}


onAvatarChange1 = (avatarchoice, avatarname)=>{
  window.confirm(`Player 1, are you sure you want to pick ${avatarname}?`);
  this.setState({player1avatar: avatarchoice, avatar1choice: true, avatar1: avatarname})
}

onAvatarChange2 = (avatarchoice, avatarname)=>{
  window.confirm(`Player 2, are you sure you want to pick ${avatarname}?`);
  this.setState({player2avatar: avatarchoice, avatar2choice: true, avatar2: avatarname})
}


onLooseTurn = ()=>{

    if ((this.state.player1===10||this.state.player1===19) && this.state.p1status==="go"){
      this.setState({p1status: "nogo"});
      window.alert("Player 1 Losses a Turn");
      console.log("Player 1 Losses a Turn", "Player 1 after this.setState", this.state.p1status);
      // set up as a switch instead I guess?
    }else if ((this.state.player2===10|this.state.player2===19) && this.state.p2status==="go"){
      this.setState({p2status: "nogo"});
      window.alert("Player 2 Losses a Turn");
      console.log("Player 2 Losses a Turn", "Player 2 after this.setState", this.state.p2status);
    }

  }

onBothLoseTurn = ()=>{
  if (this.state.p1status==="lose1" && this.state.p2status==="nogo"){
    this.setState({p1status:"go", p2status: "lose1", player:"player1"})
  }else if (this.state.p2status==="lose1" && this.state.p1status==="nogo"){
    this.setState({p2status:"go", p1status: "lose1", player:"player2"})
  }
}

onPlayerMove= (input, currentnumber, negativenumber)=> {
  console.log("Player: ", this.state.player)
 switch (this.state.gameover===false){

 // Player 1
 // Case 1 is normal move with a status of go and used for second turn after other player loses a turn
  case this.state.player==="player1" && this.state.p1status==="go" && (this.state.p2status==="go"||this.state.p2status==="lose1"):
  console.log("Player 1 Case 1");
    this.setState({
      player1: this.state.player1+this.onRollDice(), 
      player: "player2", 
      currentplayer: "Player 2's Turn"
    })
    console.log("p1 status: ", this.state.p1status, "p2 status: ",this.state.p2status, "player", this.state.player);
    break;

  // Case 2 is used when opposite player lost a turn and current player is using first turn of two
  case this.state.player==="player1" && this.state.p1status==="go" && this.state.p2status==="nogo":
  console.log("Player 1 Case 2");
    this.setState({
      player1: this.state.player1+this.onRollDice(), 
      p2status: "lose1"
    })
    
    console.log("p1 status: ", this.state.p1status, "p2 status: ",this.state.p2status, "player", this.state.player);
    break;

  // Case 3 is used after player lost turn and is returning to having a turn
  case this.state.player==="player1" && this.state.p1status==="lose1":
  console.log("Player 1 Case 3");
    this.setState({
      player1:this.state.player1+this.onRollDice(),
      player: "player2",
      currentplayer: "Player 2's Turn",
      p1status: "go"
    })
    break;

  // if both lose turn
  // will need to determine whose turn it is and write a case for each to simply resume normal play or something
  // case this.state.player==="player1" && this.state.p1status==="lose1" && this.state.p2status==="nogo":


 // Player2

 // Case 1 is normal move with a status of go and used for second turn after other player loses a turn
  case this.state.player==="player2" && this.state.p2status==="go" && (this.state.p1status==="go"||this.state.p1status==="lose1"):
    console.log("Player 2 Case 1");
    this.setState({
      player2: this.state.player2+this.onRollDice(), 
      player: "player1",
      currentplayer: "Player 1's Turn"
    })
    console.log("p1 status: ", this.state.p1status, "p2 status: ",this.state.p2status, "player", this.state.player);
    break;

  // Case 2 is used when opposite player lost a turn and current player is using first turn of two
  case this.state.player==="player2" && this.state.p2status==="go" && this.state.p1status==="nogo":
  console.log("Player 2 Case 2");
    this.setState({
      player2: this.state.player2+this.onRollDice(), 
      p1status: "lose1"
    })
    
    console.log("p1 status: ", this.state.p1status, "p2 status: ",this.state.p2status, "player", this.state.player);
    break;

  // Case 3 is used after player lost turn and is returning to having a turn
  case this.state.player==="player2" && this.state.p2status==="lose1":
  console.log("Player 2 Case 3");
    this.setState({
      player2:this.state.player2+this.onRollDice(),
      player: "player1",
      currentplayer: "Player 1's Turn",
      p2status: "go"
    })
    break;

  default:
    console.log("onPlayerMove Default Thrown");
 }
}

onPlayerLooseSpace = (currentnumber, negativenumber)=>{
  setTimeout(()=>{

  switch (this.state.gameover===false){

    case this.state.player1===currentnumber:
      window.alert(`You landed on ${currentnumber}, go back ${negativenumber} spaces`);
      // console.log(`${this.state.player1} Number BEFORE negative number(${negativenumber}): ${this.state.player1}`)
      this.setState({player1: this.state.player1-negativenumber})
      // console.log(`${this.state.player1} Number AFTER negative number(${negativenumber}): ${this.state.player1}`)
      break;
    case this.state.player2===currentnumber:
      window.alert(`You landed on ${currentnumber}, go back ${negativenumber} spaces`);
      // console.log(`${this.state.player2} Number BEFORE negative number(${negativenumber}): ${this.state.player2}`)
      this.setState({player2: this.state.player2-negativenumber})
      // console.log(`${this.state.player2} Number AFTER negative number(${negativenumber}): ${this.state.player2}`)
      break;
    default:
      // console.log("No Current Player Here");

  }}, 1000);
}

onStartNewGame = ()=>{
  this.setState({
        currentplayer: "Player 1's Turn",
        player: "player1",
        p1status: "go",
        p2status: "go",
        player1: 1, 
        player2: 1, 
        player1dice: 0, 
        player2dice: 0,
        gameover: false, 
        testvalue: "What?",
        player1avatar: griffindoravatar,
        player2avatar: slytherinavatar,
        avatar1choice: false, 
        avatar2choice: false,
        avatar1: "", 
        avatar2: ""
  })
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div id="maintitle">
            <img src={hponbroom} className="App-logo" alt="Harry Potter on a broom holding his wand." width="auto" height="auto"/>
            <div >Harry Potter's Last Stand</div>
          </div>
        
          <div id="gamespace"> 
            <div>
              <div className="playerhud">
                <div className="playernametext">{"Player 1"}<img className="playeravatarimg" src={this.state.player1avatar} alt="Player 1 Avatar" height="50px" length="50px"></img></div>
                <button disabled={this.state.player!=="player1"} onClick={()=>this.onPlayerMove(this.state.player)}>Roll Dice</button>
                 <div>Current Position:{this.state.player1}</div>
                <div className="playerdiceinfo">{`Player 1 Dice Number: ${this.state.player1dice}`}</div>
              </div> 
              <div className="playerhud">
                <div className="playernametext2">{"Player 2"}<img className="playeravatarimg" src={this.state.player2avatar} alt="Player 2 Avatar" height="50px" length="50px"></img></div>
                <button disabled={this.state.player!=="player2"} onClick={()=>this.onPlayerMove(this.state.player)}>Roll Dice</button>
                 <div>Current Position: {this.state.player2}</div>
                <div className="playerdiceinfo">{`Player 2 Dice Number: ${this.state.player2dice}`}</div>
              </div>
            </div>
            <Gameboard 
              player={this.state.player}
              player1={this.state.player1}
              player2={this.state.player2}
              onPlayerLooseSpace = {this.onPlayerLooseSpace}
              onLooseTurn = {this.onLooseTurn}
              player1avatar = {this.state.player1avatar}
              player2avatar = {this.state.player2avatar}
              onStartNewGame = {this.onStartNewGame}
              onBothLoseTurn = {this.onBothLoseTurn}
            />
            <AvatarChoices
             onAvatarChange1 = {this.onAvatarChange1}
             onAvatarChange2 = {this.onAvatarChange2}
             avatar1choice = {this.state.avatar1choice}
             avatar2choice = {this.state.avatar2choice}
             avatar1 = {this.state.avatar1}
             avatar2 = {this.state.avatar2}
            />
          </div>  


          <div id="endcredits">
              <span>This website was created by Russell Soppe and his "little dev team". <a href="www.russellsoppe.com">www.russellsoppe.com</a></span>
          </div>

        </header>

      </div>
    );
  }
}

export default App;
