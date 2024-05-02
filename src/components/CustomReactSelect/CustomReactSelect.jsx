import Select from "react-select";
import { selectCustomStyles } from "./CustomReactSelectStyles";

const CustomReactSelect = ({ type, ...props }) => {
  return (
    <>
      <Select
        {...props}
        styles={selectCustomStyles(type)}
        isClearable={true}
        isSearchable={true}
        blurInputOnSelect={true}
      />
    </>
  );
};

export default CustomReactSelect;
