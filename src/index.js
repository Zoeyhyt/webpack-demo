import _ from'lodash'
import './style.css'
import pic from './Dream.jpg';
import './main.scss'

function component(){
	var element = document.createElement('div');
	
	element.innerHTML = _.join(['Hello','webpack'],' ');
	element.classList.add('hello');

	var myPic = new Image();
	myPic.src = pic;

	element.appendChild(myPic);

	return element;
}

document.body.appendChild(component());

const [a, b, c, d, e] = 'hello';

console.log(a,b,c,d,e)
