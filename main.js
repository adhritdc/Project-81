canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

//borders here!
ctx.beginPath();
ctx.strokeStyle = "grey";
ctx.lineWidth = 1;
ctx.rect(150, 143, 430, 200);
ctx.stroke();

//blue circle here!
ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 5;
ctx.arc(250, 210, 40, 0, 2*Math.PI);
ctx.stroke();

//black circle here!
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.arc(350, 210, 40, 0, 2*Math.PI);
ctx.stroke();

//red circle here!
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 5;
ctx.arc(450, 210, 40, 0, 2*Math.PI);
ctx.stroke();

//orange circle here!
ctx.beginPath();
ctx.strokeStyle = "orange";
ctx.lineWidth = 5;
ctx.arc(300, 250, 40, 0, 2*Math.PI);
ctx.stroke();

//green circle here!
ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 5;
ctx.arc(400, 250, 40, 0, 2*Math.PI);
ctx.stroke();