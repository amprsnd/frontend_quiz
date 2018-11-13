require 'sinatra'
require 'sinatra/reloader'
require 'nokogumbo'
require 'json'

class Parser < Sinatra::Base
  configure :development do
    register Sinatra::Reloader
  end

  get '/' do
    quiz_data = {}
    quiz_html = Nokogiri::HTML5.get('http://davidshariff.com/quiz/')
  
    quiz_html.css('.skill-area').each do |area|
      # each skill area
      skill = area['data-skill'].to_s.downcase
      quiz_data[skill] = []

      # each questions in skill area
      area.css('article').each_with_index do |q, i|
        if q['class'].nil? || q['class'] == 'no-code-sample'
          
          # fix className for code examples
          q.css('.prettyprint').each do |pre|
            pre['class'] = pre['class'].sub('lang', 'language')
          end
          
          # question text and code
          question = {
            code: q.css('.prettyprint'),
            question: q.css('p'),
            answers: []
          }
          # each answers
          q.css('.answers li').each_with_index do |a, i|
            question[:answers] << {
              answer: a.css('span').inner_html,
              correct: a.css('.correct-btn').length > 0 ? true : false
            }
          end
          quiz_data[skill] << question
        end
      end
    end
    content_type :json
    JSON.pretty_generate(quiz_data)
  end

end

Parser.run!