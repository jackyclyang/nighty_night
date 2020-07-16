class AddUserToToDo < ActiveRecord::Migration[6.0]
  def change
    add_reference :to_dos, :user, null: false, foreign_key: true
  end
end
