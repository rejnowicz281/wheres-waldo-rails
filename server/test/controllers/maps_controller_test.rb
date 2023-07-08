require "test_helper"

class MapsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @map = maps(:one)
  end

  test "should get index" do
    get maps_url, as: :json
    assert_response :success
  end

  test "should create map" do
    assert_difference("Map.count") do
      post maps_url, params: { map: { name: @map.name, url: @map.url } }, as: :json
    end

    assert_response :created
  end

  test "should show map" do
    get map_url(@map), as: :json
    assert_response :success
  end
end
