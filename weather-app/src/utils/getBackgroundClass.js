function getBackgroundClass(timezoneOffset) {
    if(!timezoneOffset) return null;
    const localTime = new Date(new Date().getTime() + timezoneOffset * 1000);
    const hours = localTime.getUTCHours();

    let backgroundClass = "";
    if(timezoneOffset) {
        if (hours >= 6 && hours < 19) {
            backgroundClass = "morning-bg";
        } 
        // else if (hours >= 12 && hours < 17) {
        //     backgroundClass = "afternoon-bg";
        // } else if (hours >= 17 && hours < 20) {
        //     backgroundClass = "evening-bg";
        // } 
        else {
            backgroundClass = "night-bg";
        }
    }

    return backgroundClass
}

export default getBackgroundClass;