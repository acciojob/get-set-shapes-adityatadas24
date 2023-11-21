//complete this code
class Rectangle {
	constructor(width, height){
		this._width = width;
		this._height = height;
	}

	get width(){
	return this.width;
}
	get height(){
		return this.height;
	}

	getArea(){
		return (this.width) * (this.height);
	}
}


class Square extends Animal {
	constructor(width)
	{
		super(width,width);
	}
	getPerimeter()
	{
		return 4*(this.width);
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
