import { Attribute } from "./attribute";
import { People } from "../models/people";
import { Film } from "../models/film";

import * as _ from "lodash"
import { Constants } from "../constants"

const peopleShortDetailFields: string[] = ['gender', 'birth_year']
const peopleFullDetailFields: string[] = ['gender', 'birth_year', 'eye_color', 'hair_color', 'height', 'skin_color', 'url']
const filmShortDetailFields: string[] = ['director', 'release_date']
const filmFullDetailFields: string[] = ['director', 'release_date', 'episode_id', 'opening_crawl', 'producer', 'url']

export class Item {
	type: string
	title: string
	url: string
	shortDetails: Attribute[] = []
	fullDetails: Attribute[] = []

	constructor(values) {
		if (values instanceof People) {
			this.type = Constants.PEOPLE
			this.title = values.name
			this.url = values.url
			for(let attribute in values) {
				if (_.includes(peopleShortDetailFields, attribute)) {
					this.shortDetails.push(new Attribute({name:attribute, value:values[attribute]}))
				}
				if (_.includes(peopleFullDetailFields, attribute)) {
					this.fullDetails.push(new Attribute({name:attribute, value:values[attribute]}))
				}
			}
		} else if (values instanceof Film) {
			this.type = Constants.FILM
			this.title = values.title
			this.url = values.url
			for(let attribute in values) {
				if (_.includes(filmShortDetailFields, attribute)) {
					this.shortDetails.push(new Attribute({name:attribute, value:values[attribute]}))
				}
				if (_.includes(filmFullDetailFields, attribute)) {
					this.fullDetails.push(new Attribute({name:attribute, value:values[attribute]}))
				}
			}
		}
	}
}
