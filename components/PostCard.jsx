import {
  Card,
  Stack,
  Avatar,
  Button,
  Text,
  Tooltip,
  Actionable,
  AspectRatio,
  Frame,
  Link,
  DropdownMenu,
  Popover,
  Icon,
  useTheme,
} from "reshaped";
import {
  IconMore,
  IconBookmark,
  IconCloseSquare,
  IconClock,
  IconUserMinus,
  IconThumbsUp,
  IconShare,
  IconMessage,
  IconUsers,
  IconUserCheck,
} from "./icons";

const PostActionMenu = () => {
  return (
    <DropdownMenu position="bottom-end">
      <DropdownMenu.Trigger>
        {(attributes) => (
          <Button
            variant="ghost"
            rounded
            startIcon={IconMore}
            attributes={attributes}
          />
        )}
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Section>
          <DropdownMenu.Item startIcon={IconBookmark}>
            Save post
            <Text color="neutral-faded" variant="caption-1">
              Add this to your saved items
            </Text>
          </DropdownMenu.Item>
        </DropdownMenu.Section>

        <DropdownMenu.Section>
          <DropdownMenu.Item startIcon={IconCloseSquare}>
            Hide post
            <Text color="neutral-faded" variant="caption-1">
              See fewer posts like this
            </Text>
          </DropdownMenu.Item>
          <DropdownMenu.Item startIcon={IconClock}>
            Snooze Dmitry for 30 days
            <Text color="neutral-faded" variant="caption-1">
              Temporarily stop seeing posts
            </Text>
          </DropdownMenu.Item>
          <DropdownMenu.Item startIcon={IconUserMinus}>
            Unfollow Dmitry
            <Text color="neutral-faded" variant="caption-1">
              Stop seeing posts but stay friends
            </Text>
          </DropdownMenu.Item>
        </DropdownMenu.Section>
      </DropdownMenu.Content>
    </DropdownMenu>
  );
};

const AccountInformation = () => (
  <Stack gap={3}>
    <Stack direction="row" gap={4}>
      <Avatar
        size={8}
        src="https://pbs.twimg.com/profile_images/1096029593335676929/OZbE9ZXV_400x400.png"
      />

      <Stack.Item grow>
        <Stack gap={3}>
          <Text variant="title-3">Dmitry Belyaev</Text>
          <Stack direction="row">
            <Icon svg={IconUserCheck} />
            <Stack.Item grow>
              <Text>
                Became friends with{" "}
                <Text variant="body-medium-2" as="span">
                  <Link color="inherit" variant="plain" href="/">
                    Ester Naomi
                  </Link>
                </Text>{" "}
                and{" "}
                <Text variant="body-medium-2" as="span">
                  14 other people
                </Text>
              </Text>
            </Stack.Item>
          </Stack>
          <Stack.Item gap={1}>
            <Stack direction="row">
              <Icon svg={IconUsers} />
              <Stack.Item grow>
                47 mutual friends including{" "}
                <Text variant="body-medium-2" as="span">
                  <Link color="inherit" variant="plain" href="/">
                    Ester Naomi
                  </Link>
                </Text>
              </Stack.Item>
            </Stack>
          </Stack.Item>
        </Stack>
      </Stack.Item>
    </Stack>
    <Stack direction="row" gap={2}>
      <Stack.Item grow>
        <Button startIcon={IconThumbsUp} fullWidth>
          Like
        </Button>
      </Stack.Item>
      <Stack.Item grow>
        <Button startIcon={IconMessage} color="primary" fullWidth>
          Message
        </Button>
      </Stack.Item>
      <Button startIcon={IconMore} />
    </Stack>
  </Stack>
);

const PostHeader = () => {
  return (
    <Stack direction="row" align="center">
      <Popover position="bottom" width="360px" triggerType="hover">
        <Popover.Trigger>
          {(attributes) => (
            <Actionable attributes={attributes}>
              <Avatar
                size={8}
                src="https://pbs.twimg.com/profile_images/1096029593335676929/OZbE9ZXV_400x400.png"
              />
            </Actionable>
          )}
        </Popover.Trigger>
        <Popover.Content>
          <AccountInformation />
        </Popover.Content>
      </Popover>

      <Stack.Item grow>
        <Text variant="body-medium-2">Dmitry Belyaev</Text>
        <Text variant="caption-1" color="neutral-faded">
          <Tooltip text="Saturday, September 1, 2021">
            {(attributes) => (
              <Actionable attributes={attributes}>
                September 1, 12:30
              </Actionable>
            )}
          </Tooltip>
        </Text>
      </Stack.Item>

      <PostActionMenu />
    </Stack>
  );
};

const PostFooter = () => {
  const { invertColorMode } = useTheme();

  return (
    <Stack divided gap={2}>
      <Stack direction="row">
        <Stack.Item size={4}>
          <Button
            variant="ghost"
            fullWidth
            startIcon={IconThumbsUp}
            onClick={invertColorMode}
          >
            Like
          </Button>
        </Stack.Item>
        <Stack.Item size={4}>
          <Button variant="ghost" fullWidth startIcon={IconMessage}>
            Comment
          </Button>
        </Stack.Item>
        <Stack.Item size={4}>
          <Button variant="ghost" fullWidth startIcon={IconShare}>
            Share
          </Button>
        </Stack.Item>
      </Stack>
    </Stack>
  );
};

const PostCard = () => {
  return (
    <Card padding={0}>
      <Frame padding={4}>
        <Stack gap={2}>
          <Stack.Item>
            <PostHeader />
          </Stack.Item>

          <Text>
            Amsterdam’s largest park is located mostly in Amstelveen and has a
            lot to offer. You’ll find a number of attractions in its vast area
            including the Bosbaan, a rowing course that has hosted the World
            Rowing Championship twice. Along with ponds suitable for swimming,
            an open air theatre and camping facilities, the park also has a
            fabulous forest with dazzling cherry blossoms in spring. Keep your
            eye out for Scottish Highlanders as you wander this beautiful spot
            in the city and naturists if you venture near De Zonneweide.
          </Text>
        </Stack>
      </Frame>

      <AspectRatio ratio={4 / 2}>
        <img src="https://images.unsplash.com/photo-1630702379394-e202e2fbe01e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1617&q=80" />
      </AspectRatio>

      <Frame padding={[2, 4]}>
        <PostFooter />
      </Frame>
    </Card>
  );
};

export default PostCard;
