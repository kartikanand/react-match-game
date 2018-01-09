import React from 'react';
import Board from './Board.js';

function ScoreBoard (props) {
	return (
		<div>
			Score : {props.score}
		</div>
	);
}

class Game extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            numCells: 16,
            score: 3
        };
    }

    render () {
        return (
            <div className="Game">
                <ScoreBoard score={this.state.score} />
                <Board numCells={this.state.numCells} />
            </div>
        );
    }
}

export default Game;
