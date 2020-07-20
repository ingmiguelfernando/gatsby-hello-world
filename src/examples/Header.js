import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site {
      info:siteMetadata {
        author
        person {
          name
          age
        }
        title
        data
        description
      }
    }
  }
`

const Header = () => {
  const {
    site: {
      info: {
        title,
        person: { name },
      },
    },
  } = useStaticQuery(query)
  return (
    <div>
      <h2>title:{title}</h2>
      <h2>name:{name}</h2>
    </div>
  )
}

export default Header
