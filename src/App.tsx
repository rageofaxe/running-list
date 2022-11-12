import { Container, Flex } from "theme-ui";
import Checkboxes from "./components/Checkboxes";

const data = [
  "TODO: Something",
  "FIXME: As soon as possible",
  "OPTIMIZE: All things"
];

export default function App() {
  return (
    <Container>
      <Container variant="header">
        <h1>Week #32 of 2022</h1>
        <h3>Need to do something more!</h3>
      </Container>
      <Container>
        <Flex variant="layout.item">
          <Flex variant="layout.taskCheckboxes">
            <Container>M</Container>
            <Container>T</Container>
            <Container>W</Container>
            <Container>T</Container>
            <Container>F</Container>
            <Container>S</Container>
            <Container>S</Container>
          </Flex>
          <Container variant="taskItem">
            <b>ITEMS TITLE</b>
          </Container>
        </Flex>
        {data.map((x) => (
          <Flex variant="layout.item">
            <Checkboxes />
            <Container variant="taskItem">{x}</Container>
          </Flex>
        ))}
      </Container>
    </Container>
  );
}
