'use strict';

/**
 * Demo data's API
 */
var demo = {
	editor: {
		html: '<div><h1>Product Hunt</h1></div>',
		script: "var wrap = document.getElementById('wrap');\n\nfor (var i=0; i<30; i++) {\n wrap.innerHTML += '<li>item n°'+ (i+1) +'</li>';\n}",
		style: "$orange: #F8A87C;\n\n*, ::after, ::before {\n\tbox-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n font: 14px 'Lucida Grande',Helvetica,Arial,sans-serif;\n}\n\n.banner {\n\tbackground: $orange;\n\tmargin-bottom: 80px;\n\t\n\t.avatar {\n\t\twidth: 100px;\n\t\theight: 120px;\n\t\tmargin: auto;\n\t\tposition: relative;\n\n\t\t.img {\n\t\t\t\tposition: absolute;\n\t\t\t\tbottom: -45px;\n\t\t\twidth: 100px;\n\t\t\theight: 100px;\n\t\t\t\tborder-radius: 50%;\n\t\t\t\tbackground: no-repeat url('http://cdn.collider.com/wp-content/uploads/Dumb-and-Dumber-jim-carrey-1.jpg') center center;\n\t\t\t\tbackground-size: cover;\n\t\t\t\tborder: 3px solid #fff;\n\t\t}\n\t}\n}\n\n.list {\n\tmargin: 20px 20px 80px;\n\t\n\tul {\n\t\tlist-style-type: none;\n\t\tpadding: 0;\n\t\t\n\t\tli {\n\t\t\t\tlist-style-type: none;\n\t\t\t\tpadding: 10px;\n\t\t\t\ttext-align: center;\n\t\t\t\tcolor: #999;\n\t\t\t\t@extend .animate;\n\t\t\t\t\n\t\t\t\t&:nth-child(2n + 1) {\n\t\t\t\tbackground: #efefef;\n\t\t\t\tcolor: #444;\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\t@for $i from 1 through 30 {\n\t\t\t\t&:nth-of-type(#{$i}) {\n\t\t\t\t\t-webkit-animation-delay: #{$i * 100}ms;\n\t\t\t\t\tanimation-delay: #{$i * 100}ms;\n\t\t\t\t}\n\t\t\t\t}\n\t\t}\n\t}\n}\n\n\n.animate {\n\t-webkit-animation-duration: 400ms;\n\tanimation-duration: 400ms;\n\t-webkit-animation-fill-mode: both;\n\tanimation-fill-mode: both;\n\t-webkit-animation-name: anim;\n\tanimation-name: anim;\n}\n\n@-webkit-keyframes anim {\n\tfrom {\n\t\topacity: 0;\n\t\t-webkit-transform: translate3d(-10px,0,0);\n\t\ttransform: translate3d(-10px,0,0);\n\t}\n\tto {\n\t\topacity: 1;\n\t\t-webkit-transform: translate3d(0,0,0);\n\t\ttransform: translate3d(0,0,0);\n\t}\n}\n\n@keyframes anim {\n\tfrom {\n\t\topacity: 0;\n\t\t-webkit-transform: translate3d(-10px,0,0);\n\t\ttransform: translate3d(-10px,0,0);\n\t}\n\tto {\n\t\topacity: 1;\n\t\t-webkit-transform: translate3d(0,0,0);\n\t\ttransform: translate3d(0,0,0);\n\t}\n}\n"
	},
	settings: {
		title: 'Learncoding',
		description: 'Product Hunt.',
		reset: false,
		sass: true,
		libraries: [
			'https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css'
		],
		preview: false,
		ressources: [],
	},
	view: {
		tab1: true,
		tab2: false,
		tab3: false
	}
};

module.exports = demo;
