import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import img from "../images/image-4.png"
import Image from "gatsby-image"

const getImages = graphql`
  {
    fixed: file(relativePath: { eq: "image-4.png" }) {
      size
      name
      id
      childImageSharp {
        fixed(width: 300, height: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: { eq: "image-4.png" }) {
      size
      name
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

const Images = () => {
  const data = useStaticQuery(getImages)
  return (
    <section className="text-center capitalize w-4/5 md:grid md:grid-cols-3">
      <article className="border-solid border-red-600 p-3 border">
        <h3> basic image </h3>
        <img src={img}  />
      </article>
      <article className="border-solid border-red-600 p-3 border">
        <h3>fixed image/blur</h3>
        <Image
          fixed={data.fixed.childImageSharp.fixed}
          style={{ width: "100%" }}
        />
      </article>
      <article className="border-solid border-red-600 p-3 border">
        <h3> fluid image/svg </h3>
        <Image
          fluid={data.fluid.childImageSharp.fluid}
          style={{ width: "100%" }}
        />
      </article>
    </section>
  )
}

export default Images
