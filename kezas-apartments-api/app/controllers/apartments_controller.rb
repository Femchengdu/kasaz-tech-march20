class ApartmentsController < ApplicationController
    def list
        @apartments = Apartment.all
        json_response(@apartments)
    end
end
