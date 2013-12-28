class BrowseApiResults
  attr_accessor :total_pages, :total_records, :collection, :current_page, :inner_window, :outer_window
  
  def initialize(klass, response)
    @klass = klass
    @collection = []
    
    if BrowseApi.valid_response?(response)
      @collection = response.collect do |record| 
        klass.new(record)
      end
    end
    
    @current_page = response.headers['X-Page'].to_i
    @total_pages = response.headers['X-Total-Pages'].to_i
    @total_records = response.headers['X-Total-Records'].to_i
  end
  
  def count
    @collection.count
  end
  
  def each(&block)
    @collection.each do |record|
      yield record
    end
  end
end