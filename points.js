const lakersScores = [100, 100, 80, 70, 70, 50, 30, 25, 25];
const players = [
  "Bryant",
  "O'Neal",
  "Mugurel",
  "Gigel",
  "Costel",
  "Relu",
  "Costel Senior",
  "Kilot",
  "Snoop Dogg",
];

const scorers = [];

const scorersList = (scores, names) => {
  let position = 1;
  for (let i = 0; i < players.length; i++) {
    let scorer = {
      Name: names[i],
      Points: scores[i],
    };
    scorers.push(scorer);
  }
  scorers.sort((a, b) => b.Points - a.Points);
  for (let o = 0; o < scorers.length; o++) {
    if (scorers[o].Points === scorers[o + 1]?.Points) {
      scorers[o].Position = position;
    } else scorers[o].Position = position++;
  }

  return scorers;
};

const addNewPlayer = (name, score) => {
  lakersScores.push(score);
  players.push(name);
};

const AdrianPoints = [0, 5, 20, 10, 25, 50];

const getPlayerStats = (name, gamePoints) => {
  let GAMES = 1;
  const table = [name];
  const yolo = scorersList(lakersScores, players);
  let points = gamePoints[0];

  for (let i = 0; i < gamePoints.length; i++) {
    let position = 1;
    yolo.push({
      Name: name,
      Points: (points += gamePoints[i]),
    });
    yolo.sort((a, b) => b.Points - a.Points);
    for (let o = 0; o < scorers.length; o++) {
      if (yolo[o].Points === yolo[o + 1]?.Points) {
        yolo[o].Position = position;
      } else scorers[o].Position = position++;
    }
    const Pos = yolo
      .map((e, index) => {
        if (e.Name === name) return index;
      })
      .filter((e) => e !== undefined)[0];
    table.push({
      game: GAMES,
      position: yolo[Pos].Position,
      points: yolo[Pos].Points,
    });
    GAMES++;
    yolo.splice(Pos, 1);
  }

  return [table, yolo];
};

const [r, yolo] = getPlayerStats("Adrian", AdrianPoints);

console.table(yolo);
