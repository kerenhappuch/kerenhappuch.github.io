// Select color input
// Select size input
var gridHeight, gridWidth, canv, color;
$("#sizePicker").on("submit",function(x){
	x.preventDefault();
    canv=$('#pixelCanvas');
    gridHeight=$('#inputHeight'). val();
    gridWidth=$('#inputWeight'). val();

// When size is submitted by the user, call makeGrid()
makeGrid(gridHeight,gridWidth);
})

function makeGrid(gridHeight, gridWidth) {
    $('tr').remove();
    // Your code goes here!

    for (var i = 1; i <= gridHeight; i++) {
        canv.append('<tr id=table'+ i + '></tr>');
        for (var j = 1; j <=gridWidth; j++) {
            $('#table'+ i).append('<td></td>');
        }
    }
    //pick a color
    $('td').on('click',function(x) {
        color=$('#colorPicker').val();
		$(this).attr('bgcolor', color);

    })
}