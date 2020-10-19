class LogsController < ApplicationController
  before_action :set_log, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:create, :update, :destroy]

  # GET /logs
  def index
    @logs = Log.all

    render json: @logs
  end

  # GET /logs/1
  def show
    render json: @log
  end

  # POST /logs
  def create
    @log = Log.new(log_params)
    @log.user = @current_user

    if @log.save
      render json: @log, status: :created, location: @log
    else
      render json: @log.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /logs/1
  def update
    if @log.update(log_params)
      render json: @log
    else
      render json: @log.errors, status: :unprocessable_entity
    end
  end

  def add_pose
    @log = Log.find(params[:id])
    @pose = Pose.find(params[:pose_id])
    @log.pose << @pose

    render json: @log, include: :poses
  end

  # DELETE /logs/1
  def destroy
    @log.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_log
      @log = Log.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def log_params
      params.require(:log).permit(:description)
    end
end
