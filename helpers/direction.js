import cookie from 'js-cookie'
const langDirection = () => {
  if (cookie.get('locale') === 'en') {
    return false
  } else {
    return true
  }
}

export default langDirection
