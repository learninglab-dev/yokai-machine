import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const YokaiLink = props => {return(
  <div>{props.node.data.Name}</div>
)}

const YokaiCard = props => {return(
  <div>{props.node.data.canvaCard && props.node.data.canvaCard[0].thumbnails.small}</div>
)}

const IndexPage = ({data}) => {
  const YokaiData = data.allAirtable.edges
  return (
  <Layout>
    <SEO title="Home" />
    <h1>The Yokai</h1>
    <h2>Some Yokai player cards</h2>
    {
      YokaiData.map(({node})=> {
        return (
          <YokaiLink
            node={node}/>
        )
      })
    }
    {
      YokaiData.map(({node})=> {
        return (
          <YokaiCard
            node={node}/>
        )
      })
    }

    <h2>Make your own 2D graphic card to add to this gallery!</h2>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)}

export const query = graphql`
  query {
    allAirtable {
      edges {
        node {
          table
          recordId
          id
          data {
            weight
            Description
            backgroundColor
            foregroundColor
            type
            mainAttack
            Creator
            region
            Link_to_Project
            specialAttack
            height
            canvaCardLink
            Name
            mainFeature
            secondFeature
          }
        }
      }
    }
  }

`

export default IndexPage
