# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) The code below defines the BlogPostsController class which derives from the ApplicationController class. Next, the index is defined. 
class BlogPostsController < ApplicationController
  def index
    # ---2) The instance variable "@posts" stores all of the blog posts from the database using "BlogPost.all." That instance variable can be accessed in the view for index. That will allow us to display all of the blog posts. 
    @posts = BlogPost.all
  end

  # ---3) The show action is defined. In that, the BlogPost.find will allow us to retrieve a single blog post from BlogPost.all. The params[:id] let's us identify which blog post we want to retrieve.
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) The new action is defined. This gives us a new instance of the model BlogPost and puts it in @post. This new instance variable will hold a new blog post.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) The create action is defined. This will create a new blog post in the database using BlogPost.create. The blog_post_params will retrieve the necessary parameters from the request. When the blog post is created, we will be redirected to the show action for that specific post.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6) The edit action is defined. This will grab a single blog post from the database using the BlogPost.find method and stores it in @post. The params[:id] value is used to identify which blog post we want to refer tp. This instance variable can be accessed in the view template for the edit action to display a form for editing an existing blog post.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) The update action is defined. The action updates an existing blog post in the datanase using the update method on the instance variable "@post" and blog_post_params to get the parameters from the request. If everything goes according to plans, the blog post will be updated successfully and the user will be redirected to the "show" action.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8) The destroy action is defined. This will fetch a single blog post from the database BlogPost.find. When we indentify which blog post in params[:id], we will be able to delete it from the database. If the blog post is successfully deleted, the user will be redirected to the index to show a list of the remaining blog posts.
      redirect_to blog_posts_path
    end
  end

  # ---9) The private keyword will allow us to call the method within the class, not outside of it, making blog_post_params a private method.
  private
  def blog_post_params
    # ---10) The blog_post_params method is defined. This retrieves the necessary parameters from the request using the method below. The will ensure that only the title and content parameters can be passed through the request. Other parameters cannot be used because it will change the blog post. 
    params.require(:blog_post).permit(:title, :content)
  end
end
