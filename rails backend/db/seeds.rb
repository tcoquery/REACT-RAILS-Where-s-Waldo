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
	{name: "Waldo", found: false, x:1860, y:739, image_id:1},
  {name: "Waldo", found: false, x:2675, y:1286, image_id:2},
  {name: "Waldo", found: false, x:2112, y:831, image_id:3},
  {name: "Waldo", found: false, x:2560, y:1407, image_id:4},
  {name: "Waldo", found: false, x:1215, y:1236, image_id:5},
  {name: "Waldo", found: false, x:843, y:654, image_id:6},
  {name: "Wenda", found: false, x:2321, y:791, image_id:1},
  {name: "Wenda", found: false, x:401, y:1648, image_id:2},
  {name: "Wenda", found: false, x:1773, y:1302, image_id:3},
  {name: "Wenda", found: false, x:1473, y:795, image_id:4},
  {name: "Wenda", found: false, x:886, y:1031, image_id:5},
  {name: "Wenda", found: false, x:757, y:1373, image_id:6},
  {name: "Woof", found: false, x:2042, y:722, image_id:1},
  {name: "Woof", found: false, x:2632, y:1099, image_id:2},
  {name: "Woof", found: false, x:2557, y:1258, image_id:3},
  {name: "Woof", found: false, x:896, y:1365, image_id:4},
  {name: "Woof", found: false, x:1762, y:1789, image_id:5},
  {name: "Woof", found: false, x:1840, y:831, image_id:6},
  {name: "Odlaw", found: false, x:324, y:685, image_id:1},
  {name: "Odlaw", found: false, x:1984, y:1086, image_id:2},
  {name: "Odlaw", found: false, x:1668, y:1546, image_id:3},
  {name: "Odlaw", found: false, x:958, y:1218, image_id:4},
  {name: "Odlaw", found: false, x:213, y:1366, image_id:5},
  {name: "Odlaw", found: false, x:1799, y:1237, image_id:6},
  {name: "Whitebeard", found: false, x:811, y:694, image_id:1},
  {name: "Whitebeard", found: false, x:754, y:950, image_id:2},
  {name: "Whitebeard", found: false, x:2075, y:1315, image_id:3},
  {name: "Whitebeard", found: false, x:210, y:1454, image_id:4},
  {name: "Whitebeard", found: false, x:2342, y:1149, image_id:5},
  {name: "Whitebeard", found: false, x:1839, y:1629, image_id:6}
])