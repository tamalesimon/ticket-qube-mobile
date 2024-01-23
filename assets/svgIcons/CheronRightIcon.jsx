import * as React from "react"
import Svg, { Path } from "react-native-svg"
const CheronRightIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    fill="none"
    {...props}
  >
    <Path
      stroke="#FF8142"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5.25 3.5 8.75 7l-3.5 3.5"
    />
  </Svg>
)
export default CheronRightIcon
