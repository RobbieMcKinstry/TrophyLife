import React, { Component } from 'react';
import LockedList from '../containers/locked_list';
import UnlockedList from '../containers/unlocked_list';
import Achievement from './achievement';


export default class App extends Component {
    render() {
        return (
            <div>
                <LockedList />
                <UnlockedList />
            </div>
        );
    }
}
