class AddColorToChoice < ActiveRecord::Migration[5.2]
  def change
    add_column :choices, :color, :string
  end
end
