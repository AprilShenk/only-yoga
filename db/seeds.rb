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

@downward_dog = Pose.create!(name: "Downward Dog", description: "On your hands and knees bring your hands slightly in front of shoulders. Turn your toes under and push your knees away from the floor bring your hips high and straightening your back.", difficulty: "Beginner", image: "https://www.yogajournal.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_620/MTQ3MTU2NzMwOTA2NjgyODMw/2hp_290_1721_bjk.webp")

@bridge_pose = Pose.create!(name: "Bridge", description: "With knees bent lift hips keeping shoulders on ground. Move sholders together and lace fingers under.", difficulty: "Beginner", image: "https://www.yogajournal.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_860/MTQ3MTc0Njc5MDM4MTQxOTAy/2hp_286_0621_bjk.webp")

@forward_fold = Pose.create!(name: "Forward Fold", description: "Standing with feet over hips, bend at the hips bringing your head towards the ground", difficulty: "Beginner", image: "https://www.yogajournal.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_620/MTQ2MTgwNzIwNzk5NTI0Mzg0/hpforwardbend2.webp")

@childs_pose = Pose.create!(name: "Child's Pose", description: "Kneel with your kness slightly wider than your hips and big toes touching. Reach hands towards the front of the mat and lengthen your spine.", difficulty: "Beginner", image: "https://www.yogajournal.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_620/MTQ3MTU3MzE1MDIyMjM1NDM5/3yp_287_6604_gn_bjk.webp")

@cobra = Pose.create!(name: "Cobra", description: "Lay face down and place hands under shoulders. With your elbows tucked in lift up the chest.", difficulty: "Beginner", image: "https://www.yogajournal.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_620/MTQ3MTU3MjczOTUxNjEwMzE4/3yp_287_6710_gn_bjk.webp")

@crow_pose = Pose.create!(name: "Crow Pose", description: "Starting in a squat with knees wide and feet together. Tilt torso forward and lift hips allowing knees to rest on tricpes.Bring feet off the groud.", difficulty: "Intermediate", image: "https://www.yogajournal.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_620/MTY3ODI3NjE1MDA3MTIyNzA1/ccd05826.webp")

@supported_shoulderstand = Pose.create!(name: "Supported Shoulderstand", description: "Laying on your back, bend your knees. Press your arms against the floor and push your feet away bringing yoru thighs in front of your torso. Continue to bring your legs forward and find balance as you being to straighten supporting your back with your hands.", difficulty: "Beginner", image: "https://www.yogajournal.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_620/MTQ3MTc4MTM4NjM0Mjk5MTgz/2anatomy_284_05_fnl.webp")

@plow_pose = Pose.create!(name: "Plow Pose", description: "Starting from supported shoulderstand bend at hips and slowly lower your toes above your head. Rlease your hands from your back and clasp opposite of your feet.", difficulty: "Intermediate", image: "https://www.yogajournal.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_450/MTQ2MTgwNzcyNjA1MzM5MTY4/plow-pose-halasana.webp")
puts "#{Pose.count} poses created"

@example_log.poses.push(@downward_dog)