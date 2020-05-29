class Input {
	constructor() {
		const numbers = document.querySelectorAll(".num");
		const operands = document.querySelectorAll(".operand");
		const equals = document.querySelector(".equals");
		const clear = document.querySelector(".clear");
		this.expression = "";
		this.output = new Output();
		this.solution = 0;

		for (const number of numbers) {
			number.addEventListener("click", () => {
				const value = number.getAttribute("data-num");
				this.expression += value;
				this.output.expression(this.expression);
			});
		}

		for (const operand of operands) {
			operand.addEventListener("click", () => {
				const value = operand.getAttribute("data-operand");
				this.expression += value;
				this.output.expression(this.expression);
			});
		}

		equals.addEventListener("click", () => {
			console.log(eval(this.expression));
		});
	}
}

class Output {
	constructor() {
		this.output = document.querySelector(".output");
	}

	expression(expression) {
		this.output.innerHTML = expression;
	}

	log() {}
}

new Input();
