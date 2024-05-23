class Orang {
	nama = 'bambang'
	umur = 18

	sebutHai () {
		console.log('Hai, saya ' + this.nama)
	}
}

class Programmer extends Orang {
	nama = 'rahman'
	pekerjaan = 'ngoding'
}

const prog = new Programmer()
prog.sebutHai()
