class CreateApartments < ActiveRecord::Migration[6.1]
  def change
    create_table :apartments do |t|
      t.string :title
      t.integer :price
      t.integer :sqm
      t.integer :bedroom
      t.integer :bathroom
      t.string :picture

      t.timestamps
    end
  end
end
