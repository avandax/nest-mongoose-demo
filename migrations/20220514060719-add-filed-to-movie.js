module.exports = {
  async up(db, client) {
    await db.collection("albums").updateOne({artist: "The Beatles"}, {$set: {blacklisted: true}});
  },

  async down(db, client) {
    await db.collection("albums").updateOne({artist: "The Beatles"}, {$set: {blacklisted: false}});
  }
};
