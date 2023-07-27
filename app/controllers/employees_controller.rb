class EmployeesController < ApplicationController
    skip_before_action :authenticate_employee, only: [:index, :show, :create]


def index
    employees = Employee.all
    render json: employees
end

def create
    employee = Employee.create!(employee_params)
    session[:employee_id] = employee.id
    render json: employee, status: :created
end 

def show
    employee = Employee.find_by(id: params[:id])
    render json: employee
  end

private

def employee_params
    params.permit(:name, :email, :password_confirmation, :is_admin, :team_id)
end 

end
