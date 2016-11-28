import React, { Component } from 'react';

export default class Achievement extends Component {
    constructor(props) {
        super(props);

        const hint          = props.hint;
        const title         = props.title;
        const description   = props.description;
        const achieved      = false;

        this.state = {
            hint,
            title,
            description,
            achieved
        };
    }

    render() {
        if(this.state.achieved) {
            return this.render_achieved();
        }

        return this.render_unachieved();
    }

    render_achieved() {
        return(
            <li>
                <h1>Title: { this.state.title } </h1>
                   { this.state.description }
            </li>
        );
    }

    render_unachieved() {
        return(
            <div>
                <h1>Title: { this.state.title } </h1>
                   { this.state.hint }
            </div>
        );
    }
};
