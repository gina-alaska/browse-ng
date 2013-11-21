class Scrap < ActiveRecord::Base
  has_one :footprint
  belongs_to :license
  
  def scene_gid
    if self.footprint.scene_gid.nil?
      self.scene_gid
    else
      self.footprint.scene_gid
    end
  end
end
