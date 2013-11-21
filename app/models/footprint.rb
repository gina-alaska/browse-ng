class Footprint < ActiveRecord::Base
  belongs_to :scrap
  
  def wkt
    @wkt ||= ActiveRecord::Base.connection.execute("SELECT ST_AsText('#{self.llgeom}') as wkt").first['wkt']
  end
end
