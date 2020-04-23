import React from 'react';

import { PortfolioViewRectangleCaption } from 'components/views/PortfolioView';

class ClickMe extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: this.props.text }
    }

    onMouseEnter(e) {
        this.setState({ text: 'Szczegóły' })
    }

    onMouseLeave(e) {
        this.setState({ text: this.props.text })
    }

    render() {
        const { text } = this.state;
        return (
            
          <PortfolioViewRectangleCaption
            onMouseEnter={this.onMouseEnter.bind(this)}
            onMouseLeave={this.onMouseLeave.bind(this)}
          >
                {text}
          </PortfolioViewRectangleCaption>
                    
        );
    }
}

export default ClickMe;