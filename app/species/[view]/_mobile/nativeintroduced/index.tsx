import {
  Stack,
  Group,
  Anchor,
  Grid,
  GridCol,
  Text,
  Space,
  Table,
  TableTr,
  TableTh,
  TableTd,
  TableThead,
  TableTbody,
} from '@mantine/core';
import { IconInfoCircleFilled } from '@tabler/icons-react';

export default function SpeciesNativeIntroduced() {
  return (
    <Stack my={15} gap={15}>
      <Group gap={5}>
        <IconInfoCircleFilled size={14} />
        <Text fw="bold">About native / introduced</Text>
      </Group>
      <Text mt={-10}>
        This indicates if a species is regarded as introduced to Australia, a state, or territory.
        This can also include Australian native species which have been introduced in areas beyond
        their natural range, e.g a species native to NSW introduced to WA.
      </Text>
      <Table>
        <TableThead>
          <TableTr>
            <TableTh>Place</TableTh>
            <TableTh>Status</TableTh>
            <TableTh>Source</TableTh>
          </TableTr>
        </TableThead>
        <TableTbody>
          <TableTr>
            <TableTd>Oceania</TableTd>
            <TableTd>Native</TableTd>
            <TableTd>World species list</TableTd>
          </TableTr>
          <TableTr>
            <TableTd>Australia</TableTd>
            <TableTd>Endemic</TableTd>
            <TableTd>Aus species list</TableTd>
          </TableTr>
          <TableTr>
            <TableTd>NSW</TableTd>
            <TableTd>Native</TableTd>
            <TableTd>NSW species list</TableTd>
          </TableTr>
          <TableTr>
            <TableTd>SA</TableTd>
            <TableTd>Introduced</TableTd>
            <TableTd>SA species list</TableTd>
          </TableTr>
        </TableTbody>
      </Table>
    </Stack>
  );
}
