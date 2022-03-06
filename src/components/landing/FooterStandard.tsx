import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Row, Col } from 'react-bootstrap'
import createMarkup from '@helpers/createMarkup'
import { Section, IconGroup } from '@components'
import { blogPostList, menuList1, menuList2 } from '@data/footer'
import { bgWhiteIcons } from '@data/socialIcons'

interface FooterTitleProps {
  children: React.ReactNode
}

const FooterTitle = ({ children }: FooterTitleProps) => (
  <h5 className="text-uppercase text-white opacity-85 mb-3">{children}</h5>
)

// FooterTitle.propTypes = { children: PropTypes.node.isRequired }

interface FooterListProps {
  list: any[]
}

const FooterList = ({ list }: FooterListProps) => (
  <ul className="list-unstyled">
    {list.map(({ title, to }, index) => (
      <li className="mb-1" key={index}>
        <Link href={to}>
          <a className="text-600">{title}</a>
        </Link>
      </li>
    ))}
  </ul>
)

// FooterList.propTypes = { list: PropTypes.array.isRequired }

interface FooterBlogProps {
  list: any[]
}

const FooterBlogList = ({ list }: FooterBlogProps) => (
  <ul className="list-unstyled">
    {list.map((blog, index) => (
      <li key={index}>
        <h5 className="fs-0 mb-0">
          <Link href="">
            <a className="text-600">{blog.title}</a>
          </Link>
        </h5>
        <p className="text-600 opacity-50">
          {blog.date} &bull; {blog.read} read{' '}
          {blog.star && <span dangerouslySetInnerHTML={createMarkup('&starf;')} />}
        </p>
      </li>
    ))}
  </ul>
)

// FooterBlogList.propTypes = { list: PropTypes.array.isRequired }

const FooterStandard = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }
  return (
    <>
      <Section bg="dark" className="pt-8 pb-4 light">
        <div
          className="position-absolute btn-back-to-top cursor-pointer bg-dark"
          onClick={scrollToTop}
        >
          <FontAwesomeIcon icon="chevron-up" transform="rotate-45" className="text-600" />
        </div>
        <Row>
          <Col lg={4}>
            <FooterTitle>Our Mission</FooterTitle>
            <p className="text-600">
              Falcon enables front end developers to build custom streamlined user interfaces in a
              matter of hours, while it gives backend developers all the UI elements they need to
              develop their web app.And it&lsquo;s rich design can be easily integrated with
              backends whether your app is based on ruby on rails, laravel, express or any other
              server side system.
            </p>
            <IconGroup className="mt-4" icons={bgWhiteIcons} />
          </Col>
          <Col className="ps-lg-6 ps-xl-8">
            <Row className="mt-5 mt-lg-0">
              <Col xs={6} md={3}>
                <FooterTitle>Company</FooterTitle>
                <FooterList list={menuList1} />
              </Col>
              <Col xs={6} md={3}>
                <FooterTitle>Product</FooterTitle>
                <FooterList list={menuList2} />
              </Col>
              <Col className="mt-5 mt-md-0">
                <FooterTitle>From the Blog</FooterTitle>
                <FooterBlogList list={blogPostList} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Section>
    </>
  )
}

export default FooterStandard
