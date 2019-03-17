class PollsController < ApplicationController
  def index
    @poll = current_user.poll
    @questions = @poll.questions.includes(choices: [:answers])
  end
end
