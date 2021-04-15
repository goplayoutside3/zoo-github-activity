import Head from 'next/head'
import { fetchActivity } from './api/activity'
import { useEffect, useState } from 'react'
import Commits from '../components/Commits'
import PullRequests from '../components/PullRequests'
import Comments from '../components/Comments'

const types = {
  COMMIT: 'PushEvent',
  PULL_REQUEST: 'PullRequestEvent',
  ISSUE_COMMENT: 'IssueCommentEvent',
  PR_COMMENT: 'PullRequestReviewCommentEvent',
  COMMIT_COMMENT: 'CommitCommentEvent',
}

const Home = () => {
  const [commitData, setCommitData] = useState([])
  const [pullRequestData, setPullRequestData] = useState([])
  const [commentData, setCommentData] = useState([])

  useEffect(() => {
    fetchRecentData()
  }, [])

  const fetchRecentData = async () => {
    try {
      const fetchedData = await fetchActivity()

      let commits = []
      let pullRequests = []
      let comments = []

      fetchedData.forEach(item => {
        if (item.type === types.COMMIT) commits.push(item)
        if (item.type === types.PULL_REQUEST) pullRequests.push(item)
        if (
          item.type === types.COMMIT_COMMENT ||
          item.type === types.ISSUE_COMMENT ||
          item.type === types.PR_COMMENT
        )
          comments.push(item)
      })

      setCommitData(commits)
      setPullRequestData(pullRequests)
      setCommentData(comments)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <Head>
        <title>Zooniverse Github Activity</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        Zooniverse is open-source! There were 100 github events from (Date - Date) including:
        <Commits data={commitData} />
        <PullRequests data={pullRequestData} />
        <Comments data={commentData} />
      </main>
    </div>
  )
}

export default Home
