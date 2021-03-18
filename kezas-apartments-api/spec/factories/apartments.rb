

FactoryBot.define do

    pic_id = Faker::Number.between(from: 300, to: 800)
    pic_url = "https://picsum.photos/id/" + pic_id.to_s + "/200/300"
  
    suffix = Faker::Lorem.sentence(word_count: 3)
    title_city = Faker::Nation.capital_city 
    city_title = title_city + " "  + suffix
  
    factory :apartment do
        title {city_title}
        price { Faker::Number.number(digits: 6) }
        sqm { Faker::Number.number(digits: 3) }
        bedroom {Faker::Number.between(from: 2, to: 5)}
        bathroom {Faker::Number.between(from: 1, to: 3)}
        picture {pic_url}
    end
end