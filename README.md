# NFL_2024_Week_1
Project 3 Team 8 (Question- 1)
The chart displays the offensive and defensive performances (measured by EPA) for each NFL team in Week 1, with percentages added on the bars. It can be clearly analysed that:

Best Offensive Team: The Tampa Bay Buccaneers (TB) had the highest offensive EPA, meaning they added the most expected points on offense in Week 1.

Best Defensive Team: The New Orleans Saints (NO) had the best defensive performance, allowing the fewest expected points based on EPA.

Green bars represent the offensive EPA, showing how effective each team's offense was. The percentage next to each green bar indicates the proportion of total offensive EPA that team contributed.
Red bars represent defensive EPA (shown as negative values for easier comparison). The percentage next to each red bar represents the proportion of total defensive EPA allowed by the team, where a lower percentage reflects better defense.

If we consider both offense and defense together, Tampa Bay Buccaneers (TB) stands out as they had the highest offensive EPA and a relatively low defensive EPA, making them strong overall performers in Week 1. However, for defense alone, the New Orleans Saints were the best, as they allowed very few points. 

For the analysis, the pandas functions used are read_csv(), groupby(), sum(), reset_index(), rename(), merge(), and sort_values(), along with basic arithmetic and column operations to compute the required statistics. Here are some examples:
1. pd.read_csv(): To reads a CSV file and loads it into a pandas DataFrame.
2. DataFrame.groupby(): To groups the data by one or more columns (in this case, by 'posteam' and 'defteam') and allows for 
   aggregation operations like sum.
3. DataFrame.sum(): To sums the values of the grouped data (used to calculate total offensive and defensive EPA).
4. DataFrame.reset_index(): To resets the index of the DataFrame after a groupby() operation to turn the index into regular 
   columns.
5. DataFrame.rename(): To renames the columns of the DataFrame (used to rename the epa column to offensive_epa or 
   defensive_epa).
6. pd.merge(): To merges two DataFrames (offensive and defensive performance data) based on common columns (posteam and 
   defteam).
7. DataFrame.sort_values(): To sorts the DataFrame by the specified column (in this case, offensive_epa) for better 
    visualization.
8. DataFrame['column'] / DataFrame['column'].sum(): To calculates the percentage contribution of each team's EPA to the 
   total offensive or defensive EPA.
   






