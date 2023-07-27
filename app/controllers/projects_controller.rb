class ProjectsController < ApplicationController
  before_action :set_project, only: [:update, :destroy]
  skip_before_action :authenticate_employee, only: [:index]
  # load_and_authorize_resource

  def index
    projects = Project.all
    render json: projects
  end


  def my_projects

    employee = current_employee
    projects = employee.projects.distinct

    render json: projects
  end 


  def show
    project = Project.find(params[:id])
    render json: project
  end

  def create
    authorize! :create, @project
    @project = current_employee.projects.build(project_params)

    if @project.save
      render json: @project, status: :created
    else
      render json: { errors: @project.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    authorize! :update, @project
    if @project.update(project_params)
      render json: @project
    else
      render json: { errors: @project.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    authorize! :destroy, @project
    @project.destroy
    head :no_content
  end

  private

  def set_project
    @project = Project.find(params[:id])
  end

  def project_params
    params.require(:project).permit(:name, :due_date, :on_time, :team_id)
  end
end

