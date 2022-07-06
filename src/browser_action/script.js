console.log('1');
document
	.getElementById('automate-btn')
	.addEventListener('submit', function (e) {
		e.preventDefault();
		console.log('2');
	});

// let automateBtn = document.getElementById('#automate-btn');
// automateBtn.onsubmit = (event) => {

//     event.preventDefault();

// 	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
// 		console.log(tabs);
// 		chrome.tabs.update(tabs[0].id, { url: tabs[0].url + '#automate' });
// 	});

// };
