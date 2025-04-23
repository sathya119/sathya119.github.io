import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const Header: QuartzComponent = ({ children }: QuartzComponentProps) => {
  return children.length > 0 ? (
    <header>
      <a href="/">
        <img src="/static/brain.png" alt="Sai Brain Logo" className="site-logo" height="48" />
      </a>
      <span className="site-title">Click here to go to the homepage!</span>
      {children}
    </header>
  ) : null
}

Header.css = `
header {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.5rem;
}

header h1 {
  margin: 0;
  flex: auto;
}
`
  // margin: 2rem 0;

export default (() => Header) satisfies QuartzComponentConstructor
