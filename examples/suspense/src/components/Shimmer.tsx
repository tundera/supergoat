import type { FC } from 'react'

import ContentLoader from 'react-content-loader'

interface Props {
  width: string | number
  height: string | number
}

const Shimmer: FC<Props> = ({ width, height }) => (
  <ContentLoader
    speed={2}
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <defs>
      <linearGradient id="g">
        <stop stopColor="#333" offset="20%" />
        <stop stopColor="#222" offset="50%" />
        <stop stopColor="#333" offset="70%" />
      </linearGradient>
    </defs>
    <rect width={width} height={height} fill="#333" />
    <rect id="r" width={width} height={height} fill="url(#g)" />
    <animate
      xlinkHref="#r"
      attributeName="x"
      from={-width}
      to={width}
      dur="1s"
      repeatCount="indefinite"
    />
  </ContentLoader>
)

export default Shimmer
