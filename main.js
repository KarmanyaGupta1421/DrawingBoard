function circle_area_peri() {
    let r = document.getElementById("radius").value;
    // console.log(r);
    let area = Math.PI * r * r;
    let perimeter = 2 * Math.PI * r;


    let alert_text = `Area of circle : ${area}\nPerimeter of circle : ${perimeter}`;
    alert(alert_text);
}

function draw_circle() {
    let r = document.getElementById('radius').value;

    if (r <= 0 || r > 200) {
        alert("Invalid Inputs.");
    } else {
        var ctx = document.getElementById('paper1').getContext("2d");
        ctx.clearRect(0, 0, 400, 400);
        ctx.beginPath();
        ctx.strokeStyle = "#FFD369";
        ctx.lineWidth = 2;
        ctx.arc(200, 200, r, 0, 2 * Math.PI);
        ctx.stroke();
    }
}

function circle_validate() {
    let r = document.getElementById('radius').value;

    if (r <= 0 || r > 200) {
        alert("Validation Falied.");
    } else {
        alert("Validation Success.")
    }
}

function rect_area_peri() {
    let w = document.getElementById("width").value;
    let h = document.getElementById("height").value;

    area = w * h;
    perimeter = 2 * w + 2 * h;

    let alert_text = `Area of rectangle: ${area}\nPerimeter of rectangle: ${perimeter}`;
    alert(alert_text);
}

function draw_rect() {

    let w = document.getElementById("width").value;
    let h = document.getElementById("height").value;

    if (w >= 400 || w <= 0 || h >= 400 || h <= 0) {
        alert("Invalid Inputs");
    } else {
        var ctx = document.getElementById("paper2").getContext("2d");
        ctx.clearRect(0, 0, 400, 400);
        ctx.beginPath();
        ctx.strokeStyle = "#FFD369";
        ctx.lineWidth = 2;
        ctx.rect(200 - w / 2, 200 - h / 2, w, h);
        ctx.stroke();

        if (w === h) {
            alert("This rectangle is a square :)");
        }
    }
}

function rect_validate() {
    let w = document.getElementById("width").value;
    let h = document.getElementById("height").value;

    if (w >= 400 || w <= 0 || h >= 400 || h <= 0) {
        alert("Validation Falied");
    } else {
        alert("Validation Success");
    }

}
