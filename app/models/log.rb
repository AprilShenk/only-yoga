class Log < ApplicationRecord
  belongs_to :user
  has_and_belongs_to_many :poses
  accepts_nested_attributes_for :poses
end
