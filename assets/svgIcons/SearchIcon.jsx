import Svg, { G, Circle, Path } from "react-native-svg"
const SearchIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <G
      stroke="#9CA3AF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <Circle cx={11.767} cy={11.767} r={8.989} />
      <Path d="M18.018 18.485 21.542 22" />
    </G>
  </Svg>
)
export default SearchIcon
