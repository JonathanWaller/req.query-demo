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
  console.log(req.query);
  if (req.query.name) {
    return res
      .status(200)
      .json(music.filter(song => song.includes(req.query.name)));
  }
  return res.status(200).json(music);
};

module.exports = {
  getMusic,
  getFilteredSong
};
