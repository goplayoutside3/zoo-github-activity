const url = 'https://api.github.com/orgs/zooniverse/events'

const fetchActivity = async () => {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw response
    }
    return response.json()
  } catch (error) {
    console.log(error)
  }
}

export { fetchActivity }
