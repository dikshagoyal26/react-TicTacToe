import React from 'react'

class LeaderBoard extends React.Component {
    renderRow(w1, i, w2) {
        return (
            <div>
                <p>Player {i} : {w1}</p>
                <p>Player {i == 1 ? 2 : 1} : {w2}</p>
            </div>
        )
    }
    render() {
        return (
            <div>
                <h1>LeaderBoard</h1>
                {
                    this.props.player1 > this.props.player2 ? this.renderRow(this.props.player1, 1, this.props.player2) : this.renderRow(this.props.player2, 2, this.props.player1)
                }

            </div>
        )
    }
}
export default LeaderBoard