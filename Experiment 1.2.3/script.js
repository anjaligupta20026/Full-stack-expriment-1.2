const svg = document.getElementById("canvas");
const undoBtn = document.getElementById("undoBtn");
const colorPicker = document.getElementById("colorPicker");
const countText = document.getElementById("count");

let circles = [];

svg.addEventListener("click", (e) => {
    const rect = svg.getBoundingClientRect();

    const cx = e.clientX - rect.left;
    const cy = e.clientY - rect.top;

    const circle = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
    );

    circle.setAttribute("cx", cx);
    circle.setAttribute("cy", cy);
    circle.setAttribute("r", 8);
    circle.setAttribute("fill", colorPicker.value);

    svg.appendChild(circle);
    circles.push(circle);

    updateCount();
});

undoBtn.addEventListener("click", () => {
    if (circles.length > 0) {
        const last = circles.pop();
        svg.removeChild(last);
        updateCount();
    }
});

function updateCount() {
    countText.textContent = circles.length;
}
