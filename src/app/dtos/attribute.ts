export class Attribute {
	name: string;
	value: string;

	constructor(values: Object = {}) {
		Object.assign(this, values)
	}
}
