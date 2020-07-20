import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Image from "gatsby-image"
import { Link } from "gatsby"

const ComponentName = ({ data }) => {
  const {
    allContentfulProduct: { nodes: products },
  } = data

  return (
    <Layout>
      <section className="p-10 capitalize max-w-6xl mx-0 my-auto md:grid md:grid-cols-2 md:gap-8 lg:grid-cols-3">
        {products.map((product, key) => {
          return (
            <article key={key} className="my-2 mx-0">
              <Image
                className="h-64 "
                fluid={product.image.fluid}
                alt={product.title}
              />
              <h3>
                {product.title}
                <span className="ml-2 text-gray-600">${product.price}</span>
              </h3>
              <Link className="font-thin" to={`/products/${product.slug}`}>
                more detail
              </Link>
            </article>
          )
        })}
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        slug
        title
        price
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

export default ComponentName
