let printButton = document.querySelector('button#print');
printButton.addEventListener('click', printName);

function printName() {
	let input = document.querySelector('input#shimei');
	let message = document.querySelector('p#message');
	message.textContent = input.value + 'さん，こんにちは。';
}
