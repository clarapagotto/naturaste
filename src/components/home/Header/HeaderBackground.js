import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'

const HeaderBackground = ({ className, children }) => {
  const { headerBackgroundImage } = useStaticQuery(
    graphql`
      query {
        headerBackgroundImage: file(
          relativePath: { eq: "background-shape.png" }
        ) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1366) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  return (
    <BackgroundImage
      Tag="section"
      className={className}
      fluid={headerBackgroundImage.childImageSharp.fluid} 
      id="gbitest"
      role="img"
      aria-label="gbitest"
      fadeIn={`soft`}
      background="red"
    >
      {children}
    </BackgroundImage>
  )
}

export default HeaderBackground