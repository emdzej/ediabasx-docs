# CLI

The CLI binary is `ediabasx` (package: `@ediabasx/cli`).

## Commands

### `ediabasx interfaces`
List available communication interfaces.

```bash
ediabasx interfaces
ediabasx interfaces --json
ediabasx interfaces --table
```

### `ediabasx gateway`
Start the JSON-RPC gateway server and expose an interface.

```bash
ediabasx gateway --interface serial --serial-port /dev/ttyUSB0 --serial-baud 9600
ediabasx gateway --interface enet --enet-host 192.168.0.1
```

Options:
- `--host <host>` (default: 127.0.0.1)
- `--port <port>` (default: 6801)
- plus all interface options below

### `ediabasx parse <file>`
Parse a PRG/GRP file.

```bash
ediabasx parse d_motor.prg --json
ediabasx parse d_motor.prg --table
```

### `ediabasx info <file>`
Show summary information for a PRG/GRP file.

```bash
ediabasx info d_motor.prg
ediabasx info d_motor.prg --json
```

### `ediabasx jobs <file>`
List all jobs with their arguments and results.

```bash
ediabasx jobs d_motor.prg
ediabasx jobs d_motor.prg --table
```

### `ediabasx table <file> <name>`
Show a specific table (human, JSON, or CSV).

```bash
ediabasx table d_motor.prg TABNAME
ediabasx table d_motor.prg TABNAME --json
ediabasx table d_motor.prg TABNAME --csv
```

### `ediabasx tables <file>`
List tables with row/column counts.

```bash
ediabasx tables d_motor.prg
ediabasx tables d_motor.prg --json
```

### `ediabasx explore <file>`
Interactive TUI for exploring PRG/GRP files.

```bash
ediabasx explore d_motor.prg
```

### `ediabasx simulator`
Start the interactive simulator (TUI + JSON-RPC server).

```bash
ediabasx simulator --host 127.0.0.1 --port 6802
ediabasx simulator --mode hex --line-ending lf
```

Options:
- `--host <host>` (default: 127.0.0.1)
- `--port <port>` (default: 6802)
- `--mode <text|hex>` (default: text)
- `--line-ending <crlf|lf|raw>` (default: crlf)

### `ediabasx disasm <file> [job]`
Disassemble bytecode into readable assembly.

```bash
ediabasx disasm d_motor.prg
ediabasx disasm d_motor.prg INFO
```

### `ediabasx run <file> [job] [params...]`
Execute a job from a PRG/GRP file. If `job` is omitted, an interactive TUI runner opens.

```bash
# simulation (default)
ediabasx run d_motor.prg INFO

# serial K-Line
ediabasx run d_motor.prg IDENT --interface serial --serial-port /dev/ttyUSB0 --serial-baud 9600 --serial-protocol kwp

# K+DCAN (ISO-TP)
ediabasx run d_motor.prg IDENT --interface kdcan --serial-port /dev/ttyUSB0 --serial-protocol isotp --serial-tester-can-id 0x7e0 --serial-ecu-can-id 0x7e8

# ENET
ediabasx run d_motor.prg IDENT --interface enet --enet-host 192.168.0.1 --enet-port 6801

# Run via remote gateway
ediabasx run d_motor.prg IDENT --interface gateway --gateway-host 192.168.1.50 --gateway-port 6801
```

Common options:
- `-s, --simulation` — alias for `--interface simulation`
- `-t, --timeout <ms>` — communication timeout (default: 5000)
- `--gateway <host:port>` — alias for `--interface gateway`
- `--json` — output results as JSON
- `--results <names>` — comma-separated results filter
- `--info` — show job info instead of executing

### `ediabasx docs <source-dir> <output-dir>`
Generate Markdown documentation for PRG/GRP files.

```bash
ediabasx docs ./sgbd ./docs/ecu
ediabasx docs ./sgbd ./docs/ecu --subdir sgbd
```

Options:
- `--subdir <name>` (default: sgbd)

## Interface Options
These options apply to `run` and `gateway`.

### Common
- `-i, --interface <name>` — `simulation|serial|kdcan|enet|gateway`
- `--gateway <host:port>` — alias for `--interface gateway`

### Serial / K+DCAN (`--interface serial` or `--interface kdcan`)
- `--serial-port <path>` — device path (e.g. `/dev/ttyUSB0`)
- `--serial-baud <baud>` — default: 9600 (serial), 115200 (kdcan)
- `--serial-data-bits <bits>` — 7|8 (default: 8)
- `--serial-parity <parity>` — none|even|odd (default: none)
- `--serial-stop-bits <bits>` — 1|2 (default: 1)
- `--serial-protocol <protocol>` — uart|kwp|tp20|isotp
- `--serial-init <mode>` — fast|five-baud
- `--serial-tester-can-id <id>` — tester CAN ID (hex or decimal)
- `--serial-ecu-can-id <id>` — ECU CAN ID (hex or decimal)
- `--serial-timeout <ms>` — receive timeout
- `--serial-p1 <ms>` / `--serial-p2 <ms>` / `--serial-p3 <ms>` — KWP timings
- `--serial-w1 <ms>` / `--serial-w2 <ms>` / `--serial-w3 <ms>` / `--serial-w4 <ms>` / `--serial-w5 <ms>` — KWP timings
- `--serial-inter-byte-time <ms>` — inter-byte delay
- `--serial-timeout-nr78 <ms>` — NR78 timeout
- `--serial-retry-nr78 <count>` — NR78 retry count

### ENET (`--interface enet`)
- `--enet-host <host>` — target host/IP
- `--enet-port <port>` — default: 6801

### Gateway (`--interface gateway`)
- `--gateway-host <host>` — default: 127.0.0.1
- `--gateway-port <port>` — default: 6801
