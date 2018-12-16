class CreateQuestions < ActiveRecord::Migration[5.2]
  def change
    create_table :questions do |t|
      t.string :sentence
      t.integer :position
      t.references :poll, foreign_key: true

      t.timestamps
    end
  end
end
