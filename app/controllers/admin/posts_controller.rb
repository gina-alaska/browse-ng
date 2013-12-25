class Admin::PostsController < ApplicationController
  before_action :membership_required!
  
  def index
    @posts = Post.order('published_at DESC')
  end
  
  def new
    @post = Post.new
  end
  
  def create
    @post = Post.new(post_params)
    
    respond_to do |format|
      if @post.save
        format.html { redirect_to posts_path }
      else
        format.html { render :new }
      end
    end
  end
  
  def edit
    @post = Post.find(params[:id])
  end
  
  def destroy
    @post = Post.find(params[:id])
    
    respond_to do |format|
      if @post.destroy
        flash[:success] = 'Deleted post'
      else
        flash[:error] = "Unable to delete the post"
      end
      format.html { redirect_to admin_posts_path }
    end
  end
  
  def update
    @post = Post.find(params[:id])
    
    respond_to do |format|
      if @post.update_attributes(post_params)
        format.html { redirect_to posts_path }
      else
        format.html { render :new }
      end
    end
  end  
  
  protected
  
  def post_params
    post = params.require(:post).permit(:title, :content, :published)
    Rails.logger.info post.inspect
    if (published = post.delete(:published).to_i) == 1
      post[:published_at] = DateTime.now
    else
      post[:published_at] = nil
    end
    
    post
  end
end
