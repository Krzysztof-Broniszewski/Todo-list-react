import {
  useQueryParameter,
  useReplaceQueryParameter,
} from "../../queryParameters";
import { SearchButton, StyledInput } from "./styled";

const InputSearch = () => {
  const query = useQueryParameter("query") || "";
  const replaceQueryParameter = useReplaceQueryParameter();

  const handleInputChange = ({ target }) => {
    replaceQueryParameter({
      key: "query", value: target.value.trim() !== "" ? target.value : undefined,
    });
  };

    return (
      <>
        <StyledInput
          type="text"
          placeholder="Wyszukaj zadania"
          value={query}
          onChange={handleInputChange}
        />
        <SearchButton onClick={handleInputChange}>Szukaj</SearchButton>
      </>
    );
  };

export default InputSearch;
