# Browse Website 

This is the web application for accessing the browse archive

## Requirements

* Ruby 1.9.3+
* Rails 4.0.2

## Setup

The following environment variables are needed enable Google OAuth2 access, these can be found by creating a new application at https://cloud.google.com/console

* GOOGLE_KEY
* GOOGLE_SECRET

The following environment variables are needed to access the database, if not specified it will attempt to use a local database server

* RAILS_DB_USER
* RAILS_DB_PASSWD
* RAILS_DB_HOST
* RAILS_DB_PORT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request