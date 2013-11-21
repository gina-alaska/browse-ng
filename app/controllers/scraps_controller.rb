class ScrapsController < ApplicationController
  respond_to :html
  
  def index
    @scraps = Scrap.order('scraps.updated_at DESC')
    @scraps = @scraps.includes(:footprint, :license)
    @scraps = @scraps.where('footprints.scene_gid ilike ?', "%#{params[:scene_gid]}%")
    @scraps = @scraps.where('licenses.downloadable = ?', true) if params[:public]
    @scraps = @scraps.where('licenses.id = ?', params[:license_id]) if params[:license_id].present?
    @scraps = @scraps.paginate(page: params[:page])
    
    @licenses = License.order('synonym ASC')
    
    respond_with(@scraps)
  end  
end
