import Svg, { G, Path } from "react-native-svg"
const FilterIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <G
      stroke="#111827"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <Path d="M10.33 16.593h-6.3M13.14 6.9h6.301" />
      <Path
        d="M8.726 6.846A2.355 2.355 0 0 0 6.363 4.5 2.355 2.355 0 0 0 4 6.846a2.355 2.355 0 0 0 2.363 2.347 2.355 2.355 0 0 0 2.363-2.347ZM20 16.554a2.354 2.354 0 0 0-2.362-2.346 2.355 2.355 0 0 0-2.364 2.346 2.355 2.355 0 0 0 2.364 2.346A2.354 2.354 0 0 0 20 16.554Z"
        clipRule="evenodd"
      />
    </G>
  </Svg>
)
export default FilterIcon
