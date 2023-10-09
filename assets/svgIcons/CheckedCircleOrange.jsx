import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
const CheckedCircleOrange = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="none"
        {...props}
    >
        <Rect width={16} height={16} fill="#FF8142" rx={8} />
        <Path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m4.889 8 2.222 2.222 4.445-4.444"
        />
    </Svg>
)
export default CheckedCircleOrange;
