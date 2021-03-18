FROM ruby:2.5
RUN apt-get update -qq && apt-get install -y nodejs postgresql-client
WORKDIR /kezas
COPY Gemfile .
COPY Gemfile.lock .
RUN bundle install
COPY . .
EXPOSE 3030
CMD [ "rails", "server", "-b", "0.0.0.0" ]