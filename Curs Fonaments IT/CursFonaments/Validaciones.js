// ========================================
// FUNCIONES DE DOM E INTERFAZ DE USUARIO
// ========================================

//* CREA CAMPOS DE ENTRADA CON ETIQUETAS Y UN BOTÓN DE ENVÍO EN UN CONTENEDOR
function createInputs(container, inputs, buttonText, buttonAction) {
	for (const [labelText, inputType, inputId] of inputs) {
		if (labelText) {
			const label = document.createElement('label');
			label.textContent = labelText;
			label.setAttribute('for', inputId);
			container.appendChild(label);
		}

		const element = document.createElement('input');
		element.type = inputType;
		element.id = inputId;
		container.appendChild(element);
		container.appendChild(document.createElement('br'));
	}

	const button = document.createElement('button');
	button.textContent = buttonText;
	button.onclick = buttonAction;
	container.appendChild(button);
}

//* CREA MÚLTIPLES BOTONES A PARTIR DE UN ARRAY DE CONFIGURACIONES DE BOTONES
function createButtons(container, buttons) {
	for (const config of buttons) {
		const button = document.createElement('button');

		button.textContent = config[0] ? config[0] : 'Click me';

		if (config[1]) {
			button.id = config[1];
		}

		if (config[2]) {
			button.onclick = config[2];
		}

		container.appendChild(button);
		container.appendChild(document.createElement('br'));
	}
}

// ========================================
// FUNCIONES DE VALIDACIÓN
// ========================================

//* VERIFICA SI UN DNI ESPAÑOL ES VÁLIDO
function isValidId(value) {
	if (!value || value.length !== 9) return false;

	const id = value.toUpperCase();
	const validLetters = [
		'T',
		'R',
		'W',
		'A',
		'G',
		'M',
		'Y',
		'F',
		'P',
		'D',
		'X',
		'B',
		'N',
		'J',
		'Z',
		'S',
		'Q',
		'V',
		'H',
		'L',
		'C',
		'K',
		'E',
	];

	let digits = 0;

	for (let i = 0; i < 8; i++) {
		const num = parseInt(id[i]);
		if (!Number.isInteger(num)) return false;
		digits = digits * 10 + num;
	}

	const lastChar = id[8];
	return (
		validLetters.indexOf(lastChar) !== -1 &&
		lastChar === validLetters[digits % 23]
	);
}

//* VERIFICA SI UN NOMBRE CONTIENE SOLO CARACTERES VÁLIDOS PARA NOMBRES ESPAÑOLES
function isValidName(value) {
	if (!value || value.toString().length === 0) return false;

	const name = value.toString();
	const allowedChars =
		"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ '-";

	for (const char of name) {
		if (allowedChars.indexOf(char) === -1) return false;
	}

	return true;
}

//* VERIFICA SI UN VALOR ES UN NÚMERO VÁLIDO
function isValidNumber(value) {
	if (typeof value !== 'number') return false;
	if (Number.isNaN(value)) return false;
	if (!isFinite(value)) return false;
	return true;
}

//* VERIFICA SI UN NÚMERO ES POSITIVO
function isPositive(num) {
	if (typeof num !== 'number') return false;
	if (Number.isNaN(num)) return false;
	if (!isFinite(num)) return false;
	return num > 0;
}

//* VERIFICA SI UN NÚMERO ES NEGATIVO
function isNegative(num) {
	if (typeof num !== 'number') return false;
	if (Number.isNaN(num)) return false;
	if (!isFinite(num)) return false;
	return num < 0;
}

//* VERIFICA SI UN NÚMERO ESTÁ DENTRO DE UN RANGO ESPECÍFICO
function isInRange(num, minValue, maxValue) {
	if (typeof num !== 'number') return false;
	if (Number.isNaN(num)) return false;
	if (!isFinite(num)) return false;
	if (typeof minValue !== 'number') return false;
	if (Number.isNaN(minValue)) return false;
	if (!isFinite(minValue)) return false;
	if (typeof maxValue !== 'number') return false;
	if (Number.isNaN(maxValue)) return false;
	if (!isFinite(maxValue)) return false;
	if (minValue > maxValue) return false;
	return num >= minValue && num <= maxValue;
}

//* VERIFICA SI UN VALOR ES UNA CADENA DE TEXTO
function isValidString(value) {
	return typeof value === 'string';
}

//* VERIFICA SI UNA CADENA TIENE UNA LONGITUD ESPECÍFICA
function hasExactLength(text, expectedLength) {
	if (typeof text !== 'string') return false;
	if (!Number.isInteger(expectedLength)) return false;
	if (expectedLength < 0) return false;
	return text.length === expectedLength;
}

//* VERIFICA SI UNA CADENA TIENE AL MENOS UNA LONGITUD MÍNIMA
function hasMinLength(text, minLength) {
	if (typeof text !== 'string') return false;
	if (!Number.isInteger(minLength)) return false;
	if (minLength < 0) return false;
	return text.length >= minLength;
}

//* VERIFICA SI UNA CADENA ES MÁS CORTA QUE UNA LONGITUD MÁXIMA
function hasMaxLength(text, maxLength) {
	if (typeof text !== 'string') return false;
	if (!Number.isInteger(maxLength)) return false;
	if (maxLength < 0) return false;
	return text.length <= maxLength;
}

//* VERIFICA SI UN VALOR ES UN ARRAY
function isValidArray(value) {
	return value instanceof Array;
}

//* VERIFICA SI UN ARRAY ESTÁ VACÍO
function isEmpty(arr) {
	if (!(arr instanceof Array)) return false;
	return arr.length === 0;
}

//* VERIFICA SI UN ARRAY TIENE EXACTAMENTE UN NÚMERO ESPECÍFICO DE ELEMENTOS
function hasLength(arr, expectedCount) {
	if (!(arr instanceof Array)) return false;
	if (!Number.isInteger(expectedCount)) return false;
	if (expectedCount < 0) return false;
	return arr.length === expectedCount;
}

//* VERIFICA SI UN ARRAY CONTIENE UN VALOR ESPECÍFICO
function contains(arr, value) {
	if (!(arr instanceof Array)) return false;
	return arr.indexOf(value) !== -1;
}

//* VERIFICA SI TODOS LOS ELEMENTOS DE UN ARRAY SON NÚMEROS
function allNumbers(arr) {
	if (!(arr instanceof Array)) return false;
	if (arr.length === 0) return false;

	for (let i = 0; i < arr.length; i++) {
		if (typeof arr[i] !== 'number') return false;
		if (Number.isNaN(arr[i])) return false;
		if (!isFinite(arr[i])) return false;
	}
	return true;
}

//* VERIFICA SI TODOS LOS ELEMENTOS DE UN ARRAY SON CADENAS DE TEXTO
function allStrings(arr) {
	if (!(arr instanceof Array)) return false;
	if (arr.length === 0) return false;

	for (let i = 0; i < arr.length; i++) {
		if (typeof arr[i] !== 'string') return false;
	}
	return true;
}

//* VERIFICA SI UN VALOR ES UN OBJETO
function isValidObject(value) {
	if (value === null) return false;
	if (value instanceof Array) return false;
	return typeof value === 'object';
}

//* VERIFICA SI UN OBJETO TIENE UNA PROPIEDAD ESPECÍFICA
function hasProperty(obj, property) {
	if (obj === null) return false;
	if (obj instanceof Array) return false;
	if (typeof obj !== 'object') return false;
	if (typeof property !== 'string') return false;
	return property in obj;
}

//* VERIFICA SI UN OBJETO TIENE TODAS LAS PROPIEDADES DE UN ARRAY
function hasProperties(obj, properties) {
	if (obj === null) return false;
	if (obj instanceof Array) return false;
	if (typeof obj !== 'object') return false;
	if (!(properties instanceof Array)) return false;

	for (let i = 0; i < properties.length; i++) {
		if (typeof properties[i] !== 'string') return false;
		if (!(properties[i] in obj)) return false;
	}
	return true;
}

//* VERIFICA SI UN EMAIL TIENE FORMATO VÁLIDO BÁSICO
function isValidEmail(email) {
	if (typeof email !== 'string') return false;
	if (email.length === 0) return false;

	const atIndex = email.indexOf('@');
	if (atIndex === -1) return false;
	if (atIndex === 0) return false;
	if (atIndex === email.length - 1) return false;

	const dotIndex = email.indexOf('.', atIndex);
	if (dotIndex === -1) return false;
	if (dotIndex === atIndex + 1) return false;
	if (dotIndex === email.length - 1) return false;

	return true;
}

//* VERIFICA SI UN VALOR ES UN BOOLEANO
function isValidBoolean(value) {
	return typeof value === 'boolean';
}

//* VERIFICA SI UN VALOR ES UNDEFINED
function isUndefined(value) {
	return typeof value === 'undefined';
}

//* VERIFICA SI UN VALOR ES NULL
function isNull(value) {
	return value === null;
}

//* VERIFICA SI UN VALOR ESTÁ DEFINIDO
function isDefined(value) {
	return typeof value !== 'undefined' && value !== null;
}

//* VERIFICA SI UN VALOR ES UN OBJETO DATE VÁLIDO
function isValidDate(value) {
	if (!(value instanceof Date)) return false;
	return !Number.isNaN(value.getTime());
}

//* VERIFICA SI UNA FECHA ES EN EL FUTURO
function isFutureDate(date) {
	if (!(date instanceof Date)) return false;
	if (Number.isNaN(date.getTime())) return false;
	const now = new Date();
	return date.getTime() > now.getTime();
}

//* VERIFICA SI UNA FECHA ES EN EL PASADO
function isPastDate(date) {
	if (!(date instanceof Date)) return false;
	if (Number.isNaN(date.getTime())) return false;
	const now = new Date();
	return date.getTime() < now.getTime();
}

//* VERIFICA SI UNA CONTRASEÑA ES FUERTE
function isStrongPassword(password) {
	if (typeof password !== 'string') return false;
	if (password.length < 8) return false;

	let hasUppercase = false;
	let hasLowercase = false;
	let hasNumber = false;

	for (let i = 0; i < password.length; i++) {
		const char = password[i];
		const charCode = char.charCodeAt(0);

		if (charCode >= 65 && charCode <= 90) hasUppercase = true;
		if (charCode >= 97 && charCode <= 122) hasLowercase = true;
		if (charCode >= 48 && charCode <= 57) hasNumber = true;
	}

	return hasUppercase && hasLowercase && hasNumber;
}

//* VERIFICA SI UN NÚMERO DE TELÉFONO ES VÁLIDO
function isValidPhone(phone) {
	if (typeof phone !== 'string') return false;
	if (phone.length === 0) return false;

	for (let i = 0; i < phone.length; i++) {
		const charCode = phone.charCodeAt(i);
		if (charCode < 48 || charCode > 57) return false;
	}

	return phone.length >= 10 && phone.length <= 15;
}

//* VERIFICA SI UN CÓDIGO POSTAL ES VÁLIDO
function isValidZipCode(zipCode) {
	if (typeof zipCode !== 'string') return false;
	if (zipCode.length !== 5) return false;

	for (let i = 0; i < zipCode.length; i++) {
		const charCode = zipCode.charCodeAt(i);
		if (charCode < 48 || charCode > 57) return false;
	}

	return true;
}

//* VERIFICA SI UNA EDAD ES VÁLIDA
function isValidAge(age) {
	if (!Number.isInteger(age)) return false;
	return age >= 0 && age <= 150;
}

//* VERIFICA SI UNA PERSONA ES ADULTA
function isAdult(age) {
	if (!Number.isInteger(age)) return false;
	if (age < 0 || age > 150) return false;
	return age >= 18;
}

//* VERIFICA SI UNA URL TIENE FORMATO VÁLIDO BÁSICO
function isValidUrl(url) {
	if (typeof url !== 'string') return false;
	if (url.length === 0) return false;

	const hasHttp = url.indexOf('http://') === 0;
	const hasHttps = url.indexOf('https://') === 0;

	if (!hasHttp && !hasHttps) return false;

	const protocol = hasHttp ? 'http://' : 'https://';
	const afterProtocol = url.substring(protocol.length);

	if (afterProtocol.length === 0) return false;
	if (afterProtocol.indexOf('.') === -1) return false;

	return true;
}

// ========================================
// FUNCIONES DE BÚSQUEDA
// ========================================

//* ENCUENTRA LA PRIMERA APARICIÓN DE UN VALOR EN UN ARRAY
function findFirstIndex(arr, value) {
	if (!(arr instanceof Array)) return -1;
	return arr.indexOf(value);
}

//* ENCUENTRA LA ÚLTIMA APARICIÓN DE UN VALOR EN UN ARRAY
function findLastIndex(arr, value) {
	if (!(arr instanceof Array)) return -1;

	for (let i = arr.length - 1; i >= 0; i--) {
		if (arr[i] === value) return i;
	}
	return -1;
}

//* ENCUENTRA TODAS LAS POSICIONES DONDE APARECE UN VALOR EN UN ARRAY
function findAllIndexes(arr, value) {
	if (!(arr instanceof Array)) return [];

	const indexes = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === value) {
			indexes.push(i);
		}
	}
	return indexes;
}

//* CUENTA CUÁNTAS VECES APARECE UN VALOR EN UN ARRAY
function countOccurrences(arr, value) {
	if (!(arr instanceof Array)) return 0;

	let count = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === value) count++;
	}
	return count;
}

// ========================================
// FUNCIONES DE LIMPIEZA
// ========================================

//* ELIMINA ESPACIOS DEL INICIO Y FINAL DE UNA CADENA
function trim(text) {
	if (typeof text !== 'string') return '';

	let start = 0;
	let end = text.length - 1;

	while (start <= end && text[start] === ' ') {
		start++;
	}

	while (end >= start && text[end] === ' ') {
		end--;
	}

	if (start > end) return '';

	let result = '';
	for (let i = start; i <= end; i++) {
		result += text[i];
	}
	return result;
}

//* ELIMINA TODOS LOS ESPACIOS DE UNA CADENA
function removeSpaces(text) {
	if (typeof text !== 'string') return '';

	let result = '';
	for (let i = 0; i < text.length; i++) {
		if (text[i] !== ' ') {
			result += text[i];
		}
	}
	return result;
}

//* LIMPIA LA ENTRADA DEL USUARIO ELIMINANDO ESPACIOS AL INICIO Y FINAL
function cleanString(value) {
	if (typeof value !== 'string') return '';

	let start = 0;
	let end = value.length - 1;

	while (start <= end && value[start] === ' ') {
		start++;
	}

	while (end >= start && value[end] === ' ') {
		end--;
	}

	if (start > end) return '';

	let result = '';
	for (let i = start; i <= end; i++) {
		result += value[i];
	}
	return result;
}

//* CONVIERTE UNA CADENA A NÚMERO
function toNumber(value) {
	if (typeof value === 'number') return value;
	if (typeof value !== 'string') return NaN;

	let start = 0;
	let end = value.length - 1;

	while (start <= end && value[start] === ' ') {
		start++;
	}

	while (end >= start && value[end] === ' ') {
		end--;
	}

	if (start > end) return NaN;

	let cleanedValue = '';
	for (let i = start; i <= end; i++) {
		cleanedValue += value[i];
	}

	return parseFloat(cleanedValue);
}

//* ELIMINA VALORES NULL Y UNDEFINED DE UN ARRAY
function cleanArray(arr) {
	if (!(arr instanceof Array)) return [];

	const result = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] !== null && arr[i] !== undefined) {
			result.push(arr[i]);
		}
	}
	return result;
}

// ========================================
// FUNCIONES DE ELIMINACIÓN
// ========================================

//* ELIMINA UN ELEMENTO EN UN ÍNDICE ESPECÍFICO DE UN ARRAY
function removeAtIndex(arr, index) {
	if (!(arr instanceof Array)) return arr;
	if (!Number.isInteger(index)) return arr;
	if (index < 0 || index >= arr.length) return arr;

	const result = [];
	for (let i = 0; i < arr.length; i++) {
		if (i !== index) {
			result.push(arr[i]);
		}
	}
	return result;
}

//* ELIMINA LA PRIMERA APARICIÓN DE UN VALOR DE UN ARRAY
function removeFirstValue(arr, value) {
	if (!(arr instanceof Array)) return arr;

	const index = arr.indexOf(value);
	if (index === -1) return arr;

	const result = [];
	for (let i = 0; i < arr.length; i++) {
		if (i !== index) {
			result.push(arr[i]);
		}
	}
	return result;
}

//* ELIMINA TODAS LAS APARICIONES DE UN VALOR DE UN ARRAY
function removeAllValues(arr, value) {
	if (!(arr instanceof Array)) return arr;

	const result = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] !== value) {
			result.push(arr[i]);
		}
	}
	return result;
}

//* ELIMINA VALORES DUPLICADOS DE UN ARRAY
function getUniqueValues(arr) {
	if (!(arr instanceof Array)) return [];

	const result = [];
	for (let i = 0; i < arr.length; i++) {
		if (result.indexOf(arr[i]) === -1) {
			result.push(arr[i]);
		}
	}
	return result;
}

// ========================================
// FUNCIONES DE TRANSFORMACIÓN
// ========================================

//* CONVIERTE UNA CADENA A LETRAS MAYÚSCULAS
function toUpperCase(text) {
	if (typeof text !== 'string') return '';

	let result = '';
	for (let i = 0; i < text.length; i++) {
		const charCode = text.charCodeAt(i);
		if (charCode >= 97 && charCode <= 122) {
			result += String.fromCharCode(charCode - 32);
		} else {
			result += text[i];
		}
	}
	return result;
}

//* CONVIERTE UNA CADENA A LETRAS MINÚSCULAS
function toLowerCase(text) {
	if (typeof text !== 'string') return '';

	let result = '';
	for (let i = 0; i < text.length; i++) {
		const charCode = text.charCodeAt(i);
		if (charCode >= 65 && charCode <= 90) {
			result += String.fromCharCode(charCode + 32);
		} else {
			result += text[i];
		}
	}
	return result;
}

//* CAPITALIZA LA PRIMERA LETRA DE UNA CADENA
function capitalize(text) {
	if (typeof text !== 'string') return '';
	if (text.length === 0) return '';

	let firstChar = '';
	const firstCharCode = text.charCodeAt(0);
	if (firstCharCode >= 97 && firstCharCode <= 122) {
		firstChar = String.fromCharCode(firstCharCode - 32);
	} else {
		firstChar = text[0];
	}

	let restOfText = '';
	for (let i = 1; i < text.length; i++) {
		const charCode = text.charCodeAt(i);
		if (charCode >= 65 && charCode <= 90) {
			restOfText += String.fromCharCode(charCode + 32);
		} else {
			restOfText += text[i];
		}
	}

	return firstChar + restOfText;
}

// ========================================
// FUNCIONES DE FILTRADO
// ========================================

//* FILTRA UN ARRAY PARA MANTENER SOLO NÚMEROS VÁLIDOS
function filterNumbers(arr) {
	if (!(arr instanceof Array)) return [];

	const result = [];
	for (let i = 0; i < arr.length; i++) {
		if (typeof arr[i] === 'number' && !Number.isNaN(arr[i])) {
			result.push(arr[i]);
		}
	}
	return result;
}

//* FILTRA UN ARRAY PARA MANTENER SOLO CADENAS DE TEXTO
function filterStrings(arr) {
	if (!(arr instanceof Array)) return [];

	const result = [];
	for (let i = 0; i < arr.length; i++) {
		if (typeof arr[i] === 'string') {
			result.push(arr[i]);
		}
	}
	return result;
}

//* FILTRA UN ARRAY PARA MANTENER SOLO NÚMEROS POSITIVOS
function filterPositive(arr) {
	if (!(arr instanceof Array)) return [];

	const result = [];
	for (let i = 0; i < arr.length; i++) {
		if (typeof arr[i] === 'number' && arr[i] > 0) {
			result.push(arr[i]);
		}
	}
	return result;
}

// ========================================
// FUNCIONES DE CÁLCULO
// ========================================

//* SUMA TODOS LOS NÚMEROS EN UN ARRAY
function sum(numbers) {
	if (!(numbers instanceof Array)) return 0;

	let total = 0;
	for (let i = 0; i < numbers.length; i++) {
		if (typeof numbers[i] === 'number' && !Number.isNaN(numbers[i])) {
			total += numbers[i];
		}
	}
	return total;
}

//* CALCULA EL PROMEDIO DE TODOS LOS NÚMEROS EN UN ARRAY
function average(numbers) {
	if (!(numbers instanceof Array)) return NaN;

	const validNumbers = [];
	for (let i = 0; i < numbers.length; i++) {
		if (typeof numbers[i] === 'number' && !Number.isNaN(numbers[i])) {
			validNumbers.push(numbers[i]);
		}
	}
	if (validNumbers.length === 0) return NaN;

	let total = 0;
	for (let i = 0; i < validNumbers.length; i++) {
		total += validNumbers[i];
	}
	return total / validNumbers.length;
}

//* ENCUENTRA EL NÚMERO MÁS PEQUEÑO EN UN ARRAY
function minimum(numbers) {
	if (!(numbers instanceof Array)) return undefined;

	const validNumbers = [];
	for (let i = 0; i < numbers.length; i++) {
		if (typeof numbers[i] === 'number' && !Number.isNaN(numbers[i])) {
			validNumbers.push(numbers[i]);
		}
	}
	if (validNumbers.length === 0) return undefined;

	let minValue = validNumbers[0];
	for (let i = 1; i < validNumbers.length; i++) {
		minValue = Math.min(minValue, validNumbers[i]);
	}
	return minValue;
}

//* ENCUENTRA EL NÚMERO MÁS GRANDE EN UN ARRAY
function maximum(numbers) {
	if (!(numbers instanceof Array)) return undefined;

	const validNumbers = [];
	for (let i = 0; i < numbers.length; i++) {
		if (typeof numbers[i] === 'number' && !Number.isNaN(numbers[i])) {
			validNumbers.push(numbers[i]);
		}
	}
	if (validNumbers.length === 0) return undefined;

	let maxValue = validNumbers[0];
	for (let i = 1; i < validNumbers.length; i++) {
		maxValue = Math.max(maxValue, validNumbers[i]);
	}
	return maxValue;
}

// ========================================
// FUNCIONES DE GENERACIÓN
// ========================================

//* CREA UN ARRAY DE NÚMEROS DESDE START HASTA END CON PASO OPCIONAL
function range(start, end, step) {
	if (!Number.isInteger(start)) return [];
	if (!Number.isInteger(end)) return [];

	const stepValue = step || 1;
	if (!Number.isInteger(stepValue) || stepValue === 0) return [];

	const result = [];

	if (stepValue > 0) {
		for (let i = start; i <= end; i += stepValue) {
			result.push(i);
		}
	} else {
		for (let i = start; i >= end; i += stepValue) {
			result.push(i);
		}
	}

	return result;
}

//* CREA UN ARRAY CON UN VALOR REPETIDO UN NÚMERO ESPECÍFICO DE VECES
function repeat(value, times) {
	if (!Number.isInteger(times) || times < 0) return [];

	const result = [];
	for (let i = 0; i < times; i++) {
		result.push(value);
	}
	return result;
}

//* GENERA UN ENTERO ALEATORIO ENTRE MIN Y MAX
function randomInteger(minValue, maxValue) {
	if (!Number.isInteger(minValue)) return 0;
	if (!Number.isInteger(maxValue)) return 0;
	if (minValue > maxValue) return 0;

	return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
}

//* MEZCLA ALEATORIAMENTE LOS ELEMENTOS DE UN ARRAY
function shuffle(arr) {
	if (!(arr instanceof Array)) return [];

	const result = [];
	for (let i = 0; i < arr.length; i++) {
		result.push(arr[i]);
	}

	for (let i = result.length - 1; i > 0; i--) {
		const randomIndex = Math.floor(Math.random() * (i + 1));
		const temp = result[i];
		result[i] = result[randomIndex];
		result[randomIndex] = temp;
	}

	return result;
}

// ========================================
// FUNCIONES DE AGRUPACIÓN
// ========================================

//* DIVIDE UN ARRAY EN ARRAYS MÁS PEQUEÑOS DE UN TAMAÑO ESPECÍFICO
function chunk(arr, size) {
	if (!(arr instanceof Array)) return [];
	if (!Number.isInteger(size) || size <= 0) return [];

	const result = [];
	for (let i = 0; i < arr.length; i += size) {
		const chunkArray = [];
		for (let j = i; j < i + size && j < arr.length; j++) {
			chunkArray.push(arr[j]);
		}
		result.push(chunkArray);
	}
	return result;
}

//* APLANA UN ARRAY DE ARRAYS EN UN SOLO ARRAY
function flatten(arr) {
	if (!(arr instanceof Array)) return [];

	const result = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] instanceof Array) {
			for (let j = 0; j < arr[i].length; j++) {
				result.push(arr[i][j]);
			}
		} else {
			result.push(arr[i]);
		}
	}
	return result;
}

// ========================================
// FUNCIONES DE COMPARACIÓN
// ========================================

//* VERIFICA SI DOS VALORES O ARRAYS SON EXACTAMENTE IGUALES
function equals(a, b) {
	if (a === b) return true;

	if (a instanceof Array && b instanceof Array) {
		if (a.length !== b.length) return false;

		for (let i = 0; i < a.length; i++) {
			if (a[i] !== b[i]) return false;
		}
		return true;
	}

	return false;
}

//* VERIFICA SI UN VALOR ESTÁ VACÍO
function isEmpty(value) {
	if (value === null || value === undefined) return true;
	if (typeof value === 'string') return value.length === 0;
	if (value instanceof Array) return value.length === 0;
	if (typeof value === 'object') {
		for (const key in value) {
			return false;
		}
		return true;
	}
	return false;
}

// ========================================
// FUNCIONES HELPER PARA POO
// ========================================

// ------ GESTIÓN DE OBJETOS (CRUD) ------

//* crea un nuevo objeto con propiedades específicas
//* útil para crear objetos dinámicamente desde arrays de datos
//* ejemplo: createObject([['nombre', 'Juan'], ['edad', 25]]) → {nombre: 'Juan', edad: 25}
function createObject(properties) {
	if (!(properties instanceof Array)) return {};

	const newObject = {};
	for (let i = 0; i < properties.length; i++) {
		if (!(properties[i] instanceof Array)) continue;
		if (properties[i].length < 2) continue;

		const key = properties[i][0];
		const value = properties[i][1];

		if (typeof key !== 'string') continue;
		newObject[key] = value;
	}
	return newObject;
}

//* obtiene el valor de una propiedad de un objeto
//* devuelve un valor por defecto si la propiedad no existe, evita errores
//* ejemplo: getProperty(usuario, 'email', 'sin email') → 'juan@email.com' o 'sin email'
function getProperty(obj, propertyName, defaultValue) {
	if (!isValidObject(obj)) return defaultValue;
	if (typeof propertyName !== 'string') return defaultValue;

	return propertyName in obj ? obj[propertyName] : defaultValue;
}

//* establece el valor de una propiedad en un objeto
//* permite modificar o añadir propiedades de forma segura
//* ejemplo: setProperty(usuario, 'activo', true) → usuario.activo = true
function setProperty(obj, propertyName, value) {
	if (!isValidObject(obj)) return false;
	if (typeof propertyName !== 'string') return false;

	obj[propertyName] = value;
	return true;
}

//* elimina una propiedad de un objeto
//* útil para limpiar datos antes de guardar o enviar
//* ejemplo: deleteProperty(usuario, 'password') → elimina la contraseña del objeto
function deleteProperty(obj, propertyName) {
	if (!isValidObject(obj)) return false;
	if (typeof propertyName !== 'string') return false;
	if (!(propertyName in obj)) return false;

	delete obj[propertyName];
	return true;
}

//* crea una copia superficial de un objeto
//* permite modificar la copia sin afectar el original
//* ejemplo: cloneObject(usuario) → crea nuevo objeto con las mismas propiedades
function cloneObject(obj) {
	if (!isValidObject(obj)) return {};

	const clonedObject = {};
	for (const key in obj) {
		clonedObject[key] = obj[key];
	}
	return clonedObject;
}

// ------ INFORMACIÓN DE OBJETOS ------

//* obtiene todas las claves de un objeto
//* útil para iterar sobre propiedades o validar estructura
//* ejemplo: getObjectKeys({nombre: 'Juan', edad: 25}) → ['nombre', 'edad']
function getObjectKeys(obj) {
	if (!isValidObject(obj)) return [];

	const keys = [];
	for (const key in obj) {
		keys.push(key);
	}
	return keys;
}

//* obtiene todos los valores de un objeto
//* útil para procesar datos sin importar las claves
//* ejemplo: getObjectValues({nombre: 'Juan', edad: 25}) → ['Juan', 25]
function getObjectValues(obj) {
	if (!isValidObject(obj)) return [];

	const values = [];
	for (const key in obj) {
		values.push(obj[key]);
	}
	return values;
}

//* cuenta el número de propiedades en un objeto
//* útil para validar si un objeto tiene datos o está vacío
//* ejemplo: countProperties({nombre: 'Juan', edad: 25}) → 2
function countProperties(obj) {
	if (!isValidObject(obj)) return 0;

	let count = 0;
	for (const key in obj) {
		count++;
	}
	return count;
}

//* verifica si un objeto tiene exactamente las propiedades especificadas
//* útil para validar APIs o estructuras de datos específicas
//* ejemplo: hasExactProperties(usuario, ['nombre', 'email']) → true/false
function hasExactProperties(obj, expectedProperties) {
	if (!isValidObject(obj)) return false;
	if (!(expectedProperties instanceof Array)) return false;

	const objectKeys = getObjectKeys(obj);
	if (objectKeys.length !== expectedProperties.length) return false;

	for (let i = 0; i < expectedProperties.length; i++) {
		if (typeof expectedProperties[i] !== 'string') return false;
		if (!(expectedProperties[i] in obj)) return false;
	}
	return true;
}

// ------ TRANSFORMACIÓN DE OBJETOS ------

//* CONVIERTE UN OBJETO A UN ARRAY DE [clave, valor]
function objectToArray(obj) {
	if (!isValidObject(obj)) return [];

	const result = [];
	for (const key in obj) {
		result.push([key, obj[key]]);
	}
	return result;
}

//* FILTRA UN OBJETO MANTENIENDO SOLO LAS PROPIEDADES ESPECIFICADAS
function filterObjectProperties(obj, allowedProperties) {
	if (!isValidObject(obj)) return {};
	if (!(allowedProperties instanceof Array)) return {};

	const filteredObject = {};
	for (let i = 0; i < allowedProperties.length; i++) {
		const propertyName = allowedProperties[i];
		if (typeof propertyName !== 'string') continue;
		if (propertyName in obj) {
			filteredObject[propertyName] = obj[propertyName];
		}
	}
	return filteredObject;
}

//* EXCLUYE PROPIEDADES ESPECÍFICAS DE UN OBJETO
function excludeProperties(obj, excludedProperties) {
	if (!isValidObject(obj)) return {};
	if (!(excludedProperties instanceof Array)) return cloneObject(obj);

	const result = {};
	for (const key in obj) {
		let shouldExclude = false;
		for (let i = 0; i < excludedProperties.length; i++) {
			if (excludedProperties[i] === key) {
				shouldExclude = true;
			}
		}
		if (!shouldExclude) {
			result[key] = obj[key];
		}
	}
	return result;
}

//* FUSIONA DOS OBJETOS (EL SEGUNDO SOBRESCRIBE AL PRIMERO)
function mergeObjects(obj1, obj2) {
	if (!isValidObject(obj1)) obj1 = {};
	if (!isValidObject(obj2)) return cloneObject(obj1);

	const merged = cloneObject(obj1);
	for (const key in obj2) {
		merged[key] = obj2[key];
	}
	return merged;
}

// ------ VALIDACIÓN DE ESTRUCTURAS ------

//* valida que un objeto tenga la estructura esperada
//* útil para validar datos de APIs o formularios antes de procesarlos
//* ejemplo: validateObjectStructure(user, {nombre: 'string', edad: 'number'}) → true/false
function validateObjectStructure(obj, structure) {
	if (!isValidObject(obj)) return false;
	if (!isValidObject(structure)) return false;

	for (const key in structure) {
		if (!(key in obj)) return false;

		const expectedType = structure[key];
		const actualValue = obj[key];

		if (expectedType === 'string' && typeof actualValue !== 'string')
			return false;
		if (expectedType === 'number' && typeof actualValue !== 'number')
			return false;
		if (expectedType === 'boolean' && typeof actualValue !== 'boolean')
			return false;
		if (expectedType === 'array' && !(actualValue instanceof Array))
			return false;
		if (expectedType === 'object' && !isValidObject(actualValue)) return false;
	}
	return true;
}

//* obtiene las propiedades que faltan en un objeto
//* útil para mostrar errores específicos al usuario sobre qué datos faltan
//* ejemplo: getMissingProperties(user, ['nombre', 'email']) → ['email'] si falta email
function getMissingProperties(obj, requiredProperties) {
	if (!isValidObject(obj)) return requiredProperties || [];
	if (!(requiredProperties instanceof Array)) return [];

	const missing = [];
	for (let i = 0; i < requiredProperties.length; i++) {
		const property = requiredProperties[i];
		if (typeof property !== 'string') continue;
		if (!(property in obj)) {
			missing.push(property);
		}
	}
	return missing;
}

// ------ OPERACIONES CON ARRAYS DE OBJETOS ------

//* busca el primer objeto que tenga una propiedad con valor específico
//* útil para encontrar un usuario por id, un producto por nombre, etc.
//* ejemplo: findObjectByProperty(usuarios, 'id', 123) → primer usuario con id 123
function findObjectByProperty(objects, propertyName, value) {
	if (!(objects instanceof Array)) return null;
	if (typeof propertyName !== 'string') return null;

	for (let i = 0; i < objects.length; i++) {
		if (!isValidObject(objects[i])) continue;
		if (propertyName in objects[i] && objects[i][propertyName] === value) {
			return objects[i];
		}
	}
	return null;
}

//* busca todos los objetos que tengan una propiedad con valor específico
//* útil para filtrar usuarios por ciudad, productos por categoría, etc.
//* ejemplo: findAllObjectsByProperty(productos, 'categoria', 'electronica') → todos los electrónicos
function findAllObjectsByProperty(objects, propertyName, value) {
	if (!(objects instanceof Array)) return [];
	if (typeof propertyName !== 'string') return [];

	const results = [];
	for (let i = 0; i < objects.length; i++) {
		if (!isValidObject(objects[i])) continue;
		if (propertyName in objects[i] && objects[i][propertyName] === value) {
			results.push(objects[i]);
		}
	}
	return results;
}

//* filtra un array de objetos que tengan todas las propiedades requeridas
//* útil para validar que todos los objetos tengan los campos obligatorios
//* ejemplo: filterObjectsWithProperties(users, ['name', 'email']) → solo usuarios completos
function filterObjectsWithProperties(objects, requiredProperties) {
	if (!(objects instanceof Array)) return [];
	if (!(requiredProperties instanceof Array)) return [];

	const results = [];
	for (let i = 0; i < objects.length; i++) {
		if (!isValidObject(objects[i])) continue;

		let hasAllProperties = true;
		for (let j = 0; j < requiredProperties.length; j++) {
			if (typeof requiredProperties[j] !== 'string') {
				hasAllProperties = false;
			}
			if (!(requiredProperties[j] in objects[i])) {
				hasAllProperties = false;
			}
		}

		if (hasAllProperties) {
			results.push(objects[i]);
		}
	}
	return results;
}

//* agrupa un array de objetos por el valor de una propiedad
//* útil para organizar datos, por ejemplo usuarios por país, ventas por mes
//* ejemplo: groupObjectsByProperty(users, 'country') → {spain: [...], france: [...]}
function groupObjectsByProperty(objects, propertyName) {
	if (!(objects instanceof Array)) return {};
	if (typeof propertyName !== 'string') return {};

	const groups = {};
	for (let i = 0; i < objects.length; i++) {
		if (!isValidObject(objects[i])) continue;
		if (!(propertyName in objects[i])) continue;

		const groupKey = objects[i][propertyName].toString();
		if (!(groupKey in groups)) {
			groups[groupKey] = [];
		}
		groups[groupKey].push(objects[i]);
	}
	return groups;
}

//* ordena un array de objetos por una propiedad numérica
//* útil para ordenar productos por precio, usuarios por edad, etc.
//* ejemplo: sortObjectsByNumber(products, 'price', true) → productos ordenados por precio ascendente
function sortObjectsByNumber(objects, propertyName, ascending) {
	if (!(objects instanceof Array)) return [];
	if (typeof propertyName !== 'string') return [];

	const sortedObjects = [];
	for (let i = 0; i < objects.length; i++) {
		sortedObjects.push(objects[i]);
	}

	const isAscending = ascending !== false;

	for (let i = 0; i < sortedObjects.length - 1; i++) {
		for (let j = i + 1; j < sortedObjects.length; j++) {
			if (!isValidObject(sortedObjects[i]) || !isValidObject(sortedObjects[j]))
				continue;
			if (
				!(propertyName in sortedObjects[i]) ||
				!(propertyName in sortedObjects[j])
			)
				continue;

			const value1 = sortedObjects[i][propertyName];
			const value2 = sortedObjects[j][propertyName];

			if (typeof value1 !== 'number' || typeof value2 !== 'number') continue;

			const shouldSwap = isAscending ? value1 > value2 : value1 < value2;

			if (shouldSwap) {
				const temp = sortedObjects[i];
				sortedObjects[i] = sortedObjects[j];
				sortedObjects[j] = temp;
			}
		}
	}

	return sortedObjects;
}

//* ordena un array de objetos por una propiedad de texto
//* útil para ordenar usuarios por nombre, productos por título alfabéticamente
//* ejemplo: sortObjectsByText(users, 'name', true) → usuarios ordenados por nombre A-Z
function sortObjectsByText(objects, propertyName, ascending) {
	if (!(objects instanceof Array)) return [];
	if (typeof propertyName !== 'string') return [];

	const sortedObjects = [];
	for (let i = 0; i < objects.length; i++) {
		sortedObjects.push(objects[i]);
	}

	const isAscending = ascending !== false;

	for (let i = 0; i < sortedObjects.length - 1; i++) {
		for (let j = i + 1; j < sortedObjects.length; j++) {
			if (!isValidObject(sortedObjects[i]) || !isValidObject(sortedObjects[j]))
				continue;
			if (
				!(propertyName in sortedObjects[i]) ||
				!(propertyName in sortedObjects[j])
			)
				continue;

			const value1 = sortedObjects[i][propertyName];
			const value2 = sortedObjects[j][propertyName];

			if (typeof value1 !== 'string' || typeof value2 !== 'string') continue;

			const comparison = value1.toLowerCase() > value2.toLowerCase() ? 1 : -1;
			const shouldSwap = isAscending ? comparison > 0 : comparison < 0;

			if (shouldSwap) {
				const temp = sortedObjects[i];
				sortedObjects[i] = sortedObjects[j];
				sortedObjects[j] = temp;
			}
		}
	}

	return sortedObjects;
}

// ------ UTILIDADES DE TRANSFORMACIÓN ------

//* extrae los valores de una propiedad específica de un array de objetos
//* útil para obtener listas simples como todos los emails, todos los precios
//* ejemplo: extractPropertyValues(users, 'email') → ['juan@email.com', 'ana@email.com']
function extractPropertyValues(objects, propertyName) {
	if (!(objects instanceof Array)) return [];
	if (typeof propertyName !== 'string') return [];

	const values = [];
	for (let i = 0; i < objects.length; i++) {
		if (!isValidObject(objects[i])) continue;
		if (propertyName in objects[i]) {
			values.push(objects[i][propertyName]);
		}
	}
	return values;
}

//* cuenta objetos que cumplen una condición específica
//* útil para estadísticas como usuarios activos, productos en stock
//* ejemplo: countObjectsWithValue(products, 'category', 'electronics') → 15
function countObjectsWithValue(objects, propertyName, value) {
	if (!(objects instanceof Array)) return 0;
	if (typeof propertyName !== 'string') return 0;

	let count = 0;
	for (let i = 0; i < objects.length; i++) {
		if (!isValidObject(objects[i])) continue;
		if (propertyName in objects[i] && objects[i][propertyName] === value) {
			count++;
		}
	}
	return count;
}

//* verifica si al menos un objeto tiene una propiedad con valor específico
//* útil para verificar existencia sin necesidad de buscar el objeto completo
//* ejemplo: hasObjectWithValue(users, 'admin', true) → true si hay algún admin
function hasObjectWithValue(objects, propertyName, value) {
	if (!(objects instanceof Array)) return false;
	if (typeof propertyName !== 'string') return false;

	for (let i = 0; i < objects.length; i++) {
		if (!isValidObject(objects[i])) continue;
		if (propertyName in objects[i] && objects[i][propertyName] === value) {
			return true;
		}
	}
	return false;
}

//* actualiza una propiedad en todos los objetos de un array
//* útil para operaciones masivas como marcar todos como leídos, cambiar estado
//* ejemplo: updatePropertyInAll(notifications, 'read', true) → todas las notificaciones como leídas
function updatePropertyInAll(objects, propertyName, newValue) {
	if (!(objects instanceof Array)) return [];
	if (typeof propertyName !== 'string') return objects;

	const updatedObjects = [];
	for (let i = 0; i < objects.length; i++) {
		if (!isValidObject(objects[i])) {
			updatedObjects.push(objects[i]);
			continue;
		}

		const updatedObject = cloneObject(objects[i]);
		updatedObject[propertyName] = newValue;
		updatedObjects.push(updatedObject);
	}
	return updatedObjects;
}
