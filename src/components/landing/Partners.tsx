import React from 'react'
import partnerList from '@data/partner/partnerList'
import { Section } from '@components'
import { Row, Col, Image } from 'react-bootstrap'

interface PatnerProps {
  src: any
  height: number
}

const Partner = ({ src, height }: PatnerProps) => (
  <Col xs={3} sm="auto" className="my-1 my-sm-3 px-card">
    <Image src={src.src} height={height} className="landing-cta-img" alt="Partner" />
  </Col>
)

const Partners = () => {
  return (
    <Section bg="light" className="py-3 shadow-sm">
      <Row className="flex-center">
        {partnerList.map((partner, index) => (
          <Partner key={index} {...partner} />
        ))}
      </Row>
    </Section>
  )
}

export default Partners
