import React from 'react'
import { render } from '@testing-library/react'
import { useStaticQuery } from 'gatsby'
import { useMeta } from './use-meta'
import data from '../../jest/__fixtures__/meta.json'

beforeEach(() => {
  useStaticQuery.mockImplementationOnce(() => ({ ...data }))
})

describe('useMeta', () => {
  it('renders correctly', () => {
    const { social } = useMeta()
    const { container } = render(<div>{social.Twitter}</div>)

    expect(container.textContent).toBe('https://twitter.com/soda_stereo01')
  })
})
