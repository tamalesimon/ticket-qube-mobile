import Svg, { Path } from "react-native-svg"
const ArrowLeftIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#111827"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 12h14M5 12l4 4M5 12l4-4"
    />
  </Svg>
)
export default ArrowLeftIcon
