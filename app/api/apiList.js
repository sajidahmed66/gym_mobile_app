const traineeCommonApi = "api/trainee/";

//list of api from backend to perform serverside action.

const apiList = {
    //trainee app apilist.

    TRAINEE_LOG_IN: traineeCommonApi + "auth",
    TRAINEE_GET_PROFILE: traineeCommonApi + "pofile/me",
    TRAINEE_UPDATE_PROFILE: traineeCommonApi + "profile",
    TRAINEE_SEND_DITE_REQUEST: traineeCommonApi + "traineeDiets",
    TRAINEE_SEND_EXERCISE_REQUEST: traineeCommonApi + "traineeExercises",
    TRAINEE_GET_DITE_LIST: traineeCommonApi + "traineeDites/me",
    TRAINEE_GET_DITE_DETAILS: traineeCommonApi + "traineeDites", // add dite id in the end
}

export default apiList;