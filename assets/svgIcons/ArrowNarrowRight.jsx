import * as React from "react"
import Svg, { Path } from "react-native-svg"
const ArrowNarrowRight = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <Path
            stroke="#FF8142"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 12h14M15 16l4-4M15 8l4 4"
        />
    </Svg>
)
export default ArrowNarrowRight