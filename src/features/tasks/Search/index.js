import { useLocation, useHistory } from "react-router-dom";
import { theme } from "../../../theme";
import { SearchButton, StyledInput } from "./styled";

const InputSearch = () => {
  const location = useLocation();
  const history = useHistory();
  const query = new URLSearchParams(location.search).get("szukaj");

  const onChange = (event) => {
    const searchParams = new URLSearchParams(location.search);
    console.log(searchParams);
      if (event.value.trim() === "") {
        searchParams.delete("szukaj");
      } else {
        searchParams.set("szukaj", event.target.value);
      }

      history.push(`${location.pathname}?${searchParams.toString()}`);
  };

  const onSearch = (searchItem) => {
    console.log(searchItem)
  };

  return (
    <>
      <StyledInput
        type="text"
        placeholder="Wyszukaj zadania"
        value={query && ""}
        onChange={onChange}
      />
      <SearchButton theme={theme} onClick={() => onSearch(query)}>Szukaj</SearchButton>
    </>
  );
};

export default InputSearch;