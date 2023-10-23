import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Download = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.7 7.417c3 .258 4.225 1.8 4.225 5.175v.108c0 3.725-1.492 5.217-5.217 5.217H7.283c-3.725 0-5.216-1.492-5.216-5.217v-.108c0-3.35 1.208-4.892 4.158-5.167M10 1.667V12.4"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.792 10.542 10 13.333l-2.792-2.791"
    />
  </Svg>
)
export default Download
