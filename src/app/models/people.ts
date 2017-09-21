export class People {
	birth_year: string
	eye_color: string
	gender: string
	name: string
	url: string
	mass: number
	films: string[]
	starships: string[]

	constructor(values: Object = {}) {
		Object.assign(this, values)
	}
}
