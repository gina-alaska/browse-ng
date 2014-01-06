class UsersController < ApplicationController
  before_filter :login_required!
  
  def show
    @user = current_user
  end
  
  def disable_provider
    current_user.authorizations.where(provider: params[:provider]).first.try(:destroy)
    
    redirect_to preferences_path
  end
end
