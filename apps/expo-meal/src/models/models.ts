import type {
	Category as CategoryType,
	Meal as MealType,
} from "../types/types";

export class Category implements CategoryType {
	id: string;
	title: string;
	color: string;

	constructor(id: string, title: string, color: string) {
		this.id = id;
		this.title = title;
		this.color = color;
	}
}

export class Meal implements MealType {
	id: string;
	categoryIds: string[];
	title: string;
	affordability: string;
	complexity: string;
	imageUrl: string;
	duration: number;
	ingredients: string[];
	steps: string[];
	isGlutenFree: boolean;
	isVegan: boolean;
	isVegetarian: boolean;
	isLactoseFree: boolean;

	constructor(
		id: string,
		categoryIds: string[],
		title: string,
		affordability: string,
		complexity: string,
		imageUrl: string,
		duration: number,
		ingredients: string[],
		steps: string[],
		isGlutenFree: boolean,
		isVegan: boolean,
		isVegetarian: boolean,
		isLactoseFree: boolean,
	) {
		this.id = id;
		this.categoryIds = categoryIds;
		this.title = title;
		this.imageUrl = imageUrl;
		this.ingredients = ingredients;
		this.steps = steps;
		this.duration = duration;
		this.complexity = complexity;
		this.affordability = affordability;
		this.isGlutenFree = isGlutenFree;
		this.isVegan = isVegan;
		this.isVegetarian = isVegetarian;
		this.isLactoseFree = isLactoseFree;
	}
}
