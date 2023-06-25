import styled from '@emotion/styled';

export default function BelajarStyledComponent() {
  return (
    <div>
      <Button>
        hai
      </Button>
      <Button2>
        Hello
      </Button2>
    </div>
  );
}

const Button = styled.button({
  background: "red"
});

const Button2 = styled.button`
  background: blue;
  &:hover {
    background: red;
  }
`;