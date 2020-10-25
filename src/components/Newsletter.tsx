import { Button, Input } from "./common.styled";
import * as S from "./Newsletter.styled";

export default function Newsletter() {
  return (
    <S.Newsletter>
      <h4>Sign our newsletter for more stories</h4>
      <div>
        <Input type="email" aria-label="email" placeholder="maria@email.com" />
        <Button aria-label="send email">
          <img src="/send.svg" />
        </Button>
      </div>
    </S.Newsletter>
  );
}
