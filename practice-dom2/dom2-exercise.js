//////////////// ここは書き換えてはいけない！ 

let campus = {
	address: "八王子市館町",
	buildingD: ["D101", "D102", "D103", "D201", "D202", "D203", "D204", "D205"],
	lon: 35.624869704425,
	lat: 139.28201056633
};

let gakka = [
	{name: "機械システム工学科", ename: "Department of Mechanical Systems Engineering"},
	{name: "電子システム工学科", ename: "Department of Electronics and Computer Systems"},
	{name: "情報工学科", ename: "Department of Computer Science"},
	{name: "デザイン学科", ename: "Department of Design"}
];

//////////////// ここから下にプログラムを書きたそう!

function changeDom() {
	let addr = document.querySelector('h2#addr');
	let dept = document.querySelector('h2#dept');

	if (document.querySelector('p#campus-address') !== null) {
		return;
	}

	let p = document.createElement('p');
	p.id = 'campus-address';
	p.textContent = campus.address;
	addr.insertAdjacentElement('afterend', p);

	let roomTitle = document.createElement('h3');
	roomTitle.textContent = 'D館の教室';
	p.insertAdjacentElement('afterend', roomTitle);

	let roomList = document.createElement('ul');
	for (let room of campus.buildingD) {
		let li = document.createElement('li');
		li.textContent = room;
		roomList.insertAdjacentElement('beforeend', li);
	}
	roomTitle.insertAdjacentElement('afterend', roomList);

	let gakkaList = document.createElement('ul');
	for (let department of gakka) {
		let li = document.createElement('li');
		li.textContent = department.name + ' (' + department.ename + ')';
		gakkaList.insertAdjacentElement('beforeend', li);
	}
	dept.insertAdjacentElement('afterend', gakkaList);
}

let b = document.querySelector('button#show');
b.addEventListener('click', changeDom);
