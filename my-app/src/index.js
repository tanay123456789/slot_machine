import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


//function to emit sound when person enters the coin 
function casinoSound(){

}
// function to display message of losing
function defeat(){
    const loser=[
        'Tumse Na ho payenga',
        'Stop gambling your hard earned money',
        '25 din mein paise kabhi double nhi hopayenge tumhare',
        'Biggest Loser',
        'Acche din na aayenga tumahare',
        'You can never be a billionaire',
        'Once a loser always a loser',
        'Tata bye bye goodbye khatam gya'
    ]

}
//function to display message when person wins the lottery
function winningSound(){
    return (
        <audio autoplay="autoplay" className="player" preload="false">
          <source src="https://andyhoffman.codes/random-assets/img/slots/winning_slot.wav" />
        </audio>  
        );
}
class App extends React.Component{
    
}

ReactDOM.render(

    <App />,document.getElementById('root')
);