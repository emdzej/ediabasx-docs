export default {
  title: "EdiabasX",
  description: "Cross platform, eXtended Ediabas implementation",
  base: "/ediabasx-docs/",
  markdown: {
    html: false,
  },
  themeConfig: {
    nav: [
      { text: "Guide", link: "/guide/getting-started" },
      { text: "Reference", link: "/reference/cli" },
      { text: "SGBD Reference", link: "/ecu/summary" },
      { text: "GitHub", link: "https://github.com/emdzej/ediabasx" },
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
            { text: "BEST/1/2 Interpreter", link: "/reference/interpreter" },
            { text: "Opcode Quick Ref", link: "/reference/opcode-quick-ref" },
            { text: "Opcodes", link: "/reference/opcodes" },
          ],
        },
      ],
      "/ecu/": [
        {
          text: "SGBD Reference",
          items: [
            { text: "About", link: "/ecu/about" },
            { text: "Summary", link: "/ecu/summary" },
            { text: "ECU Index", link: "/ecu/index" }
          ],
        },
      ],
    },
  },
};
