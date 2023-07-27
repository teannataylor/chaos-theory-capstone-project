class SessionsController < ApplicationController
    skip_before_action :authenticate_employee, only: :create

    def create
        employee = Employee.find_by(email: params[:email])
        if employee&.authenticate(params[:password])
          session[:employee_id] = employee.id
          render json: employee, status: :created
        else
          render json: { errors: ["Invalid email or password"] }, status: :unauthorized
        end
      end

    def destroy
        session.delete :employee_id
        head :no_content
    end


end