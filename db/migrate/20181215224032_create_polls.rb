class CreatePolls < ActiveRecord::Migration[5.2]
  def change
    create_table :polls do |t|
      t.string :title
      t.string :slug
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
