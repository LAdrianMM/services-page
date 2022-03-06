import React from 'react'
import classNames from 'classnames'

interface Props {
  image?: string | StaticImageData
  overlay?: boolean | string
  position?: string | { x: string; y: string }
  video?: any[]
  className?: string
  style?: object
}

const Background: React.FC<Props> = ({ image, overlay, position, video, className, style }) => {
  const bgStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: '',
    backgroundPositionX: '',
    backgroundPositionY: '',
    ...style,
  }
  if (typeof position === 'string') {
    bgStyle.backgroundPosition = position
  } else if (typeof position === 'object') {
    position.x && (bgStyle.backgroundPositionX = position.x)
    position.y && (bgStyle.backgroundPositionY = position.y)
  }

  return (
    <div
      className={classNames(
        'bg-holder',
        {
          overlay: overlay,
          [`overlay-${overlay}`]: typeof overlay === 'string',
        },
        className
      )}
      style={bgStyle}
    >
      {video && (
        <video className="bg-video" autoPlay loop muted playsInline>
          {video.map((src, index) => (
            <source key={index} src={src} type={`video/${src.split('.').pop()}`} />
          ))}
        </video>
      )}
    </div>
  )
}

export default Background
