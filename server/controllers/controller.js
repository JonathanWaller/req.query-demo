const music = [
  "first song",
  "boom boom pow",
  "macarena",
  "hip hop hooray",
  "hey jude",
  "all about that bass",
  "moves like jagger",
  "happy",
  "upside down",
  "dilemma",
  "last song"
];

const getMusic = (req, res) => {
  console.log("howdy partner");
  res.status(200).send(music);
};

const getFilteredSong = (req, res) => {
  console.log(req.query.name);
  res.status(200).json(music.filter(song => song.includes(req.query.name)));
};

module.exports = {
  getMusic,
  getFilteredSong
};
