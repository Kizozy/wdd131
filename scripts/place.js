document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

const temp = 8;
const windSpeed = 12;

const calculateWindChill = (t, v) => (13.12 + (0.6215 * t) - (11.37 * Math.pow(v, 0.16)) + (0.3965 * t * Math.pow(v, 0.16))).toFixed(1);

function displayWindChill() {
    const chillElement = document.getElementById("chill");
    if (temp <= 10 && windSpeed > 4.8) {
        chillElement.textContent = `${calculateWindChill(temp, windSpeed)} °C`;
    } else {
        chillElement.textContent = "N/A";
    }
}
displayWindChill();
