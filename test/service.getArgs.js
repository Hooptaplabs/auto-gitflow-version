
let expect	= require('chai').expect;
let service = require('../src/services/getArgs');


describe('Service getArgs',  () => {

	it('is a function', () => {
		expect(service).to.be.a('function');
	});

	it('returns an object', ()=>{
		expect(service()).to.be.a('object');
	});

	it('captures process.args', ()=>{
		let opts = {args: ['juan=23', 'pepi']};
		expect(service(opts)).to.deep.equal({juan: 23, pepi: true});
	});

	it('accepts an offset value', ()=>{
		let opts = {offset: 1, args: ['juan=23', 'pepi', 'cosa=23', 'x=false', 'x=hola']};
		expect(service(opts)).to.deep.equal({pepi: true, cosa: 23, x: false, x: 'hola'});
	});


});
