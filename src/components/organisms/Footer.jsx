import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import classNames from 'classnames'
import Vcard from '../atoms/Vcard'
import LogoUnit from '../molecules/LogoUnit'
import Networks from '../molecules/Networks'
import styles from './Footer.module.scss'

const query = graphql`
  query {
    metaYaml {
      title
      url
      gpg
    }
  }
`

const FooterMarkup = ({ year }) => {
  const classes = classNames('h-card', [styles.footer])

  return (
    <footer className={classes}>
      <LogoUnit minimal />

      <Networks minimal />

      <p className={styles.actions}>
        <Vcard />
        {/* <a className="u-key" href={meta.gpg}>
          PGP/GPG key
        </a> */}
        {/* <a href={pkg}>Found a bug?</a> */}
      </p>
      <p className={styles.copyright}>
        <small>
          &copy; {year}{' '}
          {/* <a className="u-url" href={meta.url}>
            {meta.title}
          </a>{' '} */}
          &mdash; All Rights Reserved
        </small>
      </p>
    </footer>
  )
}

FooterMarkup.propTypes = {
  pkg: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  year: PropTypes.number.isRequired
}

export default class Footer extends PureComponent {
  state = { year: new Date().getFullYear() }

  render() {
    return (
      <StaticQuery
        query={query}
        render={data => {
          const pkg = data.portfolioJson
          const meta = data.metaYaml

          return <FooterMarkup year={this.state.year} pkg={pkg} meta={meta} />
        }}
      />
    )
  }
}
