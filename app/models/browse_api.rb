class BrowseApi
  include ActiveModel::Model  
  include HTTParty
  base_uri ENV['BROWSE_API_URL'] || 'http://browse-api.dev'
  format :json
  
  attr_accessor :id, :created_at, :updated_at
  
  def initialize(response = {})
    if BrowseApi.valid_response?(response)
      super
    else
      super({})
    end
  end
  
  def new_record?
    !persisted?
  end

  def cache_key
    case
    when new_record?
      "#{self.class.model_name.cache_key}/new"
    when timestamp = self[:updated_at]
      timestamp = timestamp.utc.to_s(:number)
      "#{self.class.model_name.cache_key}/#{id}-#{timestamp}"
    else
      "#{self.class.model_name.cache_key}/#{id}"
    end
  end
  
  def persisted?
    !self.id.nil?
  end
  
  def updated_at
    Rails.logger.info 'test'
    DateTime.parse(@updated_at)
  end
  
  def created_at
    DateTime.parse(@created_at)
  end
  
  def [](field)
    self.send(field)
  end
  
  def self.to_model
    self.to_s.underscore
  end
  
  def self.valid_response?(response)
    return true unless response.is_a? HTTParty::Response
    
    case response.code
    when 400...600
      return false
    end
      
    return true
  end
  
  def self.collect(response)
    BrowseApiResults.new(self, response)
  end  
end