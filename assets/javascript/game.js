var wins = 0;
var losses = 0;

var game = new CrystalCollector();

$("#crystal-0").on("click", function() {
    game.updateScore(game.button0Amount);
});

$("#crystal-1").on("click", function() {
    game.updateScore(game.button1Amount);
});

$("#crystal-2").on("click", function() {
    game.updateScore(game.button2Amount);
});

$("#crystal-3").on("click", function() {
    game.updateScore(game.button3Amount);
});

function CrystalCollector() {
	this.targetNumber = (Math.floor(Math.random() * 100) + 20);

	this.button0Amount = (Math.floor(Math.random() * 12) + 1);
	this.button1Amount = (Math.floor(Math.random() * 12) + 1);
	this.button2Amount = (Math.floor(Math.random() * 12) + 1);
	this.button3Amount = (Math.floor(Math.random() * 12) + 1);

	this.score = 0;

	$("#target-number").text(this.targetNumber);
	$("#score-number").text(this.score);
	$("#wins").text(wins);
	$("#losses").text(losses);
}

CrystalCollector.prototype.updateScore = function(amount) {
	this.score += amount;
	$("#score-number").text(this.score);

	if (this.score > this.targetNumber) {
		losses++;
		$("#losses").text(losses);

		game = new CrystalCollector();
	} else if (this.score === this.targetNumber) {
		wins++;
		$("#wins").text(wins);

		game = new CrystalCollector();
	}
}
