function calculate_phase() {
    var dateString = document.getElementById('date').value;
    var date = new Date(dateString);
    var day = date.getDate() + 1;
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    if (month == 1 || month == 2) {
        --year;
        month += 12;
    }
    var a = Math.floor(year / 100);
    var b = Math.floor(a / 4);
    var c = 2 - a + b;
    var e = Math.floor(365.25 * (year + 4716));
    var f = Math.floor(30.6001 * (month + 1));
    var result = "";
    var jd = c + day + e + f - 1524.5;
    var day_since_new = jd - 2451549.5;
    var new_moons = day_since_new / 29.53;
    var x = (new_moons - Math.floor(new_moons)) * 29.53;
    if (x <= 7) {
        result = "Waxing Crescent";
    } else {
        if (x < 15) {
            result = "Waxing Gibbous";
        } else {
            if (x > 14 && x < 16) {
                result = "Full Moon";
            } else {
                if (x <= 22) {
                    result = "Waning Gibbous";
                } else {
                    result = "Waning Crescent";
                }
            }
        }
    }
    document.getElementById("result").innerHTML = result;
}

document.getElementById("calculate").onclick = function() {
    calculate_phase();
}