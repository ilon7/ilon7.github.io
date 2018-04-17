

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var CURV1 = [35,36.5,38,39.5,40.7,41.4,42,42.7,43.4,44,44,43.6,43.3,43,39,35.5,32,28,24,22,20]
var CURV2 = [-25,-21,-17,-12,-7,-2,3.5,9,14,19,24,29,34.5,40,47,54,60,67,74,78,80]
var COL_LUMINOSITY = [90,88,86,84,82,80,78,76,74,72,70,68,66,64,62,60,58,56,54,52,50]

//Draws a data visualization for a multiple choice question
function drawRow(starting_point, row_height, questions, ){
	document.write(starting_point,row_height,questions);
	document.write("<br>");
    for(var i = 0; i < questions.length; i++) {
	      var question = questions[i];
	      var a = [starting_point[0]+question[0]*row_height, starting_point[1]];
	      var b = [starting_point[0]+question[1]*row_height, starting_point[1]+row_height];
	      drawCurve(a, b, question[2], question[3]);

		}
}

function drawCurve(a,b,percentage,up){
		document.write("<br>");
		document.write(percentage);

		//// TODO: värivalinta, viivanpaksuus oikein, viivan maksimipaksuus ja row_height yhtälönä???

		var curv1_amount = getAmount(percentage, CURV1);
		var curv2_amount = getAmount(percentage, CURV2);
		var lum_amount = getAmount(percentage, COL_LUMINOSITY);

		ctx.beginPath();
    //var a = 100;
    //var b = 600;
    var h = b[1]-a[1];

		document.write("<br>");
		document.write(h);

		ctx.moveTo(a[0], a[1]);

		if (up) {
				ctx.bezierCurveTo(a[0], a[1]+curv1_amount*h/100, b[0], a[1]+curv2_amount*h/100, b[0], b[1]);
		} else {
				ctx.bezierCurveTo(a[0], a[1]+(100-curv2_amount)*h/100, b[0], a[1]+(100-curv1_amount)*h/100, b[0], b[1]);
		}

    ctx.lineWidth = 5
    ctx.strokeStyle= "hsl(359, 50%, "+lum_amount+"%)";
    ctx.stroke();

		document.write("<br>");

}

function getAmount(percentage, list) {
		//document.write(result);
		var five_amount = Math.trunc(percentage/5);

		if (percentage == 100) {
				return list[five_amount]
		}

		var five_remainder = percentage-five_amount*5;
		var num1 = list[five_amount];
		var num2 = list[five_amount+1];
		return num1+((num2-num1)/5)*five_remainder;
}


drawRow([50,50],200,[[0,1,30,true],[0,1,30,false],[4,2,50,false],[1,5,10,false],[3,4,45,true]]);
drawRow([50,250],200,[[0,1,30,false],[4,2,50,false],[1,5,10,false],[3,4,45,true]]);



//ohjeita hover hommaan https://stackoverflow.com/questions/29300280/update-html5-canvas-rectangle-on-hover

/*
drawLine(0,true);
drawLine(10,true);
drawLine(20,true);
drawLine(30,true);
drawLine(40,true);
drawLine(50,true);
drawLine(60,true);
drawLine(70,true);
drawLine(80,true);
drawLine(90,true);
drawLine(100,true);

drawLine(0,false);
drawLine(10,false);
drawLine(20,false);
drawLine(30,false);
drawLine(40,false);
drawLine(50,false);
drawLine(60,false);
drawLine(70,false);
drawLine(80,false);
drawLine(90,false);
drawLine(100,false);
*/
