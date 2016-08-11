window.onload = function()
{
	(function () {
	    function checkForCollision(ctx, arrWithPoint, x, y) {
	        var imgData;
	        var point;
	        var data;

	        arrWithPoint = [ { x:2, y:3}, { x:x , y:y} ];

	        var currentIndex;
	        for (var i = 0, len1 = arrWithPoint.length; i < len1; i+=1) {
	        	point = arrWithPoint[i];
        		imgData = ctx.getImageData( point.x, point.y, 1, 1);
		        data = imgData.data;

		        if(data[i] !== 0 || data[i + 1] !== 0 || data[i + 2] !== 0)
		        	return false;
	        }

	        return true;
	    }

	    var canvas = document.getElementById("balloon-canvas"),
	        ctx = canvas.getContext("2d");

	    // checkForCollision(ctx);

	    document.body.addEventListener("click", function (ev){ 
	    	var x = ev.pageX;
	    	var y = ev.pageY;
	    	console.log(checkForCollision(ctx, "arr", x, y));
	    });
	}());
};