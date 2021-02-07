import React from 'react';
import './Gameboard.css'

const Gameboard = ({player, player1, player2, onPlayerLooseSpace, onLooseTurn, player1avatar, player2avatar, onStartNewGame, onBothLoseTurn})=>{


const position1 = (value)=>{if (player1===value){return(<div id="player1gp"><img onLoad={onLooseTurn} src={player1avatar} alt="Player 1 Avatar" height="50px" length="50px"></img></div>);}}
const position2 = (value)=>{if (player2===value){return(<div id="player2gp"><img onLoad={onLooseTurn} src={player2avatar} alt="Player 1 Avatar" height="50px" length="50px"></img></div>);}}

const playerName = ()=>{if (player==="player1"){return(<div>Player 1's Turn</div>);} else {return(<div>Player 2's Turn</div>);}}

const gameover = (value) =>{if (player1>=value||player2>=value){return(<div><div>Game Over</div><button onClick={onStartNewGame}>Start New Game</button></div>);}}
	
	return(

		<div>
			
			<div>{playerName()}</div>

			<div id="gameboard">

				<div className="boardsquare s1">
					<div id="s1div">
						Start
						<div className="players">{position1(1)}{position2(1)}</div>
					</div>			
				</div>

				<div className="boardsquare s2">
				   <div id="s2div">
				      <div>2</div> 
				      <div className="players">{position1(2)}{position2(2)}</div>
				   </div>
				</div>

				<div className="boardsquare s3">
				  <div id="s3div">
				    <div>3</div> 
				    <div className="players">{position1(3)}{position2(3)}</div>
				  </div>
				</div>

				<div className="boardsquare s4">
				  <div id="s4div">
				    <div>4</div>
				    <div className="players">{position1(4)}{position2(4)}</div>
				  </div>
				</div>

				<div className="boardsquare s8">
				  <div id="s8div">
				    <div>8</div> 
				    <div className="players">{position1(8)}{position2(8)}</div>
				  </div>
				</div>

				<div className="boardsquare s7">
				  <div id="s7div">
				    <div>7</div>
				    <div className="backSpace">Back 1</div>
				    <div className="players">{position1(7)}{position2(7)}{onPlayerLooseSpace(7, 1)}</div>
				  </div>
				</div>

				<div className="boardsquare s6">
				  <div id="s6div">
				    <div>6</div> 
				    <div className="players">{position1(6)}{position2(6)}</div>
				  </div>
				</div>

				<div className="boardsquare s5">
				  <div id="s5div">
				    <div>5</div> <div className="players">{position1(5)}{position2(5)}</div>
				  </div>
				</div>

				<div className="boardsquare s9">
				  <div id="s9div">
				    <div>9</div> 
				    <div className="players">{position1(9)}{position2(9)}</div>
				  </div>
				</div>

				<div className="boardsquare s10">
				  <div id="s10div">
				    <div>10</div> 
				    <div className="loseTurn">Lose Turn</div>
				    <div className="players">{position1(10)}{position2(10)}{onBothLoseTurn(10)}</div>
				  </div>
				</div>
				
				<div className="boardsquare s11"><div id="s11div"><div>11</div> <div className="backSpace">Back 2</div><div className="players">{position1(11)}{position2(11)}{onPlayerLooseSpace(11, 2)}</div></div></div>
				<div className="boardsquare s12"><div id="s12div"><div>12</div> <div className="players">{position1(12)}{position2(12)}</div></div></div>
				<div className="boardsquare s13"><div id="s13div"><div>13</div> <div className="players">{position1(13)}{position2(13)}</div></div></div>
				<div className="boardsquare s14"><div id="s14div"><div>14</div> <div className="players">{position1(14)}{position2(14)}</div></div></div>
				<div className="boardsquare s15"><div id="s15div"><div>15</div> <div className="backSpace">Back 3</div><div className="players">{position1(15)}{position2(15)}{onPlayerLooseSpace(15, 3)}</div></div></div>

				<div className="boardsquare s16"><div id="s16div"><div>16</div> <div className="players">{position1(16)}{position2(16)}</div></div></div>
				<div className="boardsquare s17"><div id="s17div"><div>17</div> <div className="players">{position1(17)}{position2(17)}</div></div></div>
				<div className="boardsquare s18"><div id="s18div"><div>18</div> <div className="players">{position1(18)}{position2(18)}</div></div></div>
				<div className="boardsquare s19"><div id="s19div"><div>19</div> <div className="loseTurn">Lose Turn</div><div className="players">{position1(19)}{position2(19)}</div></div></div>
				<div className="boardsquare s20"><div id="s20div"><div>20</div> <div className="players">{position1(20)}{position2(20)}</div></div></div>

				<div className="boardsquare s21"><div id="s21div"><div>21</div> <div className="players">{position1(21)}{position2(21)}</div></div></div>
				<div className="boardsquare s22"><div id="s22div"><div>22</div> <div className="backSpace">Back 4</div><div className="players">{position1(22)}{position2(22)}{onPlayerLooseSpace(22, 4)}</div></div></div>
				<div className="boardsquare s23"><div id="s23div"><div>23</div> <div className="players">{position1(23)}{position2(23)}</div></div></div>
				<div className="boardsquare s24"><div id="s24div"><div>Finish</div> {gameover(24)}</div></div>
			</div>
		</div>
	);
}


export default Gameboard;