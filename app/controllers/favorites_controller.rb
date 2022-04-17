class FavoritesController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid

    def index 
        user = @current_user
        favorites = user.favorited_articles
        render json: favorites
    end

   def create
        favorite = Favorite.create!(favorite_params)
        render json: favorite, status: :created
    end

    def destroy
        favorite = Favorite.find(params[:id]).destroy
        head :no_content
    end

    private 

    def render_invalid(invalid)
        render json: {"errors": invalid.record.errors.full_messages}
    end
    
    def favorite_params
        params.permit(:article_id, :user_id)
    end
end
