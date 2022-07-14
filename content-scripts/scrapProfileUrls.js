var readyStateCheckInterval1 = setInterval(async function () {
	if (document.readyState === 'complete') {
		let searchResultContainer = document.querySelector(
			'#search-results-container'
		);
		if (searchResultContainer) {
			clearInterval(readyStateCheckInterval1);
			console.log(window.innerHeight);
			console.log('scroll height', searchResultContainer.scrollHeight);

			let i = 0;

			let scrollingTimeInterval = setInterval(() => {
				console.log('scrolling...', i);
				searchResultContainer.scrollBy(0, window.innerHeight);
				i += window.innerHeight;
				if (i > searchResultContainer.scrollHeight) {
					clearInterval(scrollingTimeInterval);
				}
			}, 1000);
		}
	}
}, 10);

var readyStateCheckInterval = setInterval(async function () {
	if (document.readyState === 'complete') {
		let hash = window.location.hash;
		if (hash.includes('#automate')) {
			// console.log('reading btn');

			// let btn = document.querySelector(
			// 	'#content-main > div > div > div > div > div > div > label > span'
			// );

			// btn.addEventListener(
			// 	'click',
			// 	() => {
			// 		console.log('adding event listner');
			// 		window.scrollBy(0, window.innerHeight);
			// 		console.log('added');
			// 	},
			// 	{ passive: false }
			// );

			// console.log('clicking on btn');
			// btn.click();

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
