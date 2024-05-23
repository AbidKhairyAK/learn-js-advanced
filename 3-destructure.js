const orang = {
	ciri: {
		umum: {
			data: {
				nama: 'bambang',
				umur: 18,
				hobi: 'memancing'
			}
		}
	}
}

const { umur, hobi, nama } = orang.ciri.umum.data

console.log(nama)
console.log(umur)
console.log(hobi)


const cars = ['porsche', 'dodge', 'ford f150']

const [mobil1, mobil2, mobil3] = cars