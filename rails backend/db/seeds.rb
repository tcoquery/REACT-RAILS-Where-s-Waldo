# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
images = ["Beach", "Ski", "Track", "Fruit", "Space", "Hollywood"].sort

images.each do |image|
	Image.create(title: image)
end

characters = Character.create([
	{name: "Waldo", found: false, x:1591, y:539, image_id:1},
  {name: "Waldo", found: false, x:2115, y:883, image_id:2},
  {name: "Waldo", found: false, x:1755, y:595, image_id:3},
  {name: "Waldo", found: false, x:2043, y:963, image_id:4},
  {name: "Waldo", found: false, x:1185, y:856, image_id:5},
  {name: "Waldo", found: false, x:953, y:484, image_id:6},
  {name: "Wenda", found: false, x:1887, y:570, image_id:1},
  {name: "Wenda", found: false, x:667, y:1112, image_id:2},
  {name: "Wenda", found: false, x:1540, y:895, image_id:3},
  {name: "Wenda", found: false, x:1346, y:576, image_id:4},
  {name: "Wenda", found: false, x:973, y:725, image_id:5},
  {name: "Wenda", found: false, x:892, y:936, image_id:6},
  {name: "Woof", found: false, x:1709, y:525, image_id:1},
  {name: "Woof", found: false, x:2086, y:764, image_id:2},
  {name: "Woof", found: false, x:2038, y:867, image_id:3},
  {name: "Woof", found: false, x:981, y:935, image_id:4},
  {name: "Woof", found: false, x:1534, y:1205, image_id:5},
  {name: "Woof", found: false, x:1577, y:593, image_id:6},
  {name: "Odlaw", found: false, x:615, y:502, image_id:1},
  {name: "Odlaw", found: false, x:1674, y:757, image_id:2},
  {name: "Odlaw", found: false, x:1472, y:1048, image_id:3},
  {name: "Odlaw", found: false, x:1017, y:837, image_id:4},
  {name: "Odlaw", found: false, x:546, y:932, image_id:5},
  {name: "Odlaw", found: false, x:1555, y:848, image_id:6},
  {name: "Whitebeard", found: false, x:928, y:510, image_id:1},
  {name: "Whitebeard", found: false, x:891, y:668, image_id:2},
  {name: "Whitebeard", found: false, x:1732, y:898, image_id:3},
  {name: "Whitebeard", found: false, x:542, y:981, image_id:4},
  {name: "Whitebeard", found: false, x:1901, y:795, image_id:5},
  {name: "Whitebeard", found: false, x:1580, y:1107, image_id:6}
])