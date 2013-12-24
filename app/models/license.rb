class License < BrowseApi
  attr_accessor :id, :synonym, :synonym_label, :downloadable, :web_info, :web_label, :created_at, :updated_at, :rights_holder_name, :copyright_text
  
  def self.search(opts = {})
    get("/licenses.json?#{opts.to_param}").collect do |data|
      License.new(data)
    end
  end
  
  def self.find(id)
    return nil if id.nil?
    License.new(get("/licenses/#{id}.json"))
  end
  
  def label
    self.web_label.blank? ? self.synonym : self.web_label
  end
end
