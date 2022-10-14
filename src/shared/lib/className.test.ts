import { className } from "./className";

describe("className", () => {
	test("with only first only", () => {
		expect(className("class", {}, [])).toBe("class");
	});

	test("with additonal class", () => {
		const result = "class1 class2 class3";
		expect(className("class1", {}, ["class2", "class3"]))
			.toBe(result);
	});

	test("with mode true", () => {
		const result = "class1 class2 class3 class4";
		expect(className(
			"class1", 
			{ "class4": true }, 
			["class2", "class3"])
		)
			.toBe(result);
	});

	test("with mode false", () => {
		const result = "class1 class2 class3 class4";
		expect(className(
			"class1", 
			{ "class4": true, "class5": false }, 
			["class2", "class3"])
		)
			.toBe(result);
	});
});