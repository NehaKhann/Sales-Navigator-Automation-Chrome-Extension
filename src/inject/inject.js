chrome.extension.sendMessage({}, function (response) {
	var readyStateCheckInterval = setInterval(function () {
		if (document.readyState === 'complete') {
			clearInterval(readyStateCheckInterval);

			console.log('Hello');

			// if (window.location.hash === '#automate') {
			let aTags = document.querySelectorAll(
				'#search-results-container > div > ol > li > div > div > div > div > div > div > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > a'
			);

			let urlsArr = Array.from(aTags).map((x) => x.getAttribute('href'));
			// }
		}
	}, 10);
});
