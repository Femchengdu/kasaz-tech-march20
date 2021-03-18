require 'rails_helper'

RSpec.describe "Apartments", type: :request do
  # initialize the data
  let!(:apartments){create_list(:apartment, 40)}
  describe "GET /apartments" do
    before {get '/apartments'}
    it 'returns apartments' do
      expect(json).not_to be_empty
      expect(json.size).to eq(40)
    end
    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end
  end
end
