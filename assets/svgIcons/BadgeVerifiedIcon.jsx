import * as React from "react"
import Svg, { Path } from "react-native-svg"
const BadgeVerified = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <Path
      fill="#3B82F6"
      fillRule="evenodd"
      d="M5.014 2.764a2.453 2.453 0 0 0 1.396-.578 2.453 2.453 0 0 1 3.18 0c.393.335.882.537 1.396.578a2.453 2.453 0 0 1 2.25 2.25 2.45 2.45 0 0 0 .578 1.396 2.453 2.453 0 0 1 0 3.18 2.453 2.453 0 0 0-.578 1.396 2.453 2.453 0 0 1-2.25 2.25 2.453 2.453 0 0 0-1.396.578 2.453 2.453 0 0 1-3.18 0 2.453 2.453 0 0 0-1.396-.578 2.453 2.453 0 0 1-2.25-2.25 2.453 2.453 0 0 0-.578-1.396 2.453 2.453 0 0 1 0-3.18c.335-.393.537-.882.578-1.396a2.453 2.453 0 0 1 2.25-2.25Zm5.952 4.202a.8.8 0 0 0-1.132-1.132L7.2 8.47 6.166 7.434a.8.8 0 0 0-1.132 1.132l1.6 1.6a.8.8 0 0 0 1.132 0l3.2-3.2Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default BadgeVerified;