import {
  Html,
  Preview,
  Body,
  Container,
  Text,
  Link,
  Tailwind,
} from "@react-email/components";
import React from "react";

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome</Preview>
      <Tailwind>
        <Body className="bg-white">
          <Container>
            <Text className="font-bold text-3xl">hello {name}</Text>
            <Link href="https://github.com/dashboard">gukki的github首页</Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default WelcomeTemplate;
