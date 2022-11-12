import React, { useState } from "react";
import { Container, Flex } from "theme-ui";
import { TaksStatus } from "../types";

function Checkbox() {
  const [status, setStatus] = useState<TaksStatus | null>(null);
  const toggleStatus = () => {
    if (status === null) {
      setStatus(TaksStatus.PLANNED);
    }
    if (status === TaksStatus.PLANNED) {
      setStatus(TaksStatus.DONE);
    }
    if (status === TaksStatus.DONE) {
      setStatus(TaksStatus.MOVED);
    }
    if (status === TaksStatus.MOVED) {
      setStatus(TaksStatus.FAILED);
    }
  };
  return (
    <Container
      className="dayBlock"
      sx={{ cursor: "pointer" }}
      onClick={toggleStatus}
    >
      S{status}
    </Container>
  );
}

function Checkboxes() {
  return (
    <Flex variant="layout.taskCheckboxes">
      <Checkbox />
      <Checkbox />
      <Checkbox />
      <Checkbox />
      <Checkbox />
      <Checkbox />
      <Checkbox />
    </Flex>
  );
}

export default Checkboxes;
