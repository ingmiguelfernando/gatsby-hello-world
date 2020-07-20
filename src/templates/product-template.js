import React from "react"
import { graphql,Link } from "gatsby"
import Layout from '../components/Layout'
import Image from 'gatsby-image'


const ComponentName = ({ data:{product:{price,title,image:{fixed},info:{info}}} }) => {
    return (
      <Layout>
        <div className="w-11/12 max-w-screen-lg mx-5 my-auto md:grid md:grid-cols-3 md:gap-4">
          <div className="text-center col-span-3">
            <Link to="/products">back to products</Link>
            <h1 className="text-3xl">single product: {title}</h1>
          </div>
          <section className="md:col-span-3">
            <div className="md:grid md:grid-cols-3 md:gap-4">
              <article className="col-span-1 ">
                <Image fixed={fixed} alt={title} style={{ width: "100%" }} />
              </article>
              <article className="col-span-2">
                <h1>{title}</h1>
                <h3>${price}</h3>
                <p className="col-span-3">{info}</p>
                <button>add to cart</button>
              </article>
            </div>
          </section>
        </div>
      </Layout>
    )
}

export const query = graphql`
  query GetSingleProduct($slug: String) {
    product: contentfulProduct(slug: { eq: $slug }) {
      slug
      price
      title
      info {
        info
      }
      image {
        fixed (width:300){
          ...GatsbyContentfulFixed
        }
      }
    }
  }
`

export default ComponentName
