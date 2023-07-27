class TeamSerializer < ActiveModel::Serializer
  attributes :id, :name, :department, :size
  
    has_many :projects
    has_many :employees
    has_many :tasks, through: :employees
end
