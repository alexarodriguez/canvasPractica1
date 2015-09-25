window.onload=function(){
	//alert("hola");
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext('2d');
	/////////////////////////////////////////////// letra a 
	//linea vertical 1
	context.beginPath();
	context.moveTo(30,30);
	context.lineTo(30,300);
	context.lineWidth=10;
	context.strokeStyle=randomColor();
	context.stroke();
	//linea horizonal 1
	context.beginPath();
	context.moveTo(25,30);
	context.lineTo(205,30);
	context.lineWidth=10;
	context.strokeStyle=randomColor();
	context.stroke();
	//linea vertical 2
	context.beginPath();
	context.moveTo(200,30);
	context.lineTo(200,300);
	context.lineWidth=10;
	context.strokeStyle=randomColor();
	context.stroke();
	//linea horizonal 2
	context.beginPath();
	context.moveTo(30,150);
	context.lineTo(200,150);
	context.lineWidth=10;
	context.strokeStyle=randomColor();
	context.stroke();

	//////////////////////////////////////////////letra l
	//linea VERTICAL L 1
	context.beginPath();
	context.moveTo(300,30);
	context.lineTo(300,300);
	context.lineWidth=10;
	context.strokeStyle=randomColor();
	context.stroke();
	//linea horizonal  l1 
	context.beginPath();
	context.moveTo(295,300);
	context.lineTo(405,300);
	context.lineWidth=10;
	context.strokeStyle=randomColor();
	context.stroke();

//////////////////////////////////////////////letra e
	//linea VERTICAL E 1
	context.beginPath();
	context.moveTo(500,30);
	context.lineTo(500,300);
	context.lineWidth=10;
	context.strokeStyle=randomColor();
	context.stroke();
	//linea horizonal  e1 
	context.beginPath();
	context.moveTo(495,30);
	context.lineTo(650,30);
	context.lineWidth=10;
	context.strokeStyle=randomColor();
	context.stroke();
	//linea horizonal  e2 
	context.beginPath();
	context.moveTo(495,180);
	context.lineTo(600,180);
	context.lineWidth=10;
	context.strokeStyle=randomColor();
	context.stroke();
	//linea horizonal  e3
	context.beginPath();
	context.moveTo(495,300);
	context.lineTo(650,300);
	context.lineWidth=10;
	context.strokeStyle=randomColor();
	context.stroke();


	function randomColor()
    {
       // from http://www.paulirish.com/2009/random-hex-color-code-snippets/
       return '#'+(function lol(m,s,c){return s[m.floor(m.random() * s.length)] +
       (c && lol(m,s,c-1));})(Math,'0123456789ABCDEF',4);
     };

}