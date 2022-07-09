var canvas = document.getElementById("canvas")
var ctx = canvas.getContext('2d');

// canvasE.addEventListener('onmousemove', mouseMovement);

//  function mouseMovement(ev){
    // let x = ev.offSetX;
    // let y = ev.offSetY;
    // ctx.fillRect(x, y, 10, 10);
// }


canvas.onmousedown = function(ev){
    var x = ev.offSetX;
    var y = ev.offSetY;
    ctx.fillRect(x, y, 10, 10);
    // canvas.onmousemove = function(ev){
    //     // var x = ev.offSetX;
    //     // var y = ev.offSetY;
    //     // ctx.fillRect(x, y, 10, 10);
    //     console.log(ev)
    // }
}
