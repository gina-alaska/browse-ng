class PostsController < ApplicationController
  def index
    @posts = Post.published.order('published_at DESC').take(1)
  end
  
  def show
    @post = Post.find(params[:id])
  end
end
