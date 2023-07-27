class TeamsController < ApplicationController
  skip_before_action :authenticate_employee, only: [:index, :show]

  def index
      teams = Team.all
      render json: teams
  end

  def show
      team = Team.find(params[:id])
      render json: team, include: :employees
  end

  def create
      team = Team.create!(team_params)
      authorize! :create, team # Check if the current user is authorized to create a team
      render json: team, status: :created
  end

  private

  def team_params
      params.permit(:name, :department, :size)
  end
end

