var readyStateCheckInterval = setInterval(function () {
	if (document.readyState === 'complete') {
		let hash = window.location.hash;
		if (hash.includes('#automate')) {
			// setTimeout(() => {
			// 	console.log('scrolling....');
			// 	window.scrollTo(0, document.body.scrollHeight);
			// }, 175000);

			// console.log('scrolled....');

			// scrapping a tags
			let aTags = document.querySelectorAll(
				'#search-results-container > div > ol > li > div > div > div > div > div > div > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > a'
			);

			// array of href attribut of a tags
			let urlsArr = Array.from(aTags).map((x) => x.getAttribute('href'));
			console.log(urlsArr);

			// array or url objects
			let urlsObjArr = [];
			for (let i in urlsArr) {
				urlsObjArr.push({ url: 'https://www.linkedin.com' + urlsArr[i] });
			}

			chrome.storage.local.set({ urlsObjArr: urlsObjArr }, () => {
				console.log(urlsObjArr);
			});

			// chrome.storage.local.get(
			// 	['pageNavDelay', 'typingDelay'],
			// 	function (data) {
			// 		let pageNavDelay = +data.pageNavDelay * 1000;
			// 		let typingDelay = +data.typingDelay * 1000;

			// 		console.log(pageNavDelay, typingDelay);
			// 	}
			// );

			clearInterval(readyStateCheckInterval);
		}
	}
}, 10);
