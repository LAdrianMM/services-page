import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'

interface Props {
  tag?: any
  icon: string | string[]
  href?: string
  bg?: string
  size?: 'sm' | 'lg'
  color?: string | number
  className?: string
  iconClass?: string
  transform?: string
  onClick?: () => void
}

const IconItem: React.FC<Props> = ({
  tag: Tag = 'a',
  icon,
  bg,
  size,
  color,
  className,
  transform,
  iconClass,
  onClick,
  ...rest
}) => (
  <Tag
    className={classNames(className, 'icon-item', {
      [`icon-item-${size}`]: size,
      [`bg-${bg}`]: bg,
      [`text-${color}`]: color,
    })}
    {...rest}
    onClick={onClick}
  >
    <FontAwesomeIcon icon={icon} transform={transform} className={iconClass} />
  </Tag>
)

export default IconItem
