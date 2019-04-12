class ApplicationController < ActionController::Base
  
  protected
  
  def after_sign_in_path_for(resource)
    polls_path
  end
  
  def after_sign_up_path_for(resource)
    thanks_path
  end
end
