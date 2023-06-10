import * as React from "react"
import Svg, { Path } from "react-native-svg"
const CloseIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#9CA3AF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m6 6 12 12M6 18 18 6 6 18Z"
    />
  </Svg>
)
export default CloseIcon
