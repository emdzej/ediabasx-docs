export default {
  title: "Ediabas",
  description: "BMW diagnostic protocol implementation in TypeScript",
  base: "/ediabas-docs/",  
  markdown: {
    html: false,
  },
  themeConfig: {
    nav: [
      { text: "Guide", link: "/guide/getting-started" },
      { text: "Reference", link: "/reference/cli" },
      { text: "GitHub", link: "https://github.com/emdzej/ediabas" },
    ],
    sidebar: {
      "/guide/": [
        {
          text: "Guide",
          items: [
            { text: "Getting Started", link: "/guide/getting-started" },
            { text: "Interfaces", link: "/guide/interfaces" },
            { text: "Running Jobs", link: "/guide/running-jobs" },
            { text: "Simulator", link: "/guide/simulator" },
            { text: "Troubleshooting", link: "/guide/troubleshooting" },
          ],
        },
      ],
      "/reference/": [
        {
          text: "Reference",
          items: [
            { text: "CLI", link: "/reference/cli" },
            { text: "Interpreter", link: "/reference/interpreter" },
            { text: "Opcode Quick Ref", link: "/reference/opcode-quick-ref" },
            { text: "Opcodes", link: "/reference/opcodes" },
          ],
        },
      ],
      "/reference/ecu/": [
        {
          text: "ECU Reference",
          items: [{ text: "ECU Index", link: "/reference/ecu/index" }],
        },
      ],
    },
  },
};
