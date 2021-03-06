import React from 'react'
import className from 'classnames'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import { Card } from 'react-bootstrap'

interface Props {
  media: {
    icon: any
    color: string
    className?: string
  }
  title: string
  description?: string
  children?: React.ReactNode
}

const CardService: React.FC<Props> = ({ media, title, description, children }) => (
  <Card className="card-span h-100">
    <div className="card-span-img">
      <FontAwesomeIcon
        icon={media.icon}
        className={className({ [`text-${media.color}`]: media.color }, media.className)}
      />
    </div>
    <Card.Body className="pt-6 pb-4">
      <h5 className="mb-2">{title}</h5>
      {description && <p>{description}</p>}
      {children}
    </Card.Body>
  </Card>
)

export default CardService
