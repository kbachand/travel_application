json.array!(@destinations) do |destination|
  json.extract! destination, :id, :city, :country, :description, :latitude, :longitude, :address
  json.url destination_url(destination, format: :json)
end
