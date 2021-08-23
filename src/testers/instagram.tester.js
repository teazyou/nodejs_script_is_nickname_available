import RequestHelper from '../helpers/request.helper'

const
  browsingTest = false,
  url = 'http://instausername.com/availability?q=[nickname]',
  no = /is taken/i,
  yes = /is free/i,

  run = async (nickname) => {
    const urlWithNickname = url.replace('[nickname]', nickname)
    const html = await RequestHelper.get(urlWithNickname)

    if (html.search(no) > -1) {
      return 'no'
    } else if (html.search(yes) > -1) {
      return 'yes'
    }
    return 'fail'

  }

export default { run, browsingTest }
