export class Film {
	title: string
	opening_crawl: string
	director: string
	characters: string[]
	release_date: Date
	url: string
	episode_id: number

	constructor(values: Object = {}) {
		Object.assign(this, values)
	}
}
