class Piece
{
    var isSelected = false;
    constructor(posX, posY, color)
    {
        this.posX = posX;
        this.posY = posY; 
        this.color = color;
    }
    changeBackgroundOnClick()
    {
        var btnId = "btn" + posX + posY;
        var square = document.getElementById(btnId);
        square.style.backgroundColor = "yellow";
    }
}


class Pawn extends Piece
{
    constructor(posX, posY, color)
    {
        super(posX, posY, color);
        var btnId = "btn" + posX + posY;
        var square = document.getElementById(btnId);
        square.innerHTML.replace(color+"P");
    }
    onClickBG()
    {
        document.getElementById
    }
}