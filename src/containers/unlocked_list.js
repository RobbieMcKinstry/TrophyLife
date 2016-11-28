import React, { Component } from 'react';

export default class UnlockedList extends Component {

    constructor(props) {
        super(props);

        this.state = { unlocked: [] };
    }

    render() {
        return (
            <div>
                <ul>
                    Unlocked achievements here.
                </ul>
            </div>
        );
    }
};
