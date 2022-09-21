import React from "react";
import { Frame, Stack, Text, MenuItem, Divider, Switch } from "reshaped";
import home24Regular from "@iconify/icons-fluent/home-24-regular";
import book24Regular from "@iconify/icons-fluent/book-24-regular";
import arrowTrending24Regular from "@iconify/icons-fluent/arrow-trending-24-regular";
import clipboard24Regular from "@iconify/icons-fluent/clipboard-24-regular";
import bookmarkMultiple24Regular from "@iconify/icons-fluent/bookmark-multiple-24-regular";
import person24Regular from "@iconify/icons-fluent/person-24-regular";
import s from "./SidebarLayout.module.css";
import { Icon } from "@iconify/react";
import { QuizrrLogo } from "../../components/logo";

const NAVS = [
  {
    id: 1,
    title: "Home",
    icon: home24Regular,
  },
  {
    id: 2,
    title: "Packs",
    icon: book24Regular,
  },
  {
    id: 3,
    title: "Tests",
    icon: clipboard24Regular,
  },
  {
    id: 4,
    title: "Analytics",
    icon: arrowTrending24Regular,
  },
  {
    id: 5,
    title: "Notebook",
    icon: bookmarkMultiple24Regular,
  },
  {
    id: 6,
    title: "Profile",
    icon: person24Regular,
  },
];

const SidebarLayout = ({ children }) => {
  return (
    <Frame className={s.container}>
      <Frame padding={4} as="aside" className={s.sidebar}>
        <Stack gap={5}>
          <Stack align="center" justify="space-between" direction="row">
            <Frame padding={[0, 1]}>
              <QuizrrLogo height="2rem" />
            </Frame>
            <Stack.Item gap="auto">
              <Text color="neutral-faded">Beta</Text>
              {/* <Switch
                onChange={({ value }) => {
                 
                }}
              /> */}
            </Stack.Item>
          </Stack>
          {/* <Divider /> */}
          <Stack gap={1}>
            {NAVS.map((nav, i) => (
              <MenuItem
                key={nav.id}
                selected={i == 0}
                roundedCorners
                startSlot={
                  <Icon
                    icon={nav.icon}
                    fontSize="1.4rem"
                    color={
                      i == 0
                        ? "var(--rs-color-foreground-primary)"
                        : "var(--rs-color-foreground-neutral-faded)"
                    }
                  />
                }
              >
                <Text color={i == 0 ? "" : "neutral-faded"}>{nav.title}</Text>
              </MenuItem>
            ))}
          </Stack>
        </Stack>
      </Frame>
      <Frame padding={4} as="main" className={s.main}>
        {children}
      </Frame>
    </Frame>
  );
};

export default SidebarLayout;
