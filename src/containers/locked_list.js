import React, { Component } from 'react';
import { connect } from 'react-redux';

class LockedAchievement extends Component {
    
    constructor(props) {
        super(props);

        this.state = { achievements: props.achievements };
    }

    render() {
        const locked = this.state.achievements.filter(function(achievement) {
            return achievement.achieved;
        });

        var locked_achievements = [];
        locked.map(function(achievement) {
            locked_achievements.push(
                <Achievement hint       ={ achievement.hint }
                             title      ={ achievement.title }
                             description={ achievement.description }
                             achieved   ={ achievement.achieved }
                />
            );
        });

        return (
            <div>
                <ul>
                    { locked_achievements }
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    // Whatever is returned
    // will show up as props
    // on locked_achievements
    return {
        achievements: state.Achievements
    };
}

export default connect(mapStateToProps)(LockedAchievement);
