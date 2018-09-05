# Panel

```.jsx
<Panel color='blue'>
  <Panel.Header
    color='white'
    bg='blue'>
    Hello
  </Panel.Header>
  <Box p={3}>
    <Subhead>
      Panel
    </Subhead>
  </Box>
  <Panel.Footer color='blue'>
    Footer
  </Panel.Footer>
</Panel>
```

prop | default | theme key | style type
---|---|---|---
borderRadius | 2 | radii | default
border | 1 | borders | responsive
borderTop |  | borders | responsive
borderRight |  | borders | responsive
borderBottom |  | borders | responsive
borderLeft |  | borders | responsive
borderColor | gray | colors | default