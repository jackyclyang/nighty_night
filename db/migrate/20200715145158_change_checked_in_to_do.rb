class ChangeCheckedInToDo < ActiveRecord::Migration[6.0]
  def change
    rename_column :to_dos, :checked, :status
  end
end
