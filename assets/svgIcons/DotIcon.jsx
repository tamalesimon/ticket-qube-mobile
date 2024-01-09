import * as React from "react"
import Svg, { Circle } from "react-native-svg"
const DotIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={4}
    height={4}
    fill="none"
    {...props}
  >
    <Circle cx={2} cy={2} r={2} fill="#E5E7EB" />
  </Svg>
)
export default DotIcon
