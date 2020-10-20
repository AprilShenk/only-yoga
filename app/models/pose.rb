class Pose < ApplicationRecord
  has_and_belongs_to_many :logs
end
