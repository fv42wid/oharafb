module ApplicationHelper

  def active_link?(action)
    if(action == 'home' && current_page?('/'))
      return 'is-active'
    elsif(current_page?(controller: 'pages', action: action))
      return 'is-active'
    end
  end

end
