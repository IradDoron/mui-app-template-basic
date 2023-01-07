/**
 * This function converts a string to kebab-case format.
 *
 * @param {string} str - The input string to be converted.
 * @returns {string} The string in kebab-case format.
 */
function toKebabCase(str: string): string {
	return str
		.replace(/([a-z])([A-Z])/g, '$1-$2')
		.replace(/[\s_]+/g, '-')
		.toLowerCase();
}

/**
 * This function converts a string to snake_case format.
 *
 * @param {string} str - The input string to be converted.
 * @returns {string} The string in snake_case format.
 */
function toSnakeCase(str: string): string {
	return str
		.replace(/([a-z])([A-Z])/g, '$1_$2')
		.replace(/[\s-]+/g, '_')
		.toLowerCase();
}

/**
 * This function converts a string to camelCase format.
 *
 * @param {string} str - The input string to be converted.
 * @returns {string} The string in camelCase format.
 */
function toCamelCase(str: string): string {
	return str.replace(/([-_\s]\w)/g, (matches) => matches[1].toUpperCase());
}

/**
 * This function converts a string to PascalCase format.
 *
 * @param {string} str - The input string to be converted.
 * @returns {string} The string in PascalCase format.
 */
function toPascalCase(str: string): string {
	return str
		.replace(/([-_\s]\w)/g, (matches) => matches[1].toUpperCase())
		.replace(/^\w/, (matches) => matches.toUpperCase());
}

/**
 * This function converts a string to train-case format.
 *
 * @param {string} str - The input string to be converted.
 * @returns {string} The string in train-case format.
 */
function toTrainCase(str: string): string {
	return str
		.replace(/([-_\s]\w)/g, (matches) => matches[1].toUpperCase())
		.replace(/[\s-_]+/g, '-');
}

/**
 * This function converts a string to SCREAMING_SNAKE_CASE format.
 *
 * @param {string} str - The input string to be converted.
 * @returns {string} The string in SCREAMING_SNAKE_CASE format.
 */
function toScreamingSnakeCase(str: string): string {
	return str
		.replace(/([a-z])([A-Z])/g, '$1_$2')
		.replace(/[\s-]+/g, '_')
		.toUpperCase();
}

export const stringHelpers = {
	toKebabCase,
	toCamelCase,
	toSnakeCase,
	toPascalCase,
	toTrainCase,
	toScreamingSnakeCase,
};
