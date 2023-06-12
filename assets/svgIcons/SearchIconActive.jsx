import Svg, { Path } from "react-native-svg"
const SearchIconActive = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#FF8142"
      fillRule="evenodd"
      d="M2 10.67C2 5.882 5.84 2 10.578 2c2.275 0 4.456.913 6.065 2.54a8.717 8.717 0 0 1 2.512 6.13c0 4.788-3.84 8.67-8.577 8.67C5.84 19.34 2 15.458 2 10.67Zm17.013 6.984 2.555 2.062h.044c.517.523.517 1.37 0 1.892a1.314 1.314 0 0 1-1.871 0l-2.12-2.43a1.082 1.082 0 0 1 0-1.524.986.986 0 0 1 1.392 0Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default SearchIconActive
