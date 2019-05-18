if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('./sw.js')
	.then(function() {
		console.log('Registration works!');
	})
	.catch(function() {
		console.log('Registration failed!');
	});
}