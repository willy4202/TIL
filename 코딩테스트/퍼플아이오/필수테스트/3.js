const foo = (games) => {
  const splitScore = games.map((item) => item.split(":"));
  const winPoint = splitScore.reduce((acc, item) => {
    let point = 0;
    if (item[0] > item[1]) point += 3;
    else if (item[0] == item[1]) point += 1;
    return acc + point;
  }, 0);

  return winPoint;
};

let score = ["3:1", "1:2", "2:2", "1:3", "2:1", "1:3", "2:1", "1:3", "2:1"];
foo(score);
