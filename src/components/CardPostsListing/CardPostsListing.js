import React from 'react'
import CardPostsListingHeader from './CardPostsListingHeader/CardPostsListingHeader'
import CardPostsListItem from './CardPostsListItem/CardPostsListItem'

const CardPostsListing = ({username}) => {
  return (
    <section className="card border m-0 ms-md-2 ms-lg-0 mt-3">
        <CardPostsListingHeader userName={username} />
        <ul className="list-unstyled">
          <CardPostsListItem title="Becoming a Better Developer Through Open Source" arrTags={["beginners", "opensource"]} />
          <CardPostsListItem title="That time I could not finish DevTo challenge" arrTags={["kodemia", "html","css","react"]} />
          <CardPostsListItem title="What's a fullstack dev anyway?" arrTags={["codenewbie", "koder"]} />
          <CardPostsListItem title="What's the best pokemon ever?" arrTags={["browsers", "discuss"]} />
        </ul>
    </section>
  )
}

export default CardPostsListing