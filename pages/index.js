import Head from 'next/head'
import { fetchActivity } from './api/activity'
import { useEffect, useState } from 'react'
import Commits from '../components/Commits'
import PullRequests from '../components/PullRequests'
import Comments from '../components/Comments'
import CustomHeader from '../components/CustomHeader'
import { Box, Heading, Text } from 'grommet'
import { ZooFooter } from '@zooniverse/react-components'
import styled from 'styled-components'

const types = {
  COMMIT: 'PushEvent',
  PULL_REQUEST: 'PullRequestEvent',
  ISSUE_COMMENT: 'IssueCommentEvent',
  PR_COMMENT: 'PullRequestReviewCommentEvent',
  COMMIT_COMMENT: 'CommitCommentEvent',
}

const StyledBox = styled(Box)`
  min-height: 50vh;
  padding: 50px;
`

const Home = () => {
  const [commitData, setCommitData] = useState([])
  const [pullRequestData, setPullRequestData] = useState([])
  const [commentData, setCommentData] = useState([])
  const [hoursElapsed, setHoursElapsed] = useState(0)

  useEffect(() => {
    fetchRecentData()
  }, [])

  const fetchRecentData = async () => {
    try {
      const fetchedData = await fetchActivity()

      let commits = []
      let pullRequests = []
      let comments = []

      const mostDistantDate = new Date(
        fetchedData[fetchedData.length - 1].created_at
      )
      const timeDifference = Date.now() - mostDistantDate.getTime()
      const hrFactor = 1000 * 60 * 60
      setHoursElapsed(Math.round(timeDifference / hrFactor))

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
    <>
      <Head>
        <title>Zooniverse Github Activity</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <CustomHeader />

      <StyledBox as='main'>
        <Heading>Zooniverse is open-source!</Heading>
        <Text size='large'>
          In the past {hoursElapsed} hours there were 100 events on github including:
        </Text>
        <Commits data={commitData} />
        <PullRequests data={pullRequestData} />
        <Comments data={commentData} />
      </StyledBox>
      <ZooFooter />
    </>
  )
}

export default Home
