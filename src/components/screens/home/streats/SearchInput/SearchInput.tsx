import {FC} from "react";
import Input from "@mui/joy/Input";
const SearchInput: FC = () => {
    // const timer = useRef();
    // const hendleChange = async (el: string) => {
    //     clearTimeout(timer.current);
    //     //@ts-ignore
    //     timer.current = setTimeout(() => {
    //     }, 500);
    //   };
  return (
    <Input
      placeholder="kosheni izlew"
      // onChange={(el) => hendleChange(el.target.value)}
    />
  );
};

export default SearchInput;
