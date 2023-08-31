import {
  Card,
  Image,
  Text,
  Group,
  createStyles,
  Button,
  rem,
} from "@mantine/core";

import { useCheckoutV3 } from "react-culqi-next";

//assets
import tshirt from "assets/orange.webp";
import { useState } from "react";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  imageSection: {
    padding: theme.spacing.md,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  label: {
    marginBottom: theme.spacing.xs,
    lineHeight: 1,
    fontWeight: 700,
    fontSize: theme.fontSizes.xs,
    letterSpacing: rem(-0.25),
    textTransform: "uppercase",
  },

  section: {
    padding: theme.spacing.md,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  icon: {
    marginRight: rem(5),
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[2]
        : theme.colors.gray[5],
  },
}));

type Events = "closed" | "accepted" | "refused" | "noevent";

interface ProductCardProps {
  changeEvent: (events: Events, message: string) => void;
}

export function ProductCardV3({ changeEvent }: ProductCardProps) {
  const { classes } = useStyles();

  const [amount] = useState(10000);
  const [title] = useState("White T-shirt");

  const { openCulqi, token, error } = useCheckoutV3({
    settings: {
      title: title,
      currency: "PEN",
      amount: amount,
      //optional
      options: {
        lang: "auto",
        installments: false,
      },
    },
    onClose: () => {
      changeEvent("closed", "Se cerró el checkout");
    },
    onToken: (token) => {
      changeEvent(
        "accepted",
        `Tarjeta aceptada, envía el token: ${token.id} a tu backend para terminar el pago.`
      );
    },
    onError: (error) => {
      console.log("handle the errors", error);
      changeEvent("refused", `Tarjeta rechazada, e${error}.`);
    },
  });

  return (
    <>
      <Card withBorder radius="md" className={classes.card}>
        <Card.Section
          className={classes.imageSection}
          sx={{
            width: "300px",
            margin: "auto",
          }}
        >
          <Image src={tshirt.src} alt="White T-Shirt" />
        </Card.Section>

        <Group position="apart" mt="md">
          <div>
            <Text fw={500}>Polo Naranja</Text>
          </div>
        </Group>

        <Card.Section className={classes.section}>
          <Group spacing={30}>
            <div>
              <Text fz="xl" fw={700} sx={{ lineHeight: 1 }}>
                s./100.00
              </Text>
            </div>
            <Button radius="xl" style={{ flex: 1 }} onClick={openCulqi}>
              Pagar ahora
            </Button>
          </Group>
        </Card.Section>
      </Card>
    </>
  );
}
