class CreateVotes < ActiveRecord::Migration
  def change
    create_table :votes do |t|
      t.integer :value
      t.integer :votable_id
      t.string :votable_type

      t.timestamps null: false
    end
  end
end
