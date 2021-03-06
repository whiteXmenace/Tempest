/**
 * Calculus AB / Great World Texts: The Tempest
 * 
 * Tempest, a game by:
 * @author Justin Garza
 * @author Owen Graham
 * @author Colemen Johnson
 * @author Panya Xiong
 * @author Isaac Zaman
 */

/**
 * persons which have taken part in creating this finest of games
 */
var AUTHORS = [
	{name:"Justin Garza", role:"Author"},
	{name:"Owen Graham", role:"Author"},
	{name:"Colemen \"CJ\" Johnson", role:"Author"},
	{name:"Panya Xiong", role:"Author"},
	{name:"Isaac Zaman", role:"Author"}
];

/**
 * p5 setup
 */
function setup() {
	createCanvas(960, 720);
	$("body").append(
			"<div id=\"footer\">" +
			"	Tempest, a game based on Shakespeare\'s \"The Tempest\"<br/>" +
			"	Copyright &copy; 2017 | Justin Garza, Owen Graham, Colemen Johnson, Panya Xiong, Isaac Zaman" +
			"</div>"
			);
}

/**
 * p5 drawing
 */
function draw() {
	background(255);
}