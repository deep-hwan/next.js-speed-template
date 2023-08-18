import React, { useRef, useState } from "react";
import { MQ } from "@/lib/theme/mediaQuery";
import {
  Button,
  CheckInput,
  Container,
  Input,
  Section,
  Spacing,
} from "@/lib/widgets/_index";
import { useRaiseEditor } from "react-raise-editor";
import SEO from "@/seo.config";
import { Interpolation, Theme } from "@emotion/react";

export default function Index() {
  const textRef = useRef<HTMLTextAreaElement | null>(null);
  const [text, setText] = useState<string>("");

  const [check, setCheck] = useState<boolean>(false);

  useRaiseEditor({
    state: text,
    ref: textRef,
  });

  return (
    <>
      <SEO />
      <Section css={theme.section as Interpolation<Theme>}>
        <Container css={theme.container as Interpolation<Theme>}>
          <Input label="이름">
            <Input.TextField type="text" placeholder="이름을 입력하세요" />
          </Input>

          <Spacing size={24} />

          <Input label="회사명" labelEdge="(필수)">
            <Input.TextField
              type="text"
              placeholder="회사명를 입력하세요"
              tolTip={`인풋 텍스트에 들어갈 내용입니다.`}
              edge={"회사"}
            />
          </Input>

          <Spacing size={24} />

          <Input label="내용">
            <Input.Textarea
              placeholder="내용을 입력하세요"
              value={text}
              ref={textRef}
              onChange={(e) => setText(e.target.value)}
            />
          </Input>

          <Spacing size={24} />

          <CheckInput label="하이">
            <CheckInput.CheckBox id="asdasd" />
          </CheckInput>

          {/* /// */}
          <Spacing size={36} />

          <Button css={{ width: "100%" }} disabled={true}>
            제출
          </Button>
        </Container>
      </Section>
    </>
  );
}

// styled
const theme = {
  section: {
    padding: "40px 0 50px",
    [MQ[3]]: {
      padding: "30px 20px 50px",
    },
  },

  container: {
    width: "100%",
    maxWidth: "600px",
  },
};
