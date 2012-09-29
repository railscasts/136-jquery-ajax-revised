# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Task.create! name: "Meet Mr. Miyagi", complete: true
Task.create! name: "Paint the fence", complete: true
Task.create! name: "Wax the car"
Task.create! name: "Sand the deck"
