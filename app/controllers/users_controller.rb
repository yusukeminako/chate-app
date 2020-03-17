class UsersController < ApplicationController
  def index
  end

  def edit
  end
  def update
    if current_user.update(user_params)
      redirect_to '/'
    else
      render :edit
    end
  end



  def incrementalsearch
    return nil if params[:keyword] == ""
    # モデル名.where('カラム名 like ?','%検索したい文字列%')文字列のどの部分にでも検索したい文字列が含まれていればOK
    # limit句は取得データの上限設定指定
    @users = User.where(['name LIKE ?', "%#{params[:keyword]}%"] ).where.not(id: current_user.id).limit(10)
    
    respond_to do |format|
      format.html
      format.json 
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email)
  end
end
