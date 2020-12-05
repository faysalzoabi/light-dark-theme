
let val = localStorage.getItem("mode");
const sunMoonContainer = document.querySelector('.sun-moon-container')

if(val === "enabled") {
    document.body.classList.add("dark")
    localStorage.setItem("mode", "enabled");
    const currentRotation =  parseInt(getComputedStyle(sunMoonContainer).getPropertyValue('--rotation'));
    sunMoonContainer.style.setProperty('--rotation', currentRotation + 180);
}

document.querySelector('.theme-toggle-button').addEventListener('click', () => {
    val = localStorage.getItem("mode");
    if (val !== "enabled") {
        document.body.classList.add("dark")
        localStorage.setItem("mode", "enabled");
    } else {
        document.body.classList.remove("dark")
        localStorage.setItem("mode", null);
    }

    const currentRotation =  parseInt(getComputedStyle(sunMoonContainer).getPropertyValue('--rotation'));
    sunMoonContainer.style.setProperty('--rotation', currentRotation + 180);

})