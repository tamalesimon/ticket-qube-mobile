import Svg, { Path } from "react-native-svg"
const CheckIcon = (props) => (
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
      d="m5 12 5 5L20 7"
    />
  </Svg>
)
export default CheckIcon
