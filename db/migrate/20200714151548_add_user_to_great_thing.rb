class AddUserToGreatThing < ActiveRecord::Migration[6.0]
  def change
    add_reference :great_things, :user, null: false, foreign_key: true
  end
end
