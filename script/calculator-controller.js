import Controller from "../../../tool/controller.js";
import  binaryOperators from "../../../tool/binary-operators.js";
/**
 * The calculator application controller type.
 */
class CalculatorController extends Controller {
  
	/**
	 * Initializes a new instance by registering the basic event listeners,
	 * and initiating the controller logic.
	 */
	constructor() {
		super();
		
		// add event listeners
		this.additionButton.addEventListener("click", () => this.additionOperand("+"));
		this.subtractionButton.addEventListener("click", () => this.subtractionOperand("-"));
		this.multiplicationButton.addEventListener("click", () => this.multiplicationOperand("*"));
		this.divisionButton.addEventListener("click", () => this.divisionOperand("/"));
		this.remainderButton.addEventListener("click", () => this.remainderOperand("%"));
		this.squareRootButton.addEventListener("click", () => this.squareRootOperand("//"));
		this.toPowerButton.addEventListener("click", () => this.squareRootOperand("**"));
		this.logButton.addEventListener("click", () => console.log("Addition button clicked"));
		this.submitButton.addEventListener("click", () => console.log("Addition button clicked"));
		this.resetButton.addEventListener("click", () => console.log("Addition button clicked"));
		this.copyButton.addEventListener("click", () => console.log("Addition button clicked"));
	}
	
	
	// get/set accessors
	get calculatorSection () {
		return this.center.querySelector("section.calculator");
	}
	
		
	get mainDivision () {
		return this.calculatorSection.querySelector("div.main");
	}
	
	
	get controlDivision () {
		return this.calculatorSection.querySelector("div.control");
	}


	get inputLeftField () {
		return this.mainDivision.querySelector("input.result");
	};
		
		
	get inputRightField () {
		return this.mainDivision.querySelector("input.input");
	}
	
	
	get additionButton () {
		return this.mainDivision.querySelector("span.operations > div.arithmetic:nth-of-type(1) > button.addition");
	}
	
	
	get subtractionButton () { 
		return this.mainDivision.querySelector("span.operations > div.arithmetic:nth-of-type(1) > button.subtraction");
	}
	
	
	get multiplicationButton () {
		return this.mainDivision.querySelector("span.operations > div.arithmetic:nth-of-type(2) > button.multiplication");
	}
	
	
	get divisionButton () {
		return this.mainDivision.querySelector("span.operations > div.arithmetic:nth-of-type(2) > button.division");
	}
	
	
	get remainderButton () {
		return this.mainDivision.querySelector("span.operations > div.arithmetic:nth-of-type(2) > button.percent");
	}
	
	
	get toPowerButton () {
		return this.mainDivision.querySelector("span.operations > div.arithmetic:nth-of-type(3) > button.square");
	}
	
	
	get squareRootButton () {
		return this.mainDivision.querySelector("span.operations > div.arithmetic:nth-of-type(3) > button.sqrt");
	}
	
	
	get logButton () {
		return this.mainDivision.querySelector("span.operations > div.arithmetic:nth-of-type(3) > button.log");
	}
	
	
	get submitButton () {
		return this.mainDivision.querySelector("button.submitButton");
	}
	
	
	get resetButton () {
		return this.controlDivision.querySelector("button.reset");
	}
	
	
	get copyButton () {
		return this.controlDivision.querySelector("button.evaluate");
	}
	
	async additionOperand (operandSign) {

			const lefOperand = Number(this.inputLeftField.value);
			const rightOperand = Number(this.inputRightField.value);
			const additionOperation = binaryOperators[operandSign];
			const operationResults = additionOperation(lefOperand,rightOperand);
			return this.inputLeftField.value = operationResults;
			

		
	}
	
	async subtractionOperand (operandSign) {

		const lefOperand = Number(this.inputLeftField.value);
		const rightOperand = Number(this.inputRightField.value);
		const subtractionOperation = binaryOperators[operandSign];
		const operationResults = subtractionOperation(lefOperand,rightOperand);
		return this.inputLeftField.value = operationResults;
		

	
	}

	async multiplicationOperand (operandSign) {

		const lefOperand = Number(this.inputLeftField.value);
		const rightOperand = Number(this.inputRightField.value);
		const multiplicationOperation = binaryOperators[operandSign];
		const operationResults = multiplicationOperation(lefOperand,rightOperand);
		return this.inputLeftField.value = operationResults;

	}

	async divisionOperand (operandSign) {

		const lefOperand = Number(this.inputLeftField.value);
		const rightOperand = Number(this.inputRightField.value);
		const divisionOperation = binaryOperators[operandSign];
		const operationResults = divisionOperation(lefOperand,rightOperand);
		return this.inputLeftField.value = operationResults;

	}
	async remainderOperand (operandSign) {

		const lefOperand = Number(this.inputLeftField.value);
		const rightOperand = Number(this.inputRightField.value);
		const remainderOperation = binaryOperators[operandSign];
		const operationResults = remainderOperation(lefOperand,rightOperand);
		return this.inputLeftField.value = operationResults;

	}
}

/**
 * Register a listener for the window's "load" event.
 */
window.addEventListener("load", event => {
	const controller = new CalculatorController();
	console.log(controller);
});
