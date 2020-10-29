import { useRouter } from "next/router";
import { FormEvent, useRef } from "react";
import { Button, Input } from "../widgets";
import { Container } from "./SearchBox.styled";

type SearchBoxProps = {};

const SearchBox: React.FC<SearchBoxProps> = ({}) => {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = inputRef.current.value;
    const onlyNumbers = /^\d+$/g;

    if (onlyNumbers.test(value) && value.length === 8) {
      const parsed = [
        value.slice(0, 4),
        value.slice(4, 6),
        value.slice(6, 8),
      ].join("-");

      router.push(`/posts/${encodeURI(parsed)}`);
    }
  };

  return (
    <Container onSubmit={handleSubmit} className="search">
      <h3 children="Search for a image by date" />

      <div>
        <Input
          id="search-box__input"
          ref={inputRef}
          type="text"
          aria-label="date 
        in format: year, month and day without spaces, just numbers"
          placeholder="YYYYMMDD"
        />
        <Button aria-label="search input date">
          <img src="/send.svg" />
        </Button>
      </div>
    </Container>
  );
};

export default SearchBox;
