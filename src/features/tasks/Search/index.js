import { useLocation, useHistory } from "react-router-dom";
import { theme } from "../../../theme";
import { SearchButton, StyledInput } from "./styled";

const InputSearch = () => {
  const location = useLocation();
  const history = useHistory();
  const query = new URLSearchParams(location.search).get("szukaj");

  const onInputChange = ({ target }) => {
    const searchParams = new URLSearchParams(location.search);

    if (target.value.trim() === "") {
      searchParams.delete("szukaj");
    } else {
      searchParams.set("szukaj", target.value);
    }

    history.push(`${location.pathname}?${searchParams.toString()}`);
  };

  return (
    <>
      <StyledInput
        placeholder="Wyszukaj zadania"
        value={query || ""}
        onChange={onInputChange}
      />
      <SearchButton theme={theme}>Szukaj</SearchButton>
    </>
  );
};

export default InputSearch;