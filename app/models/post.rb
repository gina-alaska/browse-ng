class Post < ActiveRecord::Base
  validates :title, presence: true
  validates :content, presence: true
  
  scope :published, Proc.new { 
    where('published_at < ?', DateTime.now)
  }
  
  def publish!
    self.update_attribute(:published_at, DateTime.now)
  end
  
  def unpublish!
    self.update_attribute(:published_at, nil)
  end
  
  def published?
    !self.published_at.nil? and self.published_at < DateTime.now
  end
end
