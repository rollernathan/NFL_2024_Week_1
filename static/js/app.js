// Build the metadata panel
function buildMetadata(gameId) {
  d3.csv("https://rollernathan.github.io/NFL_2024_Week_1/resources/play_by_play_2024_cleaned.csv").then((data) => {

      // Find all data corresponding to the selected game_id
      const results = data.filter(item => item.game_id === gameId);

    // Use d3 to select the panel with id of `#play_data`
    const panel = d3.select("#play_data");

    // Use `.html("") to clear any existing metadata
    panel.html("");

    // Check if results are found
    if (results.length > 0) {
      // Append each description as a paragraph
      results.forEach(item => {
        panel.append("p").text(item.description);
      });
    } else {
      panel.append("p").text("No data found for this game_id.");
    };
  });
};

// Function to run on page load
function init() {
  d3.csv("https://rollernathan.github.io/NFL_2024_Week_1/resources/play_by_play_2024_cleaned.csv").then((data) => {
    console.log(data);
    
    // Use d3 to select the dropdown with id of `#selDataset`
    const dropdown = d3.select("#selDataset");

    // Get the unique game IDs
    const gameIds = [...new Set(data.map(item => item.game_id))];

    // Populate the dropdown with game IDs
    gameIds.forEach(gameId => {
      dropdown.append("option").text(gameId).property("value", gameId);
    });

    // Get the first sample from the list
    const firstGameID = gameIds[0];

    // Build metadata panel with the first sample
    buildMetadata(firstGameID);

  });
}

// Function for event listener
function optionChanged(newGameID) {
  // Build metadata panel each time a new sample is selected
  buildMetadata(newGameID);
}

// Initialize the dashboard
init();
