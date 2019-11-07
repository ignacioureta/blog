import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-bottom: 30px;
  padding: 30px;
  cursor: pointer;
  background: rgb(21, 21, 21);
  border-radius: 10px;
`;

const Title = styled.div`
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 15px;
`;

const Lead = styled.div`
  font-size: 18px;
  font-weight: 400;
`;

export default function Post() {
  return (
    <Container>
      <Title>Post</Title>
      <Lead>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          aliquam massa et vulputate finibus. Etiam laoreet elit et nisl
          suscipit eleifend. Aenean tempus in justo et vulputate. Vestibulum
          vulputate ligula diam, sit amet imperdiet nisl elementum in.
        </p>
        <p>
          Nam mauris metus, gravida sit amet sem non, gravida vulputate metus.
          Maecenas suscipit tincidunt nibh, ut fermentum augue malesuada ac.
          Proin molestie tortor nec accumsan volutpat. Nulla elit orci,
          ultricies non suscipit id, lacinia at tellus.
        </p>
      </Lead>
    </Container>
  );
}
