 document.addEventListener("DOMContentLoaded", (event) => {
        const headline = document.getElementById("headline");
        const circleType = new CircleType(headline);

        function setRadius() {
            if (window.innerWidth <= 1024) {
                circleType.radius(325).forceWidth();
            } else {
                circleType.radius(475).forceWidth();
            }
        }

        // Delay applying CircleType to allow the text to load uncurved first
        setTimeout(() => {
            setRadius(); // Apply the curve
            headline.classList.add("ready"); // Add a class to make it fully visible
        }, 50); // Adjust delay as needed

        // Update the radius on window resize
        window.addEventListener("resize", setRadius);
    });