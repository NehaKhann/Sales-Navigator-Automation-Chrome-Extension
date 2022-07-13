const pageNavDelayEl = document.getElementById('page-nav-delay');
const typingDelayEl = document.getElementById('typing-delay');
const automateBtn = document.getElementById('automate-btn');

automateBtn.addEventListener('click', function () {
	let pageNavDelay = +pageNavDelayEl.value * 1000;
	let typingDelay = +typingDelayEl.value * 1000;

	console.log('delays:  ', pageNavDelay, typingDelay);

	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		let newUrl = tabs[0].url + '#automate';
		chrome.tabs.update(tabs[0].id, { url: newUrl });
	});

	chrome.storage.local.get(['urlsObjArr'], (data) => {
		console.log(data.urlsObjArr);

		fetch('http://localhost:3006/send-connection', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				email: '',
				password: '',
				message: 'Hey _FN_! Just adding you to grow my LinkedIn Network',
				profiles: data.urlsObjArr,
				pageNavigationDelay: pageNavDelay,
				typingDelay: typingDelay,
			}),
		})
			.then((response) => {
				console.log(response.json());
				// console.log(response.body);
			})
			.catch((err) => {
				console.log(err.json());
			});
	});
});
