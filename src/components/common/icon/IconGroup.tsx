import React from 'react'
import classNames from 'classnames'
import IconItem from './IconItem'

interface Props {
  icons: { icon: string[]; color: string; bg: string; href: string }[]
  className?: string
}

const IconGroup: React.FC<Props> = ({ icons, className, ...rest }) => (
  <div className={classNames('icon-group', className)} {...rest}>
    {icons.map((icon, index) => (
      <IconItem {...icon} key={index} />
    ))}
  </div>
)

export default IconGroup
