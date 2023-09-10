import * as React from "react"
import Svg, { Rect } from "react-native-svg"
const CheckCircle = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <Rect width={15} height={15} x={0.5} y={0.5} stroke="#E5E7EB" rx={7.5} />
  </Svg>
)
export default CheckCircle
