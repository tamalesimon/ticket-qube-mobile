import * as React from "react"
import Svg, { Rect } from "react-native-svg"
const SelectCircleSelected = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={18}
        height={18}
        fill="none"
        {...props}
    >
        <Rect width={17} height={17} x={0.5} y={0.5} stroke="#FF8142" rx={8.5} />
        <Rect width={12} height={12} x={3} y={3} fill="#FF8142" rx={6} />
    </Svg>
)
export default SelectCircleSelected
