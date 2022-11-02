class Api::V1::MessagesController < Api::V1::ApplicationController
    def greeting
        @greetings = Greeting.all
        render json: {status: 'SUCCESS', message: 'Messages Loaded', data: @greetings}, status: :ok
    end
  end