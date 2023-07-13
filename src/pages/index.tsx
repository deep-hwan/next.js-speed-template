import React, { useRef, useState } from "react";
import { MQ } from "@/lib/theme/mediaQuery";
import {
  Button,
  CheckBox,
  Input,
  Section,
  Spacing,
} from "@/lib/widgets/_index";
import { useRaiseEditor } from "react-raise-editor";

export default function Index() {
  const textRef = useRef<HTMLTextAreaElement | null>(null);
  const [text, setText] = useState<string>("");

  useRaiseEditor({
    state: text,
    ref: textRef,
  });

  return (
    <Section
      css={{
        padding: "40px 0 50px",
        [MQ[3]]: {
          padding: "30px 20px 50px",
        },
      }}
    >
      <div css={{ width: "100%", maxWidth: "600px" }}>
        <Input label="이름">
          <Input.TextField
            type="text"
            placeholder="이름을 입력하세요"
            errorText="비밀번호를 입력하세요."
          />
        </Input>
        <Spacing size={24} />
        <Input label="회사명" labelEdge="(필수)">
          <Input.TextField
            type="text"
            placeholder="회사명를 입력하세요"
            tolTip={`인풋 텍스트에 들어갈 내용입니다.`}
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
        <CheckBox>
          <div css={{ color: "#333" }}>인풋</div>
        </CheckBox>
        {/* /// */}
        <Spacing size={36} />
        {/* /// */}
        <Button css={{ width: "100%" }}>제출</Button>
      </div>
    </Section>
  );
}
