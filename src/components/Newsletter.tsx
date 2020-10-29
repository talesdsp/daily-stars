import { Button, Input } from "../widgets";
import * as S from "./Newsletter.styled";

const Newsletter: React.FC = () => {
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
};

export default Newsletter;
