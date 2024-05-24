// const contoh_promise = new Promise((resolve, reject) => {

// 	setTimeout(() => {
// 		resolve('hai bambang')
// 	}, 2000)

// })

// console.log('awal')

// contoh_promise
// 	.then((result) => console.log(result))
// 	.catch((err) => console.log(err))

// console.log('akhir')


function penjumlahan (operand1, operand2) {
	return new Promise((resolve, reject) => {
		if (typeof operand1 !== 'number') reject('error: operand1 bukan number')
		if (typeof operand2 !== 'number') reject('error: operand2 bukan number')

		const hasilPenjumlahan = operand1 + operand2
		resolve(hasilPenjumlahan)
	})
}

penjumlahan(2, '50')
	.then(res => console.log(res))
	.catch(err => console.log(err))


async function contohAsync () {
	try {
		const hasil = await penjumlahan(1, 2)
		console.log(hasil)
	} catch (err) {
		console.log(err)
	}
}

contohAsync()