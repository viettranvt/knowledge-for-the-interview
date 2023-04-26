const { Schema, model } = require("mongoose");

const schemaClub = new Schema({
  name: {
    type: String,
    trim: true, // ko khoang trang
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
});

const Club = model("club", schemaClub);

const schemaPlayer = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  clubs: {
    type: Schema.Types.ObjectId,
    ref: "club",
  },
});

const Player = model("player", schemaClub);

async function createClub(name, year) {
  console.log(await Club.create({ name, year }));
}

async function createPlayer(name, age, clubId) {
  console.log(await Player.create({ name, age, clubs: clubId }));
}

async function getListUseLookup() {
  const player = await Player.aggregate([
    {
      $lookup: {
        from: "club",
        localField: "club",
        foreignField: "_id",
        as: "club",
      },
    },
    {
      $unwind: "$club",
    },
    {
      $project: {
        clubs: {
          name: "$club.name",
          year: "club.year",
        },
        name: 1,
        age: 1,
      },
    },
  ]);

  console.log(player);
}

async function getListUsePopulate() {
  const player = await Player.find()
    .populate("club", "name year -_id")
    .select("age name -_id");

  console.log(player);
}
