let cachedFiles;

function cacheFile(file) {
  // Simulated caching for demonstration purposes
  cachedFiles = [file];
}

function cacheFiles(files) {
  // Simulated caching for demonstration purposes
  cachedFiles = files;
}

function getCachedFiles() {
  // Simulated caching for demonstration purposes
  return cachedFiles;
}

function clearCache() {
  // Simulated caching for demonstration purposes
  cachedFiles = null;
}

module.exports = {
  cacheFile,
  cacheFiles,
  getCachedFiles,
  clearCache,
};
