import React, { Component } from 'react';
import { connect } from 'react-redux';
import Achievement from '../components/achievement';
import unlock_achievement from '../actions/index';
import { bindActionCreators } from 'redux';


const AchievementList = (props) => {
    var locked_achievements = [];
    props.achievements.map(function(achievement) {
        locked_achievements.push(
            <Achievement hint        = { achievement.hint }
                         title       = { achievement.title }
                         description = { achievement.description }
                         achieved    = { achievement.achieved }
                         key         = { achievement.title }
                         onClickFn   = { props.unlock_achievement }
            />
        );
    });

    return (
        <div className="col-md-6">
            <ul className="list-unstyled">
                { locked_achievements }
            </ul>
        </div>
    );
};

function mapStateToPropsLockedAchievements(state) {
    // Whatever is returned
    // will show up as props
    // on locked_achievements

    const a = state.Achievements.filter(function(achievement) {
        return ! achievement.achieved;
    });

    return {
        achievements: a
    };
}

// anything returned from this function will appear as props on the AchievementList container
function mapDispatchToProps(dispatch) {
// whenever unlocked_achievement is called, the result should be passed to all of our reducers
    return bindActionCreators({ unlock_achievement }, dispatch);
}

function mapStateToPropsUnlockedAchievements(state) {
    // Whatever is returned
    // will show up as props
    // on locked_achievements

    const a = state.Achievements.filter(function(achievement) {
        return achievement.achieved;
    });

    return {
        achievements: a
    };
}

// Promotes the achievement_list from a component to a container, and sets it props as both the result of mapStateToProps and mapDispatchToProps
export const LockedList     = connect(mapStateToPropsLockedAchievements, mapDispatchToProps)(AchievementList);
export const UnlockedList   = connect(mapStateToPropsUnlockedAchievements)(AchievementList);

