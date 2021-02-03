import React, { Component } from 'react';

class DetailsPage extends Component {
    
    render() {
        return (
            <div>
                <h1>{this.props.selectedJobId}</h1>
            </div>
        );
    }
}

export default DetailsPage;