let cachedFiles;

function cacheFile(file) {
  cachedFiles = [file];
}

function cacheFiles(files) {
  cachedFiles = files;
}

function getCachedFiles() {
  return cachedFiles;
}

function clearCache() {
  cachedFiles = null;
}

module.exports = {
  cacheFile,
  cacheFiles,
  getCachedFiles,
  clearCache,
};
