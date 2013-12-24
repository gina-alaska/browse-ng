class PostsController < ApplicationController
  def index
    @posts = Post.published.order('published_at DESC').take(1)
  end
  
  def show
    @post = Post.find(params[:id])
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
