import React from 'react';

import './Card.css';

class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='card_wrapper'>
                this is the bind/Card .
            </div>
        );
    }
}

export default Card;