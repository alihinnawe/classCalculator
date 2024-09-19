import Controller from "../../../tool/controller.js";


/**
 * The caluculator application controller type.
 */
class CalculatorController extends Controller {


	/**
	 * Initializes a new instance by registering the basic event listeners,
	 * and initiating the controller logic.
	 */
	
	const inputField = document.querySelector("section.calculator .main .input");
	const resultField = document.querySelector("section.calculator .main .result");


	const additionButton = document.querySelector("section.calculator .main .operations .arithmetic:nth-of-type(1) .addition");
	const subtractionButton = document.querySelector("section.calculator .main .operations .arithmetic:nth-of-type(1) .subtraction");
	const multiplicationButton = document.querySelector("section.calculator .main .operations .arithmetic:nth-of-type(2) .multiplication");
	const divisionButton = document.querySelector("section.calculator .main .operations .arithmetic:nth-of-type(2) .division");
	const percentButton = document.querySelector("section.calculator .main .operations .arithmetic:nth-of-type(2) .percent");
	const squareButton = document.querySelector("section.calculator .main .operations .arithmetic:nth-of-type(3) .square");
	const sqrtButton = document.querySelector("section.calculator .main .operations .arithmetic:nth-of-type(3) .sqrt");
	const logButton = document.querySelector("section.calculator .main .operations .arithmetic:nth-of-type(3) .log");

	const submitButton = document.querySelector("section.calculator .control .submitButton");
	const resetButton = document.querySelector("section.calculator .control .reset");
	const copyButton = document.querySelector("section.calculator .control .evaluate");



	constructor () {
		super();


		// register event listeners
		// TODO
	this.additionButton.addEventListener("click", () => {
	});

	this.subtractionButton.addEventListener("click", () => {	
	});

	this.multiplicationButton.addEventListener("click", () => {	
	});

	this.divisionButton.addEventListener("click", () => {
	});

	this.percentButton.addEventListener("click", () => {
	});
	this.squareButton.addEventListener("click", () => {
	});

	this.sqrtButton.addEventListener("click", () => {
	 });  

	this.logButton.addEventListener("click", () => {
		
	});

	this.submitButton.addEventListener("click", () => {
		
		}
	});

	this.resetButton.addEventListener("click", () => {
		
	});


	this.copyButton.addEventListener("click", () => {
		resultField.select();
		document.execCommand("copy");
	});

	}


	// get/set accessors
	// TODO

}



/**
 * Register a listener for the window's "load" event.
 */
window.addEventListener("load", event => {
	const controller = new CalculatorController();
	console.log(controller);
});
