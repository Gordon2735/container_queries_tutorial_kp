'use strict';

console.info(
	`
                %c index.js has been loaded & read!
        `,
	`
                font-size: 16px; color: chartreuse; background: black;
                padding: 24px; border-radius: 12px; font-family: Source Code Pro;
                letter-spacing: 0.2em; box-shadow: 2px 4px 12px white;
                text-shadow: 1px 1.7px 12px hsla(228, 100%, 98%, 0.9);
        `
);

console.info(
	`
                %c Current Local: ${window.location}
        `,
	`
                font-size: 16px; color: chartreuse; background: black;
                padding: 24px; border-radius: 12px; font-family: Source Code Pro;
                letter-spacing: 0.2em; box-shadow: 2px 4px 12px white;
                text-shadow: 1px 1.7px 12px hsla(228, 100%, 98%, 0.9);
        `
);

const headerBtnIndex = document.getElementById('headerBtnIndex');
const btnAnchorIndex = document.getElementById('btnAnchorIndex');
const headerBtnIndex2 = document.getElementById('headerBtnIndex2');
const btnAnchorIndex2 = document.getElementById('btnAnchorIndex2');
const headerBtnStart = document.getElementById('headerBtnStart');
const btnAnchorStart = document.getElementById('btnAnchorStart');

getInfo(window.location);

// index
headerBtnIndex.addEventListener('mouseover', (event) => {
	event.preventDefault();
	btnAnchorIndex.style.color = 'hsl(225, 100%, 81%)';

	event.stopPropagation();
});
headerBtnIndex.addEventListener('mouseout', (event) => {
	event.preventDefault();
	btnAnchorIndex.style.color = 'hsl(223 47% 23%)';

	event.stopPropagation();
});
headerBtnIndex.addEventListener('mousedown', () => {
	btnAnchorIndex.style.color = 'hsla(51, 100%, 50%, 0.493)';
});
headerBtnIndex.addEventListener('click', (event) => {
	event.target !== btnAnchorIndex
		? ((btnAnchorIndex.style.color = 'hsla(51, 100%, 50%, 0.493)'),
		  (window.location.href =
				'http://127.0.0.1:9080/public/views/index.html'))
		: null;
});

// index-2
headerBtnIndex2.addEventListener('mouseover', (event) => {
	event.preventDefault();
	btnAnchorIndex2.style.color = 'hsl(225, 100%, 81%)';

	event.stopPropagation();
});
headerBtnIndex2.addEventListener('mouseout', (event) => {
	event.preventDefault();
	btnAnchorIndex2.style.color = 'hsl(223 47% 23%)';

	event.stopPropagation();
});
headerBtnIndex2.addEventListener('mousedown', () => {
	btnAnchorIndex2.style.color = 'hsla(51, 100%, 50%, 0.493)';
});
headerBtnIndex2.addEventListener('click', (event) => {
	event.target !== btnAnchorIndex2
		? ((btnAnchorIndex2.style.color = 'hsla(51, 100%, 50%, 0.493)'),
		  (window.location.href =
				'http://127.0.0.1:9080/public/views/index-2.html'))
		: null;
});

// index_start
headerBtnStart.addEventListener('mouseover', (event) => {
	event.preventDefault();
	btnAnchorStart.style.color = 'hsl(225, 100%, 81%)';

	event.stopPropagation();
});
headerBtnStart.addEventListener('mouseout', (event) => {
	event.preventDefault();
	btnAnchorStart.style.color = 'hsl(223 47% 23%)';

	event.stopPropagation();
});
headerBtnStart.addEventListener('mousedown', () => {
	btnAnchorStart.style.color = 'hsla(51, 100%, 50%, 0.493)';
});
headerBtnStart.addEventListener('click', (event) => {
	event.target !== btnAnchorStart
		? ((btnAnchorStart.style.color = 'hsla(51, 100%, 50%, 0.493)'),
		  (window.location.href =
				'http://127.0.0.1:9080/public/views/index_start.html'))
		: null;
});

async function getInfo(currentURL) {
	const currentLocal = currentURL;
	const previousURL = document.referrer;

	console.info(`currentLocal: ${currentLocal}`);
	console.log(`previousURL: ${previousURL}`);
}
