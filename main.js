canvas=document.getElementById("my_canvas");
oltx= canvas.getContext("2d");


oltx.beginPath();
oltx.strokeStyle="grey";
oltx.lineWidth=1;
oltx.rect(160, 170, 500, 250);
oltx.stroke();


oltx.beginPath();
oltx.strokeStyle="blue";
oltx.lineWidth=3;
oltx.arc(330, 230, 40, 0, 2*Math.PI);
oltx.stroke();


oltx.beginPath();
oltx.strokeStyle="black";
oltx.lineWidth=3;
oltx.arc(420, 230, 40, 0, 2*Math.PI);
oltx.stroke();


oltx.beginPath();
oltx.strokeStyle="red";
oltx.lineWidth=3;
oltx.arc(510, 230, 40, 0, 2*Math.PI);
oltx.stroke();


oltx.beginPath();
oltx.strokeStyle="yellow";
oltx.lineWidth=3;
oltx.arc(375, 275, 40, 0, 2*Math.PI);
oltx.stroke();


oltx.beginPath();
oltx.strokeStyle="green";
oltx.lineWidth=3;
oltx.arc(465, 275, 40, 0, 2*Math.PI);
oltx.stroke();







