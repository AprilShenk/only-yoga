class CreatePoses < ActiveRecord::Migration[6.0]
  def change
    create_table :poses do |t|
      t.string :name
      t.string :description
      t.string :difficulty

      t.timestamps
    end
  end
end
