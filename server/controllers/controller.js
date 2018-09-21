const music = [
  "First Song",
  "Boom Boom Pow",
  "Macarena",
  "Hip Hop Hooray",
  "Hey Jude",
  "All About That Bass",
  "Moves Like Jagger",
  "Happy",
  "Upside Down",
  "Dilemma",
  "Last Song"
];

const getMusic = (req, res) => {
  console.log("howdy partner");
  res.status(200).send(music);
};

const getFilteredSong = (req, res) => {
  console.log(req.query.name);
  res
    .status(200)
    .json(
      music.filter(song =>
        song.toLowerCase().includes(req.query.songName.toLowerCase())
      )
    );
};

module.exports = {
  getMusic,
  getFilteredSong
};
