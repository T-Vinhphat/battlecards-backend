const user = require("../schemas/userSchema");

async function gatherInfo(req, res) {
  const User = await user.findOne({ pseudo: req.params.user });
  console.log(User);
  res.send(User);
}

const profil = {
  gatherInfo,
};

module.exports = profil;
