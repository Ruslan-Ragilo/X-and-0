const game = document.getElementById('game');
const winX = document.querySelector('.win_X');
const win0 = document.querySelector('.win_0');
const resetButtons = document.querySelectorAll('.reset');
const draw = document.querySelector('.draw');

for (i = 1; i < 10; i++) {
	game.innerHTML += `<div class='block block${i}'></div>`;
};

const blocks = document.querySelectorAll('.block');

let hod = 1;

for (let block of blocks) {
	block.addEventListener ('click', function () {

			if (block.textContent == 'X') {
				hod = hod;
			}
			
			if (block.textContent == '0') {
				hod = hod;
			}
		
			if (block.textContent == "") {
				if (hod%2 == 0) {
					block.textContent = 'X';
					hod++;
				}
		
				else {
					block.textContent = '0';
					hod++;
				}
		
				
				checkWinner();
				resetBlocks();
			}
		}
	)
}



function checkWinner () {
	if (blocks[0].textContent != "" && blocks[1].textContent != "" && blocks[2].textContent != "" && blocks[3].textContent != "" && blocks[4].textContent != "" && blocks[5].textContent != "" && blocks[6].textContent != "" && blocks[7].textContent != "" && blocks[8].textContent != "") {
		draw.classList.add('active'); game.classList.add('wrapper_game');
		resetBlocks();
	}
	
	
	if (blocks[0].textContent === 'X' && blocks[1].textContent === 'X' && blocks[2].textContent === 'X') {winX.classList.add('active'); game.classList.add('wrapper_game')};
	if (blocks[3].textContent === 'X' && blocks[4].textContent === 'X' && blocks[5].textContent === 'X') {winX.classList.add('active'); game.classList.add('wrapper_game')};
	if (blocks[6].textContent === 'X' && blocks[7].textContent === 'X' && blocks[8].textContent === 'X') {winX.classList.add('active'); game.classList.add('wrapper_game')};
	if (blocks[0].textContent === 'X' && blocks[3].textContent === 'X' && blocks[6].textContent === 'X') {winX.classList.add('active'); game.classList.add('wrapper_game')};
	if (blocks[1].textContent === 'X' && blocks[4].textContent === 'X' && blocks[7].textContent === 'X') {winX.classList.add('active'); game.classList.add('wrapper_game')};
	if (blocks[2].textContent === 'X' && blocks[5].textContent === 'X' && blocks[8].textContent === 'X') {winX.classList.add('active'); game.classList.add('wrapper_game')};
	if (blocks[0].textContent === 'X' && blocks[4].textContent === 'X' && blocks[8].textContent === 'X') {winX.classList.add('active'); game.classList.add('wrapper_game')};
	if (blocks[2].textContent === 'X' && blocks[4].textContent === 'X' && blocks[6].textContent === 'X') {winX.classList.add('active'); game.classList.add('wrapper_game')};

	if (blocks[0].textContent === '0' && blocks[1].textContent === '0' && blocks[2].textContent === '0') {win0.classList.add('active'); game.classList.add('wrapper_game')};
	if (blocks[3].textContent === '0' && blocks[4].textContent === '0' && blocks[5].textContent === '0') {win0.classList.add('active'); game.classList.add('wrapper_game')};
	if (blocks[6].textContent === '0' && blocks[7].textContent === '0' && blocks[8].textContent === '0') {win0.classList.add('active'); game.classList.add('wrapper_game')};
	if (blocks[0].textContent === '0' && blocks[3].textContent === '0' && blocks[6].textContent === '0') {win0.classList.add('active'); game.classList.add('wrapper_game')};
	if (blocks[1].textContent === '0' && blocks[4].textContent === '0' && blocks[7].textContent === '0') {win0.classList.add('active'); game.classList.add('wrapper_game')};
	if (blocks[2].textContent === '0' && blocks[5].textContent === '0' && blocks[8].textContent === '0') {win0.classList.add('active'); game.classList.add('wrapper_game')};
	if (blocks[0].textContent === '0' && blocks[4].textContent === '0' && blocks[8].textContent === '0') {win0.classList.add('active'); game.classList.add('wrapper_game')};
	if (blocks[2].textContent === '0' && blocks[4].textContent === '0' && blocks[6].textContent === '0') {win0.classList.add('active'); game.classList.add('wrapper_game')};

	for (let resetButton of resetButtons)
	resetButton.onclick = function () {
		winX.classList.remove('active');
		win0.classList.remove('active');
		draw.classList.remove('active');
		game.classList.remove('wrapper_game');
		hod = 1;

		for (let block of blocks) {
			block.textContent = "";
		}
	};
};	



