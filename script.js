function clicktime(){

    var miliSec = Date.now()%10;
    switch (miliSec) {
        case 0:
            var color = document.getElementById("cor");
            color.style.backgroundColor='#ffffff';
        break;

        case 1:
            var color = document.getElementById("cor");
            color.style.backgroundColor='#000000';
        break;

        case 2:
            var color = document.getElementById("cor");
            color.style.backgroundColor='#0000ff';
        break;

        case 3:
            var color = document.getElementById("cor");
            color.style.backgroundColor='#008000';
        break;

        case 4:
            var color = document.getElementById("cor");
            color.style.backgroundColor='#ffc0cb';
        break;

        case 5:
            var color = document.getElementById("cor");
            color.style.backgroundColor='#ff0000';
        break;

        case 6:
            var color = document.getElementById("cor");
            color.style.backgroundColor='#993399';
        break;

        case 7:
            var color = document.getElementById("cor");
            color.style.backgroundColor='#ffff00';
        break;

        case 8:
            var color = document.getElementById("cor");
            color.style.backgroundColor='#d3d3d3';
        break;

        case 9:
            var color = document.getElementById("cor");
            color.style.backgroundColor='#ff6200';
        break;
        
        default:
            break;
    }
    console.log (miliSec);
    
}