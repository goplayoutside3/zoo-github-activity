const url = 'https://api.github.com/orgs/zooniverse/events?per_page=100'

const fetchActivity = async () => {
  try {
    const response = await fetch(url, {
      headers: {
        "Accept": "application/vnd.github.v3+json"
      }
    })
    if (!response.ok) {
      throw response
    }
    return response.json()
  } catch (error) {
    console.log(error)
  }
}

export { fetchActivity }
