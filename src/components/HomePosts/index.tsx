import { useEffect, useState } from 'react';
import { Anchor, Box, Group, Image, Stack, Text, Title } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons';

type Link = {
  href: string;
  rel: string;
};

type Props = {
  title: string;
  published: string;
  comment: string;
  author: string;
  summary: string;
  image: string;
  link: Link[];
};

const Post = ({
  title,
  published,
  comment,
  author,
  summary,
  image,
  link,
}: Props) => {
  const entryShort = summary.substring(0, 200);
  const entryEnd = entryShort.lastIndexOf(' ');
  const postContent = entryShort.substring(0, entryEnd) + '...';
  const postImage = image
    .replace('s72-c/', 's300/')
    .replace('default.jpg', '0.jpg');

  let url;

  for (let j = 0; j < link.length; j++) {
    if (link[j].rel === 'alternate') {
      url = link[j].href;
      break;
    }
  }

  return (
    <Box>
      <Group p="md" noWrap>
        <Box>
          <Anchor href={url} target="_blank">
            <Image src={postImage} width={300} height={300} />
          </Anchor>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignSelf: 'flex-start',
            gap: 4,
          }}
          py="md"
        >
          <Title order={3} weight={800} mb="xs">
            {title}
          </Title>
          <Group spacing="xs">
            <Text color="dimmed" size="sm" weight={600}>
              {new Date(published).toLocaleDateString('pt-BR')}
            </Text>
            {/* <Text size="sm">{comment}</Text> */}
          </Group>
          <Text>{postContent.trim()}</Text>
          <Anchor
            sx={{ display: 'flex', alignItems: 'center' }}
            mt="lg"
            href={url}
            target="_blank"
          >
            <Text weight={600}>Link</Text> <IconChevronRight size={22} />
          </Anchor>
        </Box>
      </Group>
    </Box>
  );
};

const HomePosts = () => {
  const [posts, setPosts] = useState<any[]>([]);
  useEffect(() => {
    if (window?.blogspot) setPosts(window.blogspot);
  }, []);

  return (
    <Box
      sx={(theme) => ({
        marginTop: theme.spacing.xl * 2,
        marginBottom: theme.spacing.xl * 2,
      })}
    >
      <Title align="center" weight={700} mb="md">
        Posts
      </Title>
      <Stack>
        {posts.map((post) => (
          <Post
            key={post.id.$t}
            author={post.author[0].name.$t}
            comment={post.link[1].title}
            image={post.media$thumbnail.url}
            published={post.published.$t}
            title={post.title.$t}
            summary={post.summary.$t}
            link={post.link}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default HomePosts;
