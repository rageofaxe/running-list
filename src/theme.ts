import type { Theme } from "theme-ui";

const theme: Theme = {
  fonts: {
    body: "monospace"
  },
  styles: {
    root: {
      fontFamily: "body",
      margin: 0
    }
  },
  layout: {
    header: {
      background: "#ccc",
      padding: "2rem"
    },
    item: {
      // flexDirection: "column-reverse",
    },
    taskItem: {
      background: "#777",
      flex: "3 1 0",
      padding: "2rem"
    },
    taskCheckboxes: {
      background: "#aaa",
      flex: "2 1 0",
      flexDirection: "row",
      padding: "2rem",
      gap: 16,
      "> div.dayBlock": {
        gap: 16,
        backgroundColor: "rgba(0, 255, 0, 0.2)"
      }
    }
  }
};

export default theme;
