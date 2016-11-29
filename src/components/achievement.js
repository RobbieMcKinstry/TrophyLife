import React, { Component } from 'react';

export default class Achievement extends Component {
    constructor(props) {
        super(props);

        const hint          = props.hint;
        const title         = props.title;
        const description   = props.description;
        const clickFn       = props.onClickFn;
        const achieved      = props.achieved;

        this.state = {
            hint,
            title,
            description,
            achieved,
            key: title,
            clickFn
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
                <div className="card" onClick={ () => this.state.clickFn(this.state) }> 
                    <h1 className="card-title">{ this.state.title }</h1>
                    <p className="card-text">{ this.state.description }</p>
                </div>
            </li>
        );
    }

    render_unachieved() {
        return(
            <li>
                <div className="card" onClick={ () => this.state.clickFn(this.state) }>
                    <h1 className="card-title">{ this.state.title }</h1>
                    <p className="card-text">{ this.state.hint }</p>
                </div>
            </li>
        );
    }
};
