module.exports = {
  setupFilesAfterEnv: ['./src/config/jestSetup.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
