//components
import { ProductCardV3 } from "./ProductCardV3";

//mantine
import { Prism } from "@mantine/prism";
import { Box, Text, Card, Alert, Group, Button } from "@mantine/core";
import { IconAlertCircle } from "@tabler/icons-react";
import { CulqiProviderV3 } from "react-culqi-next";
import { useState } from "react";

type Events = "closed" | "accepted" | "refused" | "noevent";

export function Version3Culqi() {
  const [events, setEvents] = useState<Events>("noevent");
  const [messageEvent, setMessageEvent] =
    useState(`Aqui se mostrarán los diferentes eventos del checkout. | Cierre
  del checkout | Tarjeta aceptada | Tarjeta rechazada`);
  const changeEvent = (events: Events, message: string) => {
    setEvents(events);
    setMessageEvent(message);
  };

  return (
    <CulqiProviderV3 publicKey={process.env.NEXT_PUBLIC_KEY || "hola"}>
      <Box
        sx={{
          display: "flex",
          gap: 10,
          marginTop: "20px",
          overflow: "hidden",
          position: "relative",
          borderBottomLeftRadius: "10px",
          borderBottomRightRadius: "10px",
          "::before": {
            position: "absolute",
            content: '" "',
            bottom: 0,
            width: "100%",
            height: "80px",
            zIndex: 1,
          },
          "@media screen and (max-width: 768px)": {
            display: "block",
          },
        }}
      >
        <Card
          sx={{
            flex: 3,
            padding: "0px !important",
          }}
          shadow="sm"
          radius="md"
          withBorder
        >
          <Text
            weight={500}
            sx={{
              padding: "15px",
              borderBottom: "0.0625rem solid #dee2e6",
            }}
          >
            Culqi Checkout V3
          </Text>

          <Box>
            <Demo />
          </Box>
        </Card>
        <Card
          shadow="sm"
          p="lg"
          radius="md"
          withBorder
          sx={{
            flex: 3,
            overflow: "auto",
          }}
        >
          <ProductCardV3 changeEvent={changeEvent} />
          <Box
            sx={{
              marginTop: "10px",
            }}
          >
            <Group
              sx={{
                marginBottom: "10px",
              }}
            >
              <Button
                variant="outline"
                size="xs"
                component="a"
                href="https://docs.culqi.com/es/documentacion/checkout/"
                target="_blank"
                referrerPolicy="no-referrer"
              >
                Docs
              </Button>
              <Button
                variant="outline"
                size="xs"
                component="a"
                href="https://docs.culqi.com/es/documentacion/pagos-online/tarjetas-de-prueba/"
                target="_blank"
                referrerPolicy="no-referrer"
              >
                Tarjetas de prueba
              </Button>
              <Button
                variant="outline"
                size="xs"
                component="a"
                href="https://docs.culqi.com/es/documentacion/checkout/v3/culqi-checkout/"
                target="_blank"
                referrerPolicy="no-referrer"
              >
                API
              </Button>
            </Group>
            <Text sx={{ marginBottom: "5px", fontWeight: "bold" }}>
              Eventos del checkout
            </Text>
            <Alert
              icon={<IconAlertCircle size="1rem" />}
              title={
                events === "noevent"
                  ? "Eventos"
                  : events === "accepted"
                  ? "Tarjeta aceptada"
                  : events === "closed"
                  ? "Cancelado"
                  : events === "refused"
                  ? "tarjeta rechadaza"
                  : "Error"
              }
              color={
                events === "noevent"
                  ? "blue"
                  : events === "accepted"
                  ? "green"
                  : events === "closed"
                  ? "orange"
                  : events === "refused"
                  ? "red"
                  : "red"
              }
            >
              {messageEvent}
            </Alert>
          </Box>
        </Card>
      </Box>
    </CulqiProviderV3>
  );
}

const demoCode = `import { useState } from 'react';
import { CulqiProviderV3, useCheckoutV3 } from 'react-culqi-next';

const MyApp = () => {
  return (
    <CulqiProviderV3 publicKey="pk_test_4YrVwTo....your_public_key">
      <MyButton />
    </CulqiProviderV3>
  );
};

const MyButton = () => {
  const [amount, setAmount] = useState(10000);
  const [title, setTitle] = useState('Orange T-shirt');

  const { openCulqi, token, error } = useCheckoutV3({
    settings: {
      title: title,
      currency: 'PEN',
      description: '',
      amount: amount,
      //optional
      options: {
        lang: 'auto',
        installments: false,
        customButton: '',
        modal: true,
        style: {
          buttontext: '',
          desctext: '',
          logo: '',
          maincolor: '',
          maintext: '',
        },
      },
    },
    onClose: () => {
      console.log('Handle the closing of the modal');
    },
    onToken: token => {
      console.log('Send your token to the backend', token);
    },
    onError: error => {
      console.log('handle the errors', error);
    },
  });

  return (
    <>
      <button onClick={openCulqi}>Pay now</button>
    </>
  );
};`;

function Demo() {
  return <Prism language="tsx">{demoCode}</Prism>;
}
