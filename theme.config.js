const YEAR = new Date().getFullYear()

export default {
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      <time>{YEAR}</time> © xiaowuc2
      <a href="/feed.xml">RSS</a>
      <style jsx>{`
        a {
          float: right;
        }
        @media screen and (max-width: 1000px) {
          article {
            padding-top: 1rem;
            padding-bottom: 1rem;
          }
        }
      `}</style>
    </small>
  )
}
