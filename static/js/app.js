// Build the metadata panel
function buildMetadata(sample) {
  d3.csv("https://rollernathan.github.io/NFL_2024_Week_1/resources/play_by_play_2024_cleaned.csv").then((data) => {

    // get the metadata field
    const metadata = data.metadata;

    // Filter the metadata for the object with the desired sample number
    const result = metadata.find(entry => entry.id === parseInt(sample));

    // Use d3 to select the panel with id of `#sample-metadata`
    const panel = d3.select("#play_data");

    // Use `.html("") to clear any existing metadata
    panel.html("");

    // Inside a loop, you will need to use d3 to append new
    // tags for each key-value in the filtered metadata.
    Object.entries(result).forEach(([key, value]) => {
      panel.append("p").text(`${key.toUpperCase()}: ${value}`);
    });
  });
}

// Function to run on page load
function init() {
  d3.csv("https://rollernathan.github.io/NFL_2024_Week_1/resources/play_by_play_2024_cleaned.csv").then((data) => {
    console.log(data);
    
    // Get the names field
    const names = data.names;

    // Use d3 to select the dropdown with id of `#selDataset`
    const dropdown = d3.select("#selDataset");

    // Use the list of sample names to populate the select options
    // Hint: Inside a loop, you will need to use d3 to append a new
    // option for each sample name.
    names.forEach(name => {
      dropdown.append("option").text(name).property("value", name);
    });

    // Get the first sample from the list
    const firstSample = names[0];

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
