import * as React from "react"
import Svg, { Path } from "react-native-svg"
const PhoneIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      stroke="#9CA3AF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.167 3.333H7.5L9.167 7.5 7.083 8.75a9.167 9.167 0 0 0 4.167 4.167l1.25-2.084 4.167 1.667v3.333A1.666 1.666 0 0 1 15 17.5 13.333 13.333 0 0 1 2.5 5a1.667 1.667 0 0 1 1.667-1.667"
    />
  </Svg>
)
export default PhoneIcon
