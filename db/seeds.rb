# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user = User.new
user.email = 'user1@mail.com'
user.password = 'useruser'
user.password_confirmation = 'useruser'
user.save!

poll = Poll.create({title: 'Conferencia Volkwageros', slug: 'vw', user: user})

poll.questions.create({sentence: '¿Cómo te pareció el evento', position: 1})
poll.questions.create({sentence: 'El precio fue...', position: 2})
poll.questions.create({sentence: '¿Volverías el año próximo?', position: 3})

Question.first.choices.create({sentence: 'Excelente', position: 1})
Question.first.choices.create({sentence: 'Normal', position: 2})
Question.first.choices.create({sentence: 'Pésimo', position: 3})

Question.second.choices.create({sentence: 'Barato', position: 1})
Question.second.choices.create({sentence: 'Justo', position: 2})
Question.second.choices.create({sentence: 'Caro', position: 3})

Question.third.choices.create({sentence: 'Seguro', position: 1})
Question.third.choices.create({sentence: 'No sé', position: 2})
Question.third.choices.create({sentence: 'No', position: 3})AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password') if Rails.env.development?