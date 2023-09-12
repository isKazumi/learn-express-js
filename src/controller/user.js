const getAllUsers = (req, res) => {
  const data = {
    id: 1,
    name: "kazumi",
    email: "kazumi@gmail.com",
    phone: "08981194430",
  };
  res.json({
    message: "GET users success",
    data: data,
  });
};

const createUser = (req, res) => {
  res.json({
    message: "CREATE user success",
    data: req.body,
  });
};

const delletUser = (req, res) => {
  const { user_id } = req.params;

  res.json({
    message: "DELLET user success",
  });
};

const editUser = (req, res) => {
  res.json({
    message: "EDIT user success",
  });
};

const updataUser = (req, res) => {
  const { user_id } = req.params;

  res.json({
    message: "UPDATE user success",
    dara: req.body,
  });
};

export { getAllUsers, createUser, delletUser, editUser, updataUser };
