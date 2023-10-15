import Image from 'next/image'
import { fun_list_project } from './app_modules/projects/fun/list_projects'
import { Box, Button, Flex, Paper, ScrollArea, SimpleGrid, Stack, Text, Title } from '@mantine/core'
import { fun_pm2_jslist } from './app_modules/projects/fun/pm2_jlist'
import _ from 'lodash'
import ViewHtop from './app_modules/projects/view/htop'
import WidgetIo from './app_modules/io'

export default async function Home() {
  const list_projects = await fun_list_project()
  const j_ststus = await fun_pm2_jslist()
  return (
    <>
      <WidgetIo />
      <Stack bg={"dark"} p={"md"} >
        <Stack c={"green"} gap={0} >
          <Title >BIP-MONITOR</Title>
          <Text>Wibu-Dev</Text>
        </Stack>
        <SimpleGrid cols={{
          base: 1,
          md: 3
        }}>
          <Paper bg={"dark"} c={"white"} p={"xs"} withBorder={true} style={{
            borderColor: "green"
          }}>
            <Stack>
              <Title c={"green"} order={3}>PROJECTS</Title>
              <ScrollArea h={300}>
                {list_projects.map((v, k) => <Box key={k} >
                  <Flex gap={"md"}>
                    <Text>{k + 1}</Text>
                    <Text>{v}</Text>
                  </Flex>
                </Box>)}
              </ScrollArea>
            </Stack>
          </Paper>
          <Paper bg={"dark"} c={"white"} withBorder={true} p={"xs"} style={{
            borderColor: "green"
          }}>
            <Stack>
              <Title c={"green"} order={3}>SERVER</Title>
              <ScrollArea h={300}>
                {j_ststus.map((v, k) => <Box key={k}>
                  <Flex gap={"md"}>
                    <Text>{k + 1}</Text>
                    <Text>{v.name}</Text>
                    <Text c={v.pm2_env.status === "stopped" ? "red" : "green"}>{v.pm2_env.status}</Text>
                  </Flex>
                </Box>)}
              </ScrollArea>
            </Stack>
          </Paper>

        </SimpleGrid>
        <Paper bg={"dark"} p={"xs"} withBorder={true} style={{
          borderColor: "green"
        }}>
          <Stack>
            <Title order={3} c={"green"}>CPU</Title>
            <ScrollArea h={300}>
              <ViewHtop />
            </ScrollArea>
          </Stack>
        </Paper>
      </Stack>
    </>
  )
}
