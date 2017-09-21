class CreateGames < ActiveRecord::Migration[5.1]
  def change
    create_table :games do |t|
      t.datetime :time
      t.string :opponent
      t.string :home_away

      t.timestamps
    end
  end
end
