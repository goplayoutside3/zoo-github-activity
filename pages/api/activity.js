const fetchActivity = async () => {
  try {
    const response = await fetch('https://api.github.com/orgs/zooniverse/events?per_page=100', {
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

const fetchNumberRepos = async () => {
  try {
    const response = await fetch('https://api.github.com/orgs/zooniverse', {
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

export { fetchActivity, fetchNumberRepos }
