export default {
  title: "EdiabasX",
  description: "Cross platform, eXtended Ediabas implementation",
  base: "/ediabasx-docs/",
  markdown: {
    html: true,
    attrs: { disable: true },
  },
  themeConfig: {
    nav: [
      { text: "Guide", link: "/guide/getting-started" },
      { text: "Reference", link: "/reference/cli" },
      { text: "SGBD Reference", link: "https://emdzej.github.io/ediabasx-docs-sgbd" },
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
            { text: "Opcodes Pseudocode (RE)", link: "/reference/opcodes-pseudocode" },
            { text: "VM Decompilation Analysis", link: "/reference/vm-decompilation-analysis" },
          ],
        },
        {
          text: "Interface Drivers",
          items: [
            { text: "Overview", link: "/reference/interfaces/README" },
            { text: "XEnet32 (Ethernet)", link: "/reference/interfaces/xenet32-analysis" },
            { text: "XStd32 (Serial Wrapper)", link: "/reference/interfaces/xstd32-analysis" },
            { text: "OBD32 (K-Line/KWP)", link: "/reference/interfaces/obd32-analysis" },
            { text: "OBD32 Protocols", link: "/reference/interfaces/obd32-protocols" },
            { text: "XNul32 (Null)", link: "/reference/interfaces/xnul32-analysis" },
          ],
        },
      ],      
    },
  },
};
