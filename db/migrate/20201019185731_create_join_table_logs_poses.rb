class CreateJoinTableLogsPoses < ActiveRecord::Migration[6.0]
  def change
    create_join_table :logs, :poses do |t|
      # t.index [:log_id, :pose_id]
      # t.index [:pose_id, :log_id]
    end
  end
end
