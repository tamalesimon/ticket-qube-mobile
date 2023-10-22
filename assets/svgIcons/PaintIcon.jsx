import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
const PaintIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={44}
    height={44}
    fill="none"
    {...props}
  >
    <Rect width={44} height={44} fill="#FF8142" rx={12} />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M22 31a9 9 0 0 1 0-18c2.387 0 4.676.843 6.364 2.343C30.052 16.843 31 18.878 31 21c0 1.06-.474 2.078-1.318 2.828-.844.75-1.988 1.172-3.182 1.172H24a2 2 0 0 0-1 3.75A1.3 1.3 0 0 1 22 31"
    />
    <Path
      fill="#fff"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.5 21a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM22 18a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM26.5 21a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"
    />
  </Svg>
)
export default PaintIcon
