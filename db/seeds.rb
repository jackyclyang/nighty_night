# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
GreatThing.destroy_all
ToDo.destroy_all

@jacky = User.create!(name:'Jacky', email:'jacky@email.com', password:'123456')
jackyGreatThing = GreatThing.create!(content:'I had some super sweet and fresh cherries today', date:'Jul 14, 2020', user:@jacky)
