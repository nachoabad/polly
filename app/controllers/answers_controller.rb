class AnswersController < ApplicationController
  def new
    @slug = params[:slug]
    @poll = Poll.find_by(slug: @slug)
  end
  
  def create
    params[:answers].each { |id| Answer.create choice_id: id }
  end
end
