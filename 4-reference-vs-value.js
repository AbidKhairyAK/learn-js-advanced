const orang1 = ['bambang', 'siska', 'roger', 'mamad'] // reference data type
const orang2 = ['jago', 'asep']
const orang3 = [...orang1, ...orang2]

orang3.push('mamad')

// console.log(orang1)
// console.log(orang2)
// console.log(orang3)

const obj1 = { nama: 'bambang', umur: 12 }
const obj2 = {...obj1}

obj2.nama = 'siska'

// console.log(obj1)
// console.log(obj2)

function contoh (...sisaArgs) {
	console.log(sisaArgs)
	console.log( sisaArgs[sisaArgs.length - 1]() )
}

contoh('bambang', 1 + 1, true === true, 'contoh string lagi', Math.PI, 'nambah lagi', function () { return 'test' })