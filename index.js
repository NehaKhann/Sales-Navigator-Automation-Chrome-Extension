const pageNavDelay = document.getElementById('page-nav-delay');
const typingDelay = document.getElementById('typing-delay');
const automateBtn = document.getElementById('automate-btn');

automateBtn.addEventListener('click', function () {
	console.log(pageNavDelay.value);
	console.log(typingDelay.value);

	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		let newUrl = tabs[0].url + '#automate';
		chrome.tabs.update(tabs[0].id, { url: newUrl });
	});

	console.log(window.location.hash);
});
