import { useStaticQuery, graphql } from 'gatsby'

const query = graphql`
  query Meta {
    metaYaml {
      title
      tagline
      description
      url
      email
      social {
        Email
        Twitter
        GitHub
      }
      availability {
        status
        available
        unavailable
      }
      gpg
      addressbook
      typekitID
      matomoUrl
      matomoSite
      allowedHosts
    }
  }
`

export const useMeta = () => {
  const { metaYaml } = useStaticQuery(query)
  return metaYaml
}
