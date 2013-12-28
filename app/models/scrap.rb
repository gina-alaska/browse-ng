class Scrap < BrowseApi  
  attr_accessor :source_id, :agency_id, :project_id, :license_id, :downloadable, :scene_gid, :license, :source, :footprint
  
  def self.search(opts = {})
    collect(get("/scraps.json?#{opts.to_param}"))
  end
  
  def self.find(id)
    return nil if id.nil?
    
    Scrap.new(get("/scraps/#{id}.json"))
  end
  
  def footprint=(attributes)
    @footprint = Footprint.new(attributes)
  end
  
  def footprint
    @footprint ||= Footprint.find(self.id)
  end
  
  def license=(attributes)
    @license = License.new(attributes)
  end
  
  def license
    @license ||= License.find(self.license_id)
  end
  
  def source=(attributes)
    @source = Source.new(attributes)
  end
  
  def source
    @source ||= Source.find(self.source_id)
  end  
  
  def related
    self.class.related(self.id)
  end
  
  def self.related(id)
    collect(get("/scraps/#{id}/related"))
  end
  
  def to_param
    "#{self.id}-#{self.scene_gid.try(:gsub, '.', '-')}"
  end
end
