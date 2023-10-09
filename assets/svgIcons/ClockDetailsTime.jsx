import * as React from "react"
import Svg, { Path } from "react-native-svg"
const ClockDetailsTime = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={15}
        height={15}
        fill="none"
        viewBox="0 0 14 15"
        {...props}
    >
        <Path
            stroke="#9CA3AF"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 12.75a5.25 5.25 0 1 0 0-10.5 5.25 5.25 0 0 0 0 10.5Z"
        />
        <Path
            stroke="#9CA3AF"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 4.583V7.5l1.75 1.75"
        />
    </Svg>
)
export default ClockDetailsTime
