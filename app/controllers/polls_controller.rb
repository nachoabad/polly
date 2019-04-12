class PollsController < ApplicationController
  before_action :authenticate_user!
  
  def index
    @poll = current_user.poll
    @questions = @poll.questions.includes(choices: [:answers])
  end
end
