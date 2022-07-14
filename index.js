const emailEl = document.getElementById('email');
const passwordEl = document.getElementById('password');
const messageEl = document.getElementById('message');
const pageNavDelayEl = document.getElementById('page-nav-delay');
const typingDelayEl = document.getElementById('typing-delay');

const automateBtn = document.getElementById('automate-btn');

automateBtn.addEventListener('click', function () {
	let email = emailEl.value;
	let password = passwordEl.value;
	let message = messageEl.value;
	let pageNavDelay = +pageNavDelayEl.value * 1000;
	let typingDelay = +typingDelayEl.value * 1000;

	console.log('email: ', email, 'password: ', password, 'message: ', message);
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
				email: email,
				password: password,
				message: message,
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
