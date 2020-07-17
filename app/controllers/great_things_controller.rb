class GreatThingsController < ApplicationController
  before_action :set_great_thing, only: [:show, :update, :destroy]
  # before_action :authorize_request, only: :create


  # GET /great_things
  def index
    @great_things = GreatThing.where(user_id: params[:user_id])

    render json: @great_things
  end

  # GET /great_things/1
  def show
    render json: @great_thing
  end

  # POST /great_things
  def create
    @great_thing = GreatThing.new(great_thing_params)
    @user = User.find(params[:user_id])
    @great_thing.user = @user

    if @great_thing.save
      render json: @great_thing, status: :created
    else
      render json: @great_thing.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /great_things/1
  def update
    if @great_thing.update(great_thing_params)
      render json: @great_thing
    else
      render json: @great_thing.errors, status: :unprocessable_entity
    end
  end

  # DELETE /great_things/1
  def destroy
    @great_thing.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_great_thing
      @great_thing = GreatThing.find_by(user_id: params[:user_id], id:params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def great_thing_params
      params.require(:great_thing).permit(:content, :date)
    end
end
