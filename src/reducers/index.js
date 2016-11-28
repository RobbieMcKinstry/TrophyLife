import { combineReducers } from 'redux';
import AchievementReducer from './achievement'

console.log(AchievementReducer());

const rootReducer = combineReducers({
    Achievements:  AchievementReducer
});

export default rootReducer;
