# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
ski_slopes = Map.create(name: "Ski Slopes")

ski_slopes.characters.create(name: "Wizard", x: 210, y: 1440)
ski_slopes.characters.create(name: "Waldo", x:2565, y:1390)
ski_slopes.characters.create(name: "Odlaw", x:955, y:1215)
ski_slopes.characters.create(name: "Wenda", x: 1470, y: 790)
ski_slopes.image.attach(io: File.open(File.join(Rails.root, 'app/assets/images/skiSlopes.jpeg')), filename: "skiSlopes")

summer_time = Map.create(name: "Summer Time")
summer_time.characters.create(name: "Odwal", x: 325, y: 680)
summer_time.characters.create(name: "Waldo", x: 1855, y: 740)
summer_time.characters.create(name: "Wenda", x: 2320, y: 785)
summer_time.image.attach(io: File.open(File.join(Rails.root, '/app/assets/images/summerTime.jpg')), filename: "summerTime")

ski_slopes.scores.create(player_name: "Test score 3", seconds: 15)
ski_slopes.scores.create(player_name: "Test score 1", seconds: 10)
ski_slopes.scores.create(player_name: "Test score 2", seconds: 12)

summer_time.scores.create(player_name: "Test score 3", seconds: 15)
summer_time.scores.create(player_name: "Test score 1", seconds: 10)
summer_time.scores.create(player_name: "Test score 2", seconds: 12)