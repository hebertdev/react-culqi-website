import Link from "next/link";
import { useDisclosure } from "@mantine/hooks";

import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  rem,
  Box,
  Text,
  Divider,
} from "@mantine/core";

const HEADER_HEIGHT = rem(60);

const useStyles = createStyles((theme) => ({
  inner: {
    height: HEADER_HEIGHT,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
}));

export function AppHeader() {
  const { classes } = useStyles();
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <>
      <Header
        height={HEADER_HEIGHT}
        sx={{ borderBottom: 0, position: "fixed", zIndex: 3 }}
      >
        <Container className={classes.inner} size={"xl"}>
          <Group>
            <Burger
              opened={opened}
              onClick={toggle}
              className={classes.burger}
              size="sm"
            />
            <Link href={"/"}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Text
                  sx={{
                    fontWeight: "bold",
                    fontSize: "30px",
                    marginLeft: "5px",
                  }}
                >
                  React Culqi
                </Text>
              </Box>
            </Link>
          </Group>
          <Box>
            <a
              href="https://github.com/hebertdev/react-culqi-next"
              target="_blank"
              referrerPolicy="no-referrer"
              style={{
                fontWeight: "bold",
              }}
            >
              GitHub
            </a>
          </Box>
        </Container>
        <Divider
          sx={{
            borderColor: "rgba(0,0,0,0.05)",
          }}
        />
      </Header>
      <div style={{ height: HEADER_HEIGHT }}></div>
    </>
  );
}
