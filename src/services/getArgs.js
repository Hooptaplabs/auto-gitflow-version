/**
 * Created by manu on 5/30/16.
 */

module.exports = ({args = process.argv, offset = 0} = {args: process.argv, offset: 0})=>{

	let result = {};
	args.forEach((arg, i) => {
		if (i < offset) return;
		let [key, value = 'true'] = arg.split('=');
		try {
			value = JSON.parse(value);
		} catch (e) {}
		result[key] = value;
	});

	return result;
};
