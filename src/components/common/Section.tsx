import React from 'react'
import { Container } from 'react-bootstrap'
import classNames from 'classnames'
import Background from './Background'

interface Props {
  fluid?: boolean
  bg?: string
  image?: string | StaticImageData
  overlay?: boolean | string
  position?: string | { x: string; y: string }
  video?: any[]
  bgClassName?: string
  className?: string
  children?: React.ReactNode
}

const Section: React.FC<Props> = ({
  fluid,
  bg,
  image,
  overlay,
  position,
  video,
  bgClassName,
  className,
  children,
  ...rest
}) => {
  const bgProps = { image, overlay, position, video, className: '' }
  bgClassName && (bgProps.className = bgClassName)

  return (
    <section className={classNames({ [`bg-${bg}`]: bg }, className)} {...rest}>
      {image && <Background {...bgProps} />}
      <Container fluid={fluid}>{children}</Container>
    </section>
  )
}

Section.defaultProps = {
  fluid: false,
}

export default Section
