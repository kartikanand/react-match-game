import React from 'react';
import languages from './data.js';
import './index.css';

function Card (props) {
	const openCard = props.isOpen;
	return (
		<div className="board-card" onClick={props.onClick}>
			{ openCard ? props.card : "" }
		</div>
	);
}

class Board extends React.Component {
	constructor (props) {
		super(props);

		// create a cardMap with value as 0
		let cardMap = {};
		languages.forEach(card => {
			cardMap[card] = false;
		});

		this.state = {
			cardMap
		};
	}

	handleClick (card) {
		let cardMap = this.state.cardMap;
		cardMap[card] = true;

		this.setState({
			cardMap
		});
	}

	getCards (numCards) {
		return Object.keys(this.state.cardMap).map((card, index) => 
			<Card 
				card={card} 
				key={`card_${index}`}
				isOpen={this.state.cardMap[card]}
				onClick={() => this.handleClick(card)}
			/>
		);
	}

	render () {
		const cards = this.getCards(this.props.numCells);

		return (
			<div className="board">
				{cards}
			</div>
		);
	}
}

export default Board;
