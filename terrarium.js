var wall = {};

wall.character = "#";
StupidBug.prototype.character = "o";

function elementFromCharacter(character) {
  if (element == undefined)
    return " ";
  else
    return element.character;
}

function Terrarium(plan) {
  var grid = new Grid(plan[0].length, plan.length);
  for (var y = 0; y < plan.length; y++) {
    var line = plan[y];
    for (var x = 0; x < line.length; x++) {
      grid.setValueAt(new Point(x, y), elementFromCharacter(line.charAt(x)));
    }
  }
  this.grid = grid;
}
  
