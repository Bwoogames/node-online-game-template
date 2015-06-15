function Character() { };

Character.prototype.createCharacter = function() {
	console.log("Laygen");
};


Character.prototype.handleGraphics = function(graph) {
	graph.strokeStyle = 'hsl(50%, 80%, 40%)';
    graph.fillStyle = 'hsl(50%, 70%, 50%)';
    graph.lineWidth = 10;
    graph.beginPath();
    graph.arc(screenWidth / 2, screenHeight / 2, massToRadius(20), 0, 2 * Math.PI);
    graph.stroke();
    graph.fill();
};

function massToRadius(mass) {
    return Math.sqrt(mass / Math.PI) * 10;
}