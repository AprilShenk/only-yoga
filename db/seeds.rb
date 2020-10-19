# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Pose.destroy_all
Log.destroy_all
User.destroy_all

@user = User.create!(username: 'admin', email: 'admin@email.com', password: '123456')
puts "#{User.count} users created"

@example_log = Log.create!(description: 'Balance was off today', user: @user)
puts "#{Log.count} logs created"

@downward_dog = Pose.create!(name: "Downward Dog", description: "Hands and feet on ground and hips high", difficulty: "Beginner")
puts "#{Pose.count} poses created"

@example_log.poses.push(@downward_dog)