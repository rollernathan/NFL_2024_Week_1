// Build the metadata panel
function buildMetadata(playId) {
  d3.csv("https://rollernathan.github.io/NFL_2024_Week_1/resources/play_by_play_2024_cleaned.csv").then((data) => {

  // Find the data corresponding to the selected play_id
  const result = data.find(item => item.play_id === playId);

    // Use d3 to select the panel with id of `#play_data`
    const panel = d3.select("#play_data");

    // Use `.html("") to clear any existing metadata
    panel.html("");

    // Check if result is found
    if (result) {
      // Append each key-value pair as a paragraph
      Object.entries(result).forEach(([key, value]) => {
        panel.append("p").text(`${key.toUpperCase()}: ${value}`);
      });
    } else {
      panel.append("p").text("No data found for this play_id.");
    };
  });
};

// Function to run on page load
function init() {
  d3.csv("https://rollernathan.github.io/NFL_2024_Week_1/resources/play_by_play_2024_cleaned.csv").then((data) => {
    console.log(data);
    
    // Use d3 to select the dropdown with id of `#selDataset`
    const dropdown = d3.select("#selDataset");

    // Use the list of sample names to populate the select options
    // Hint: Inside a loop, you will need to use d3 to append a new
    // option for each sample name.
    data.forEach(item => {
      dropdown.append("option").text(item.play_id).property("value", item.play_id);
    });

    // Get the first sample from the list
    const firstSample = data[0].play_id;

    // Build metadata panel with the first sample
    buildMetadata(firstSample);

  });
}

// Function for event listener
function optionChanged(newSample) {
  // Build metadata panel each time a new sample is selected
  buildMetadata(newSample);
}

// Initialize the dashboard
init();
