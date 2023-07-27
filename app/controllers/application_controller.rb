class ApplicationController < ActionController::API
    include ActionController::Cookies
    include CanCan::Ability
  
    before_action :authenticate_employee
    before_action :set_current_ability
    rescue_from CanCan::AccessDenied, with: :handle_access_denied
  
    private
    # cancancan ability
    def set_current_ability
      @current_ability = Ability.new(current_employee)
      puts "Setting current ability for employee with id: #{current_employee&.id}"
      end
    
      # Authentication using before_action
      def authenticate_employee
        unless current_employee
          render json: { errors: "User not authenticated" }, status: :unauthorized
        end
      end
    
      def current_employee
        @current_employee ||= begin
          employee_id = session[:employee_id]
          puts "Session employee_id: #{employee_id}"
          Employee.find_by(id: employee_id)
        end
      end
      
      # Error handling for access denied
      def handle_access_denied(exception)
        render json: { errors: "Access denied: #{exception.message}" }, status: :forbidden
      end
  end
  