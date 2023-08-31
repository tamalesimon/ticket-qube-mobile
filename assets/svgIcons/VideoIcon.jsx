import * as React from "react"
import Svg, { Path } from "react-native-svg"
const VideoIcon = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="none"
        {...props}
    >
        <Path
            fill="#fff"
            d="M14.1 4.113c-.273-.146-.847-.3-1.627.247l-.98.693c-.073-2.073-.973-2.886-3.16-2.886h-4c-2.28 0-3.166.886-3.166 3.166v5.334c0 1.533.833 3.166 3.166 3.166h4c2.187 0 3.087-.813 3.16-2.886l.98.693c.414.293.774.387 1.06.387.247 0 .44-.074.567-.14.273-.14.733-.52.733-1.474V5.587c0-.954-.46-1.334-.733-1.474ZM7.333 7.587c-.686 0-1.253-.56-1.253-1.254 0-.693.567-1.253 1.253-1.253.687 0 1.254.56 1.254 1.253 0 .694-.567 1.254-1.254 1.254Z"
        />
    </Svg>
)
export default VideoIcon