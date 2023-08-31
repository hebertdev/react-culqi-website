//components
import { Version3Culqi } from "./Version3";
import { Version4Culqi } from "./Version4";

//mantine
import { Container, Center, Text } from "@mantine/core";
import { useState } from "react";
import { SegmentedControl } from "@mantine/core";

type VersionCulqi = "v3" | "v4";

export function Usage() {
  const [versionCulqi, setVersionCulqi] = useState("v4");

  const handleOnChage = (value: VersionCulqi) => {
    setVersionCulqi(value);
  };

  return (
    <Container
      size={"xl"}
      sx={{
        padding: "20px",
      }}
    >
      <Center>
        <SegmentedControl
          value={versionCulqi}
          onChange={handleOnChage}
          data={[
            { label: "v3", value: "v3" },
            { label: "v4", value: "v4" },
          ]}
        />
      </Center>
      <Text
        sx={{
          textAlign: "center",
          marginTop: "20px",
          fontWeight: "bold",
        }}
      >
        Por ahora el paquete solo sirve para cargos unicos por tarjetas y Yape.
        <br />
        (no suscripciones, no pagos en efectivos.)
      </Text>
      {versionCulqi === "v3" ? <Version3Culqi /> : <Version4Culqi />}
    </Container>
  );
}
