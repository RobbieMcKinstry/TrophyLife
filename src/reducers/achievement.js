export default function(state = null, action) {
    if (!initialized || state == null) {
        initialized = true;
        return start_data;
    }

    switch(action.type) {
    case 'ACHIEVEMENT_UNLOCKED':    
        const achievement = action.payload;
        return state.map(function(fixture) {
            if(fixture.title === achievement.title) {
                achievement.achieved = true;
                return achievement;
            }
            return fixture;
        }); 
    }

    return state;

};

var initialized = false;

const start_data = [{
        title:          'Early to Bed...',
        description:    'You went to sleep before 10:30pm',
        hint:           'Get some shut-eye early in the night.',
        achieved:       false
    }, {
        title:          'Early to Rise',
        description:    'You got out of bed before 6:30am',
        hint:           'Wakey wakey eggs and bacy! Get up before sun-up',
        achieved:       false
    }, {
        title:          'When I Heard the Learn\'d Astronomer...',
        description:    'You graduated college',
        hint:           'Time to get a real job...',
        achieved:       false
    }, {
        title:          'A True Amphibian',
        description:    'You managed to drink 3 nights in a row!',
        hint:           'Thirsty-Thursday + 2 more nights',
        achieved:       false
    }, {
        title:          'Fking Millenials',
        description:    'You voted for a Third Party Candidate, just to see how it would feel',
        hint:           'Who the heck is Jill Stein anyway?',
        achieved:       false
    }, {
        title:          'Teacher\'s Pet',
        description:    'You didn\'t skip a single class for a full week',
        hint:           'They take attendance in this recitation, right?',
        achieved:       false
    }, {
        title:          'The Walking Dead',
        description:    'You stayed up all night, and went to class the next day',
        hint:           'Grab some Red Bulls for an all-nighter, but don\'t skip class',
        achieved:       false
    }
];
