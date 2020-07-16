require 'test_helper'

class GreatThingsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @great_thing = great_things(:one)
  end

  test "should get index" do
    get great_things_url, as: :json
    assert_response :success
  end

  test "should create great_thing" do
    assert_difference('GreatThing.count') do
      post great_things_url, params: { great_thing: { content: @great_thing.content, date: @great_thing.date } }, as: :json
    end

    assert_response 201
  end

  test "should show great_thing" do
    get great_thing_url(@great_thing), as: :json
    assert_response :success
  end

  test "should update great_thing" do
    patch great_thing_url(@great_thing), params: { great_thing: { content: @great_thing.content, date: @great_thing.date } }, as: :json
    assert_response 200
  end

  test "should destroy great_thing" do
    assert_difference('GreatThing.count', -1) do
      delete great_thing_url(@great_thing), as: :json
    end

    assert_response 204
  end
end
