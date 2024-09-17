DROP TABLE IF EXISTS plays;

CREATE TABLE plays (
	play_id INTEGER PRIMARY KEY,
	game_id VARCHAR(20) NOT NULL,
	posteam VARCHAR(3),
	defteam VARCHAR(3),
	side_of_field VARCHAR (3),
	yardline_100 INTEGER,
	down INTEGER,
	yrdln VARCHAR(10),
	ydstogo INTEGER NOT NULL,
	play_type VARCHAR(15),
	yards_gained INTEGER,
	pass_length VARCHAR(5),
	pass_location VARCHAR(6),
	air_yards INTEGER,
	yards_after_catch INTEGER,
	run_location VARCHAR(6),
	run_gap VARCHAR(6),
	defteam_score INTEGER,
	score_differential INTEGER,
	posteam_score_post INTEGER,
	defteam_score_post INTEGER,
	score_differential_post INTEGER,
	epa DECIMAL(10,9),
	wp DECIMAL(10,9),
	def_wp DECIMAL(10,9),
	home_wp DECIMAL(10,9),
	away_wp DECIMAL(10,9),
	fumble_forced INTEGER,
	fumble_out_of_bounds INTEGER,
	safety INTEGER,
	penalty INTEGER,
	tackled_for_loss INTEGER,
	fumble_lost INTEGER,
	touchdown INTEGER,
	pass_touchdown INTEGER,
	rush_touchdown INTEGER,
	return_touchdown INTEGER,
	field_goal_attempt INTEGER,
	fumble INTEGER,
	passing_yards INTEGER,
	receiving_yards INTEGER,
	rushing_yards INTEGER,
	fixed_drive_result VARCHAR(20) NOT NULL,
	drive_time_of_possession VARCHAR(10),
	drive_end_transition VARCHAR(15),
	qb_epa DECIMAL(10,9)
);

SELECT * FROM plays;