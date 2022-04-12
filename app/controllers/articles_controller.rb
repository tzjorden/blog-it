class ArticlesController < ApplicationController
    skip_before_action :authorize, only: :create


    def index 
        render json: Article.all
    end


    def create
        article = Article.create(article_params)
        if article.valid?
          render json: article, status: :created
        else
          render json: { errors: article.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def show
        article = Article.find(params[:id])
        render json: article
    end

    def destroy
        article = Article.find(params[:id]).destroy
        head :no_content
    end
    
      private
    
      def article_params
        params.permit(:title, :content)
      end
end
