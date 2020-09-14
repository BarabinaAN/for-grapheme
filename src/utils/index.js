export function validateIndex(str) {
	const re = /^\d{6}$/;
	return re.test(String(str));
}
export function validateUserName(str) {
	const re = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u;
	return re.test(String(str));
}
export function validateTown(str) {
	const re = /^[a-zA-Zа-яА-Я-']+(?:[- ][a-zA-Zа-яА-Я']+)*$/i;
	return re.test(String(str));
}
export function validateAdress(str) {
	const re = /^[a-zA-Zа-яА-Я-'0-9,\.\s]+$/;
	return re.test(String(str));
}
export function validateNameOnCard(str) {
	const re = /^[a-zA-Z]+$/;
	return re.test(String(str));
}
export function validateCardNumber(str) {
	const re = /^\d{16}$/;
	return re.test(String(str));
}
export function validateCardCVV(str) {
	const re = /^\d{3}$/;
	return re.test(String(str));
}
export function validateСardPeriod(str) {
	const re = /^\d{4}$/;
	return re.test(String(str));
}