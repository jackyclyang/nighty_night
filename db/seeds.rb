# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
GreatThing.destroy_all

@jacky = User.create!(name:'Jacky', email:'jacky@email.com', password:'123456')

@jackyGreatThings = GreatThing.create!(content:'i saw a cute dog today', date:'July 10, 2020', user:@jacky)

@jackyToDo = ToDo.create!(content:'finish part 2', status: 'incomplete', user:@jacky)