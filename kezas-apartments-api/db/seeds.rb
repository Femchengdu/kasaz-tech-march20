require 'faker'
Apartment.destroy_all


40.times do |index|
    pic_id = Faker::Number.between(from: 300, to: 600)
    pic_url = "https://picsum.photos/id/" + pic_id.to_s + "/200/300"
    suffix = Faker::Lorem.sentence(word_count: 3)
    title_city = Faker::Nation.capital_city 
    city_title = title_city + " "  + suffix
    Apartment.create(
        title: city_title,
        price:  Faker::Number.number(digits: 6),
        sqm:  Faker::Number.number(digits: 3),
        bedroom: Faker::Number.between(from: 1, to: 5),
        bathroom: Faker::Number.between(from: 1, to: 4),
        picture: pic_url
    )
end

p "Created #{Apartment.count} entries {^_^}/"
