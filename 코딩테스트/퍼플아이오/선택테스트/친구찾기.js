const foo = (users) => {
  const friends = users.filter((user) => user.length === 4);

  return friends;
};

foo(["Ryan", "Kieran", "Mark"]);
