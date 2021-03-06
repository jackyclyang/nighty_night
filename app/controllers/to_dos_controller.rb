class ToDosController < ApplicationController
  before_action :set_to_do, only: [:show, :update, :destroy]
  # before_action :authorize_request, only: :create

  # GET /to_dos
  def index
    @to_dos = ToDo.where(user_id: params[:user_id])

    render json: @to_dos
  end

  # GET /to_dos/1
  def show
    render json: @to_do
  end

  # POST /to_dos
  def create
    @to_do = ToDo.new(to_do_params)
    @user = User.find(params[:user_id])
    @to_do.user = @user

    if @to_do.save
      render json: @to_do, status: :created
    else
      render json: @to_do.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /to_dos/1
  def update
    if @to_do.update(to_do_params)
      render json: @to_do
    else
      render json: @to_do.errors, status: :unprocessable_entity
    end
  end

  # DELETE /to_dos/1
  def destroy
    @to_do.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_to_do
      @to_do = ToDo.find_by(user_id: params[:user_id], id:params[:id])
      # @to_do = @to_dos.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def to_do_params
      params.require(:to_do).permit(:content, :status)
    end
end
