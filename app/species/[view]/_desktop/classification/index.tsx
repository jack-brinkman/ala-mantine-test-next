import { Container, Grid, GridCol, Space, Stack, Group, Text, Anchor } from '@mantine/core';

import { IconInfoCircleFilled } from '@tabler/icons-react';

import classes from './page.module.css';

const data = [
  [{ label: 'Kingdom', value: <Anchor>Animalia</Anchor> }],
  [{ label: 'Phylum', value: <Anchor>Chordata</Anchor> }],
  [{ label: 'Subphylum', value: <Anchor>Vertebrata</Anchor> }],
  [{ label: 'Informal', value: <Anchor>Gnathostomata</Anchor> }],
  [{ label: 'Class', value: <Anchor>Aves</Anchor> }],
  [{ label: 'Order', value: <Anchor>Struthioniformes</Anchor> }],
  [{ label: 'Suborder', value: <Anchor>Casuari</Anchor> }],
  [{ label: 'Family', value: <Anchor>Casuariidae</Anchor> }],
  [{ label: 'Subfamily', value: <Anchor>Dromaiinae</Anchor> }],
  [{ label: 'Genus', value: <Anchor>Dromaius</Anchor> }],
  [
    { label: 'Species', value: <Text fs="italic">Dromaius novaehollandiae</Text>, selected: true },
    {
      label: 'Unranked',
      value: (
        <Text>
          <i>Dromaius novaehollandiae baudinianus</i> (Latham, 1790)
        </Text>
      ),
    },
    { label: 'Unranked', value: <Text>Dromaius novaehollandiae diemenensis Le Souef</Text> },
    {
      label: 'Subspecies',
      value: (
        <Text>
          <i>Dromaius novaehollandiae diemenianus</i> (Jennings, 1827)
        </Text>
      ),
    },
    {
      label: 'Subspecies',
      value: (
        <Text>
          <i>Dromaius novaehollandiae novaehollandiae</i> (Latham, 1790)
        </Text>
      ),
    },
  ],
];

export default function SpeciesClassification() {
  return (
    <>
      <Container size="lg">
        <Grid gutter="xl">
          <GridCol span={8}>
            <Stack gap={0}>
              {data.map((items, index) => (
                <Stack ml={index * 20} gap={0} key={`${index}`}>
                  {items.map(({ label, value, selected }, index) => (
                    <Group key={`${label}-${index}`}>
                      <Group
                        className={selected ? classes.highlighted : undefined}
                        pl={12}
                        pr={selected ? 12 : 0}
                        py={5}
                        my={selected ? 10 : 0}
                        style={{ borderRadius: 5 }}
                      >
                        <Text fw="bold" w={83}>
                          {label}
                        </Text>
                        {value}
                      </Group>
                    </Group>
                  ))}
                </Stack>
              ))}
            </Stack>
          </GridCol>
          <GridCol span={4}>
            <Group mt={30} gap={5}>
              <IconInfoCircleFilled size={14} />
              <Text fw="bold">About classification</Text>
            </Group>
            <Text mt={10}>
              Classification of organisms allows us to group them and imply how they are related to
              each other. This includes a hierarchy of ranks e.g. kingdom, phylum etc. for more
              information see <Anchor>An introduction to taxonomy</Anchor>
            </Text>
          </GridCol>
        </Grid>
        <Space h={72} />
      </Container>
    </>
  );
}
