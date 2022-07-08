var readyStateCheckInterval = setInterval(function () {
	if (document.readyState === 'complete') {
		let hash = window.location.hash;
		if (hash.includes('#automate')) {
			console.log('Hello Web');
			console.log(window.location.hash);
			let aTags = document.querySelectorAll(
				'#search-results-container > div > ol > li > div > div > div > div > div > div > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > a'
			);
			let urlsArr = Array.from(aTags).map((x) => x.getAttribute('href'));
			console.log(urlsArr);
			clearInterval(readyStateCheckInterval);
		}
	}
}, 10);
