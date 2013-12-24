class Admin::MembershipsController < ApplicationController
  before_action :set_admin_membership, only: [:show, :edit, :update, :destroy]

  # GET /admin/memberships
  def index
    @memberships = Membership.all
  end

  # GET /admin/memberships/1
  def show
  end

  # GET /admin/memberships/new
  def new
    @membership = Membership.new
  end

  # GET /admin/memberships/1/edit
  def edit
  end

  # POST /admin/memberships
  def create
    @membership = Membership.new(admin_membership_params)

    respond_to do |format|
      if @membership.save
        format.html { redirect_to admin_memberships_path, notice: 'Membership was successfully created.' }
      else
        format.html { render action: 'new' }
      end
    end
  end

  # PATCH/PUT /admin/memberships/1
  def update
    respond_to do |format|
      if @membership.update(admin_membership_params)
        format.html { redirect_to admin_memberships_path, notice: 'Membership was successfully updated.' }
      else
        format.html { render action: 'edit' }
      end
    end
  end

  # DELETE /admin/memberships/1
  def destroy
    @membership.destroy
    respond_to do |format|
      format.html { redirect_to admin_memberships_url }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_admin_membership
      @membership = Membership.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def admin_membership_params
      params.require(:membership).permit(:email)
    end
end
