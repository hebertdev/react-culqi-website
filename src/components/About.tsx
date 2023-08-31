//mantine
import { Container, Box, Title } from "@mantine/core";

//assets
import banner from "assets/banner_infojobs.webp";

export function About() {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        height: "500px",
        background: `url('${banner.src}')`,
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "calc(100% - 40px)",
        }}
      >
        <Container size={"md"}>
          <Box>
            <Title
              order={1}
              sx={{
                textAlign: "center",
                fontSize: "40px",
                width: "600px",
                margin: "auto",
                marginBottom: "10px",
                color: "white",
                "@media screen and (max-width: 768px)": {
                  width: "200px",
                  fontSize: "25px",
                },
              }}
            >
              Una <span style={{ color: "#49a19d" }}>biblioteca de React</span>{" "}
              para la integración con el{" "}
              <span style={{ color: "#db783c" }}>
                procesador de pagos Culqi
              </span>
              , compatible con <span style={{ color: "#49a19d" }}>Next.js</span>
            </Title>
            <Demo />
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

import { Prism } from "@mantine/prism";

const demoCode = `npm install react-culqi-next`;

function Demo() {
  return <Prism language="json">{demoCode}</Prism>;
}
