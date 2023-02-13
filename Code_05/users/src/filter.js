const filterUsers = (users, filter) => {
  let usersFiltered = users.filter((user) => {
    const name = user.name.toLowerCase();
    return name.indexOf(filter) > -1;
  });
  return usersFiltered;
};
export { filterUsers };
