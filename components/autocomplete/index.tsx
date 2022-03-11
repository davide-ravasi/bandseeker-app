import { useQuery, useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import styled from "styled-components";
import GET_LIST from "../../graphql/queries/getList";
import { ListType } from "../../types";
import Input from "../searchsection/input";

interface AutocompleteProps {
  searchBy: String;
  setSearchQuery: (searchQuery: string) => void;
}

export const Autocomplete = ({
  searchBy,
  setSearchQuery,
}: AutocompleteProps) => {
  const [options, setOptions] = useState([]);
  const [what, setWhat] = useState(searchBy);
  const { loading, error, data } = useQuery(GET_LIST, {
    variables: { what: what },
    onCompleted: (data) => {
      setOptions(data.getList);
    },
  });

  const callOptions = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    setWhat(searchBy);
  }, [searchBy]);

  return (
    <InputContainer>
      {options && (
        <Input
          name="searchlist"
          id="searchlist"
          kind="select"
          onChange={callOptions}
        >
          {options.map((el: ListType) => {
            return (
              <option key={el.name} value={el.name}>
                {el.name}
              </option>
            );
          })}
        </Input>
      )}
    </InputContainer>
  );
};

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;
