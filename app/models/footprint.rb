class Footprint < BrowseApi
  attr_accessor :id, :start_time, :end_time, :source_res, :created_at, :updated_at, :scene_gid, :wkt
  
  def self.find(scrap_id)
    return nil if scrap_id.nil?
    
    Footprint.new(get("/scraps/#{scrap_id}/footprint"))
  end
end
