import React, { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';
import { graphql, useStaticQuery } from 'gatsby';
import RanchPic from './RanchPic';
import uniq from 'uniqid';


const GalleryContent = () => {
  const [pics, setPics] = useState([]);
  const data = useStaticQuery(graphql`
    query {
      allFile {
        nodes {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
  `)

  useEffect(() => {
    setPics(data.allFile.nodes);
  }, [])

  return (
    <Box mr="2" ml="2">
      {pics.map((node) => (
        <RanchPic node={node} key={uniq()} />
      ))}
    </Box>
  )
}

export default GalleryContent;