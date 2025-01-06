document.addEventListener("DOMContentLoaded", (event) => {
    const circleType = new CircleType(document.getElementById("headline"));
    circleType.radius(475).forceWidth();
});