function contoh (iniArgString, iniArgFunction) {
	iniArgFunction('yolo')
}

contoh('test', function (kirimanDariBapak) {
	console.log(kirimanDariBapak)
})

setTimeout(function () {
	console.log('waktu habis')
}, 3000)