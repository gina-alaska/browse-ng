class ScrapsController < ApplicationController
  respond_to :html
  
  def index
    # @scraps = Scrap.order('scraps.updated_at DESC')
    # @scraps = @scraps.includes(:footprint, :license)
    # params[:scene_gid].split(' ').each do |word|
    #   @scraps = @scraps.where('footprints.scene_gid ilike ?', "%#{word}%")
    # end if params[:scene_gid].present?
    # @scraps = @scraps.where('licenses.downloadable = ?', true) if params[:public]
    # @scraps = @scraps.where('licenses.id = ?', params[:license_id]) if params[:license_id].present?
    # @scraps = @scraps.paginate(page: params[:page])
    
    @scraps = Scrap.search(api_params)
    # @scraps = @scraps.paginate(page: params[:page] || 1)
    
    respond_with(@scraps)
  end
  
  def show
    @scrap = Scrap.find(params[:id])
    
    @related_scraps = @scrap.related
    @related_scraps ||= []
  end
  
  protected
  
  def license_list
    @licenses = License.search
  end
  
  helper_method :license_list
  
  def api_params
    @api_params = params.permit(:q, :license_id, :page, :public)
    @api_params['page'] ||= 1
    
    @api_params
  end
end
