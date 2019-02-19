import React from 'react';
import './AvatarChoices.css';
import hufflepuffavatar from '../../imgs/Hufflepuff_Crest.png';
import griffindoravatar from '../../imgs/Gryffindorcrest.png';
import ravenclawavatar from '../../imgs/Ravenclaw_Crest.png';
import slytherinavatar from '../../imgs/Slytherin_Crest.png';

const AvatarChoices = ({onAvatarChange1, onAvatarChange2, avatar1choice, avatar2choice, avatar1, avatar2})=>{

// const hufflepuffavatar = "https://vignette.wikia.nocookie.net/csydes-test/images/e/ee/Hufflepuff_Crest.png/revision/latest?cb=20171101063214";


	return(
		<div id="avatarchoicesmaindiv">
			<div id="avatarchoicetitle">Avatar Choices</div>
				<div className="avatarchoicediv">
					<img src={hufflepuffavatar} alt="Hufflepuff Avatar" height="75px" length="75px"></img>
					<div className="avatarchoicebuttonsdiv">
						<div className="avatarchoicebutton"><button disabled = {avatar1choice===true || avatar2==="Hufflepuff"} onClick={()=>onAvatarChange1(hufflepuffavatar, "Hufflepuff")}>Player 1</button></div>
						<div className="avatarchoicebutton"><button disabled = {avatar2choice===true || avatar1==="Hufflepuff"} onClick={()=>onAvatarChange2(hufflepuffavatar, "Hufflepuff")}>Player 2</button></div>
					</div>
				</div>
				<div className="avatarchoicediv">
					<img src={griffindoravatar} alt="Gryffindor Avatar" height="75px" length="75px"></img>
					<div className="avatarchoicebuttonsdiv">
						<div className="avatarchoicebutton"><button disabled = {avatar1choice===true || avatar2==="Gryffindor"} onClick={()=>onAvatarChange1(griffindoravatar, "Gryffindor")}>Player 1</button></div>
						<div className="avatarchoicebutton"><button disabled = {avatar2choice===true || avatar1==="Gryffindor"} onClick={()=>onAvatarChange2(griffindoravatar, "Gryffindor")}>Player 2</button></div>
					</div>
				</div>
				<div className="avatarchoicediv">
					<img src={ravenclawavatar} alt="Ravenclaw Avatar" height="75px" length="75px"></img>
					<div className="avatarchoicebuttonsdiv">
						<div className="avatarchoicebutton"><button disabled = {avatar1choice===true || avatar2==="Ravenclaw"} onClick={()=>onAvatarChange1(ravenclawavatar, "Ravenclaw")}>Player 1</button></div>
						<div className="avatarchoicebutton"><button disabled = {avatar2choice===true || avatar1==="Ravenclaw"} onClick={()=>onAvatarChange2(ravenclawavatar, "Ravenclaw")}>Player 2</button></div>
					</div>
				</div>
				<div className="avatarchoicediv">
					<img src={slytherinavatar} alt="Slytherin Avatar" height="75px" length="75px"></img>
					<div className="avatarchoicebuttonsdiv">
						<div className="avatarchoicebutton"><button disabled = {avatar1choice===true || avatar2==="Slytherin"} onClick={()=>onAvatarChange1(slytherinavatar, "Slytherin")}>Player 1</button></div>
						<div className="avatarchoicebutton"><button disabled = {avatar2choice===true || avatar1==="Slytherin"} onClick={()=>onAvatarChange2(slytherinavatar, "Slytherin")}>Player 2</button></div>
					</div>
				</div>
		</div>
		);
}


export default AvatarChoices; 