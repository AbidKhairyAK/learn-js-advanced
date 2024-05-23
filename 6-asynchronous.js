console.log(1)
setTimeout(() => console.log(2), 2000)
console.log(3)

fetch('https://dummyjson.com/posts283742haf')
	.then(res => res.json())
	.then(res => console.log(res))
	.catch(err => console.log('errornya ini: ', err))

async function main () {
	try {
		const res1 = await fetch('https://dummyjson.com/posts/1')
		const data1 = await res1.json()
		console.log(data1)
	} catch (err) {
		console.log(err)
	}
}
main()