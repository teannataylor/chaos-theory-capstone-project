class TasksController < ApplicationController
    skip_before_action :authenticate_employee, only: [:index, :show]

    def index
        tasks = Task.all
        render json: tasks, status: 200
    end

    def show
        task = Task.find(params[:id])

        render json: task
    end

    def create
        task = current_employee.tasks.create!(task_params)
        authorize! :create, task # Check if the current user is authorized to create a task
        render json: task, status: :created
    end

    def update
        task = current_employee.tasks.find(params[:id])
        authorize! :update, task # Check if the current user is authorized to update the task
        task.update!(task_params)
        render json: task, status: 202
    end 

    def destroy
        task = current_employee.tasks.find(params[:id])
        authorize! :destroy, task # Check if the current user is authorized to destroy the task

        if task.destroy
            head :no_content
        else
            render json: { error: "Task Deletion Failed" }, status: :unprocessable_entity
        end
    end

    private

    def task_params
        params.require(:task).permit(:name, :due_date, :status, :employee_id, :product_id)
    end
end

# t.string "name"
# t.date "due_date"
# t.string "status"
# t.integer "employee_id"
# t.integer "project_id"