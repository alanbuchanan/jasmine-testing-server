describe('Calculator', function() {
	it('should only accept a string as input', function() {
		expect(calc(100)).toEqual(false);
		expect(calc({})).toEqual(false);
	});

	it('should take an input beginning with a math operator', function() {
		expect(calc('+ 2 3')).not.toEqual(false);
		expect(calc('2 9 0 +')).toEqual(false);
		expect(calc('- 5 3')).not.toEqual(false);
		expect(calc('/ 4 2')).not.toEqual(false);
	});

	it('should add numbers together', function() {
		expect(calc('+ 1 2')).toEqual(3);
	});

	it("should take numbers away", function() {
		expect(calc("- 1 5")).toEqual(-6);
	});

	it("should have a developer who knows what stuff does", function() {
		expect(('1 2 3').split(' ')).toEqual(['1', '2', '3']);
	});

	it("should work with numbers more than one digit", function(){
		expect(calc('+ 1230 43')).toEqual(1273);
		expect(calc('/ 10 5')).toEqual(2);
		expect(calc('* 123 5')).toEqual(615);
	});

	it('should work properly with division', function() {
		expect(calc('/ 10 5 2')).toEqual(1);
		expect(calc('/ 1000 2 20 2')).toEqual(12.5);
	});

	it('should work properly with multiplication', function() {
		expect(calc('* 10 20 50 2 5')).toEqual(100000);
	});

	it('should deal with many many numbers', function() {
		expect(calc('- 2983 75 29 732 1 1 1 1 1 1 1 1 842 0 90')).toEqual(-4759);
	});
});