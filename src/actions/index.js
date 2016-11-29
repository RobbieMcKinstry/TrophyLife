export default function unlocked_achievement(achievement) {
    return {
        type: 'ACHIEVEMENT_UNLOCKED',
        payload: achievement
    };
}
