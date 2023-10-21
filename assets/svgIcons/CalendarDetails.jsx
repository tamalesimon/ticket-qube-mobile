import * as React from "react"
import Svg, { Path } from "react-native-svg"
const CalendarDetails = ({dim=15, ...props}) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={dim}
        height={dim}
        fill="none"
        viewBox="0 0 14 15"
        {...props}
    >
        <Path
            stroke="#9CA3AF"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            d="M4.667 1.667v1.75M9.333 1.667v1.75M2.042 5.803h9.916M12.25 5.458v4.959c0 1.75-.875 2.916-2.917 2.916H4.667c-2.042 0-2.917-1.166-2.917-2.916V5.458c0-1.75.875-2.916 2.917-2.916h4.666c2.042 0 2.917 1.166 2.917 2.916Z"
        />
        <Path
            stroke="#9CA3AF"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.155 8.492h.006M9.155 10.242h.006M6.997 8.492h.006M6.997 10.242h.006M4.838 8.492h.006M4.838 10.242h.006"
        />
    </Svg>
)
export default CalendarDetails
