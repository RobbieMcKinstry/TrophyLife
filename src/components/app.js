import React, { Component } from 'react';
import { LockedList, UnlockedList } from '../containers/achievement_list';
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
