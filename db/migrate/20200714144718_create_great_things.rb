class CreateGreatThings < ActiveRecord::Migration[6.0]
  def change
    create_table :great_things do |t|
      t.string :content
      t.string :date

      t.timestamps
    end
  end
end
