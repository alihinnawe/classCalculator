import Controller from "../../../tool/controller.js";


/**
 * The caluculator application controller type.
 */
class CalculatorController extends Controller {


	/**
	 * Initializes a new instance by registering the basic event listeners,
	 * and initiating the controller logic.
	 */
	constructor () {
		super();


		// register event listeners
		// TODO
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
