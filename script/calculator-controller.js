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
		this.additionButton.addEventListener("click", () => this.OperationMethod("+"));
		this.subtractionButton.addEventListener("click", () => this.OperationMethod("-"));
		this.multiplicationButton.addEventListener("click", () => this.OperationMethod("*"));
		this.divisionButton.addEventListener("click", () => this.OperationMethod("/"));
		this.remainderButton.addEventListener("click", () => this.OperationMethod("%"));
		this.squareRootButton.addEventListener("click", () => this.OperationMethod("//"));
		this.toPowerButton.addEventListener("click", () => this.OperationMethod("**"));
		this.logButton.addEventListener("click", () => this.OperationMethod("log"));
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
		return this.mainDivision.querySelector("span.operations > div.arithmetic> button.addition");
	}
	
	
	get subtractionButton () { 
		return this.mainDivision.querySelector("span.operations > div.arithmetic> button.subtraction");
	}
	
	
	get multiplicationButton () {
		return this.mainDivision.querySelector("span.operations > div.arithmetic> button.multiplication");
	}
	
	
	get divisionButton () {
		return this.mainDivision.querySelector("span.operations > div.arithmetic> button.division");
	}
	
	
	get remainderButton () {
		return this.mainDivision.querySelector("span.operations > div.arithmetic > button.percent");
	}
	
	
	get toPowerButton () {
		return this.mainDivision.querySelector("span.operations > div.arithmetic > button.square");
	}
	
	
	get squareRootButton () {
		return this.mainDivision.querySelector("span.operations > div.arithmetic > button.sqrt");
	}
	
	
	get logButton () {
		return this.mainDivision.querySelector("span.operations > div.arithmetic > button.log");
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
	
	async OperationMethod (operandSign) {

			const lefOperand = Number(this.inputLeftField.value);
			const rightOperand = Number(this.inputRightField.value);
			const functionOperation = binaryOperators[operandSign];
			const operationResults = functionOperation(lefOperand,rightOperand);
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
