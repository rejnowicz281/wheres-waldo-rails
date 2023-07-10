# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
ski_slopes = Map.create(name: "Ski Slopes", filename: "skiSlopes")

ski_slopes.characters.create(name: "Wizard", x: 210, y: 1440)
ski_slopes.characters.create(name: "Waldo", x:2565, y:1390)
ski_slopes.characters.create(name: "Odlaw", x:955, y:1215)
ski_slopes.characters.create(name: "Wenda", x: 1470, y: 790)

summer_time = Map.create(name: "Summer Time", filename: "summerTime")
summer_time.characters.create(name: "Odwal", x: 325, y: 680)
summer_time.characters.create(name: "Waldo", x: 1855, y: 740)
summer_time.characters.create(name: "Wenda", x: 2320, y: 785)

ski_slopes.scores.create(player_name: "Test score 3", seconds: 15)
ski_slopes.scores.create(player_name: "Test score 1", seconds: 10)
ski_slopes.scores.create(player_name: "Test score 2", seconds: 12)

summer_time.scores.create(player_name: "Test score 3", seconds: 15)
summer_time.scores.create(player_name: "Test score 1", seconds: 10)
summer_time.scores.create(player_name: "Test score 2", seconds: 12)