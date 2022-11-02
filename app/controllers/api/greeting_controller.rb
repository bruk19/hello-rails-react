# frozen_string_literal: true

module Api
  module V1
    class MessagesController < Api::V1::ApplicationController
      def greeting
        @greetings = Greeting.all
        render json: { status: 'SUCCESS', message: 'Messages Loaded', greeting: @greetings }, status: :ok
      end
    end
  end
end
