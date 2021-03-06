import React from 'react'
import classNames from 'classnames'

interface Props {
  children: React.ReactNode
  justifyContent?: string
  inline?: boolean
  alignItems?: string
  alignContent?: string
  wrap?: string
  className?: string
  tag?: any
  breakpoint?: string
  direction?: string
}

const Flex: React.FC<Props> = ({
  justifyContent,
  alignItems,
  alignContent,
  inline,
  wrap,
  className,
  tag: Tag = 'div',
  children,
  breakpoint,
  direction,
  ...rest
}) => {
  return (
    <Tag
      className={classNames(
        {
          [`d-${breakpoint ? breakpoint + '-' : ''}flex`]: !inline,
          [`d-${breakpoint ? breakpoint + '-' : ''}inline-flex`]: inline,
          [`flex-${direction}`]: direction,
          [`justify-content-${justifyContent}`]: justifyContent,
          [`align-items-${alignItems}`]: alignItems,
          [`align-content-${alignContent}`]: alignContent,
          [`flex-${wrap}`]: wrap,
        },
        className
      )}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export default Flex
