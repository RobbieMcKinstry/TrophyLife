import { combineReducers } from 'redux';
import { AchievementReducer } from './achievement'

const rootReducer = combineReducers({
    Achievements:  AchievementReducer
});

export default rootReducer;
