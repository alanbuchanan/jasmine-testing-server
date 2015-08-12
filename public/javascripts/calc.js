var calc = function(input) {
	// only strings allowed
	if(typeof input !== 'string') return false;
	
	// only beginning with 1 math operator
	var pattern = new RegExp(/([+]|[-]|[*]|[/]){1}(?= )/g);
	if (!(pattern.test(input))) return false;

	var splitput = input.split(' ');

	var operator = input[0];

	splitput.shift();

	var result = 0;
	
	switch(operator) {
		case '+' :
			return splitput.reduce(function(i, j){
				return parseInt(i) + parseInt(j);
			});
			break;

		case '-' :
			splitput.map(function(i){
				result -= i;
			})
			return result;
			break;

		case '/' :
			return splitput.reduce(function(a, b){
				return a / b;
			});
			break;

		case '*' :
			return splitput.reduce(function(a, b){
				return a * b;
			});
			break;

		default :
			return "impossibru";
			break;
	}

}