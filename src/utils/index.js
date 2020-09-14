export function validateIndex(email) {
	const re = /^\d{6}$/;
	return re.test(String(email));
}
export function validateUserName(email) {
	const re = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u;
	return re.test(String(email));
}
export function validateTown(email) {
	const re = /^[a-zA-Zа-яА-Я-']+(?:[- ][a-zA-Zа-яА-Я']+)*$/i;
	return re.test(String(email));
}
export function validateAdress(email) {
	const re = /^[a-zA-Zа-яА-Я-'0-9,\.\s]+$/;
	return re.test(String(email));
}
export function validateNameOnCard(email) {
	const re = /^[a-zA-Z]+$/;
	return re.test(String(email));
}
export function validateCardNumber(email) {
	const re = /^\d{16}$/;
	return re.test(String(email));
}
export function validateCardCVV(email) {
	const re = /^\d{3}$/;
	return re.test(String(email));
}
export function validateСardPeriod(email) {
	const re = /^\d{4}$/;
	return re.test(String(email));
}