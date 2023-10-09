import * as React from "react"
import Svg, { Path } from "react-native-svg"
const CheronRightIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={6}
    height={11}
    fill="none"
    {...props}
  >
    <Path
      stroke="#FF8142"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m1 1.5 4 4-4 4"
    />
  </Svg>
)
export default CheronRightIcon
