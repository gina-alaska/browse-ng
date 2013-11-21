class ScrapsController < ApplicationController
  respond_to :html
  
  def index
    @scraps = Scrap.order('scraps.updated_at DESC')
    @scraps = @scraps.includes(:footprint, :license)
    params[:scene_gid].split(' ').each do |word|
      @scraps = @scraps.where('footprints.scene_gid ilike ?', "%#{word}%")
    end
    @scraps = @scraps.where('licenses.downloadable = ?', true) if params[:public]
    @scraps = @scraps.where('licenses.id = ?', params[:license_id]) if params[:license_id].present?
    @scraps = @scraps.paginate(page: params[:page])
    
    @licenses = License.order('synonym ASC')
    
    respond_with(@scraps)
  end
  
  def show
    @scrap = Scrap.find(params[:id])
    
    render :layout => 'map'
  end
end
