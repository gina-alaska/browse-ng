class License < ActiveRecord::Base
  has_many :scraps
  
  def label
    self.web_label.blank? ? self.synonym : self.web_label
  end
end
