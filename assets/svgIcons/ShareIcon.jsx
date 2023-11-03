import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Share = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#00334E"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.25 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM15.25 7.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM15.25 17.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM7.5 11.083l5.5 2.834m-5.5-5L13 6.083 7.5 8.917Z"
    />
  </Svg>
)
export default Share
