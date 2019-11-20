module.exports = {
  setupFilesAfterEnv: ['./src/jestSetup.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
