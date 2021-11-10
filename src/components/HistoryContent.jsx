import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const HistoryContent = () => {

  const paragraph1 = <Text fontsize="md" >
    The property was purchased in 1938 by my uncle Ray Furlong.  He was the son of Tom and Rosanna Furlong, my Grandmother Irene being the youngest daughter of 12 children, all born in the town of Bodega, California.  Tom Furlong was a native of Bree, county Wexford, Ireland.  He was one of four Furlong brothers who immigrated from Ireland between 1866 and 1875. Rosanna was born at Bodega Bay in 1856 to Andrew Johnson, an immigrant of Norway and Catherine Farrell from County Monaghan, Ireland, both arriving in California at the time of the Gold Rush.  Tom and Rosanna were married at St Theresa’s church Bodega in 1874.
  </Text>

  const paragraph2 = <Text fontsize="md">
    At the time he bought it, what is now the vineyard consisted of 12 acres of Gravenstein apples and the rest was sheep pasture.  He later planted the rest in apples.  The two trees kept for sentimental reasons produce the apples for our annual pie day.  The balance of the orchard in now the vineyard.
  </Text>

  const paragraph3 = <Text fontsize="md">
    The Furlong descendants were very much a part of the early history of the Bodega area of Sonoma County, north up the coast, west to Santa Rosa and south to Tomales and Petaluma.  After Rosanna’s daughter Mae (Mary) and husband Tom died in close proximity of one another, 1906 and 1907 respectively, several of the older children had already moved to Oakland so she and the remaining children followed first to Oakland then to Piedmont.
  </Text>

  const paragraph4 = <Text fontsize="md">
    Many of Tom’s brother Patrick’s descendants have remained in Sonoma County and have remained active in the agriculture community up to and including the present.
  </Text>

  const paragraph5 = <Text fontsize="md">
    Tom and Rosanna youngest daughter Irene, born February 21, 1893, married William Terrance McSorley, from another pioneering gold rush era family that settled in Mokelumne Hill in 1852 (near San Andreas in 1852).  Their only daughter, my mother Barbara was born August 23, 1923.
  </Text>

  const paragraph6 = <Text fontsize="md">
    'Barbara so loved her Uncle Ray and his beloved ranch that when he died in December 1960, he left it to her.  She ran the ranch until 1990 when I took it over.'
  </Text>

  return (
    <Box mr="2" ml="2">
      {paragraph1}
      <br />
      {paragraph2}
      <br />
      {paragraph3}
      <br />
      {paragraph4}
      <br />
      {paragraph5}
      <br />
      {paragraph6}
      <br />
    </Box>
  )
}

export default HistoryContent;