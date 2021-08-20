import debug from '../helpers/debug.helper'

export default {
    url: 'http://cactus.tools/twitch/username?username=[nickname]',
    isAvailable: async html => {
        if (html.indexOf('<strong>NOT</strong>') > -1) {
            return 'no'
        } else if (html.indexOf('is available') > -1) {
            return 'yes'
        } else {
            return 'fail'
        }
    },
}
