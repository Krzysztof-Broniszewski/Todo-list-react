import {
  useQueryParameter,
  useReplaceQueryParameter,
} from "../../queryParameters";
import { StyledInput } from "./styled";
import searchQueryParamName from "../searchQueryParamName";

const InputSearch = () => {
  const query = useQueryParameter(searchQueryParamName);
  const replaceQueryParameter = useReplaceQueryParameter();

  const handleInputChange = ({ target }) => {
    replaceQueryParameter({
      key: searchQueryParamName, value: target.value.trim() !== "" ? target.value : undefined,
    });
  };

    return (
      <>
        <StyledInput
          type="text"
          placeholder="Filtruj zadania"
          value={query || ""}
          onChange={handleInputChange}
        />
      </>
    );
  };

export default InputSearch;
