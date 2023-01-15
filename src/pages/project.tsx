import React from 'react'
import { NextPageContext } from 'next'

// I will work on this later
interface Props {
  userAgent?: string;
}

export default class Page extends React.Component<Props> {
  static async getInitialProps({ req }: NextPageContext) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { userAgent }
  }

  render() {
    const { userAgent } = this.props
    return <div>Your user agent: {userAgent}</div>
  }
}