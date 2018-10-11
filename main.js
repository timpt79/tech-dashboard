// Let's start



window.onload = function () {
    displayTime();
    displayDate();

    function displayTime() {
        let current_time = new Date();
        let hours = current_time.getHours();
        let minutes = current_time.getMinutes();

        if (hours > 12) {
            hours = hours - 12;
        }

        if (minutes < 10) {
            minutes = "0" + minutes;
        }

        document.getElementById("time").innerHTML = hours + ":" + minutes;

        setTimeout(displayTime, 1000);
    }

    function displayDate() {
        let current_date = new Date();

        const monthName = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"]

        let month = monthName[current_date.getMonth()];
        let day = current_date.getDate();
        let year = current_date.getFullYear();

        document.getElementById("date").innerHTML = month + " " + day + ", " + year;
    }

}

