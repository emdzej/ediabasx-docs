# TELEFON.prg

- Jobs: [5](#jobs)
- Tables: [4](#tables)

## INFO

| Field | Value |
| --- | --- |
| ECU | Telefon |
| ORIGIN | BMW TI-431 Rochal |
| REVISION | 1.40 |
| AUTHOR | BMW TP-421 Spoljarec, BMW TP-421 Teepe,BMW TI-433 Gelfert,BMW TI-431 Rochal |
| COMMENT | N/A |
| PACKAGE | 0.06 |
| SPRACHE | deutsch |

## Jobs

### Index

- [INFO](#job-info) - Information SGBD
- [INITIALISIERUNG](#job-initialisierung) - Init-Job fuer BMW-TELEFON
- [IDENT](#job-ident) - Ident-Daten fuer BMW-TELEFON
- [STATUS_LESEN](#job-status-lesen) - verschiedenen Teststati
- [DIAGNOSE_ENDE](#job-diagnose-ende) - Diagnose beenden

### INFO

Information SGBD

_No arguments._

#### Results

| Name | Type | Comment |
| --- | --- | --- |
| ECU | string | Steuergerät im Klartext |
| ORIGIN | string | Steuergeräte-Verantwortlicher |
| REVISION | string | Versions-Nummer |
| AUTHOR | string | Namen aller Autoren |
| COMMENT | string | wichtige Hinweise |
| PACKAGE | string | Include-Paket-Nummer |
| SPRACHE | string | deutsch, english |

### INITIALISIERUNG

Init-Job fuer BMW-TELEFON

_No arguments._

#### Results

| Name | Type | Comment |
| --- | --- | --- |
| DONE | int | 1 wenn Okay |

### IDENT

Ident-Daten fuer BMW-TELEFON

_No arguments._

#### Results

| Name | Type | Comment |
| --- | --- | --- |
| JOB_STATUS | string | Status der Kommunikation (z.B. ACK) |
| ID_BMW_NR | string | BMW-Teilenummer |
| ID_HW_NR | int | BMW-Hardwarenummer |
| ID_COD_INDEX | int | Codier-Index |
| ID_DIAG_INDEX | int | Diagnose-Index |
| ID_BUS_INDEX | int | Bus-Index |
| ID_DATUM_KW | int | Herstelldatum KW |
| ID_DATUM_JAHR | int | Herstelldatum Jahr |
| ID_LIEF_NR | string | Lieferanten-Nummer |
| ID_SW_NR | int | Softwarenummer |
| ID_LIEF_TEXT | string | Lieferantenname |
| ID_GERAETE_NAME | string | Telefontyp |

### STATUS_LESEN

verschiedenen Teststati

_No arguments._

#### Results

| Name | Type | Comment |
| --- | --- | --- |
| JOB_STATUS | string | Status der Kommunikation (z.B. ACK) |
| CS_EPROM_IO | int | 1 -> Checksumme EPROM in Ordnung |
| TEST_EEPROM_IO | int | 1 -> Schreib-/Lesetest EEPROM in Ordnung |
| LTG_SE_UNIT_IO | int | 1 -> Verbindung zum SE-Geraet in Ordnung |
| KARTENLESER_IO | int | 1 -> Kartenlesertest Eject-Box in Ordnung |

### DIAGNOSE_ENDE

Diagnose beenden

_No arguments._

#### Results

| Name | Type | Comment |
| --- | --- | --- |
| JOB_STATUS | string | Ergebnis ist immer OKAY, da nur Dummy |

## Tables

### Index

- [JOBRESULT](#table-jobresult) (6 × 2)
- [LIEFERANTEN](#table-lieferanten) (27 × 2)
- [TELEFONTYP](#table-telefontyp) (6 × 2)
- [TELEFONTYP_2](#table-telefontyp-2) (6 × 2)

### JOBRESULT

Dimensions: 6 rows × 2 columns

| SB | STATUS_TEXT |
| --- | --- |
| 0xA0 | OKAY |
| 0xA1 | BUSY |
| 0xA2 | ERROR_ECU_REJECTED |
| 0xB0 | ERROR_ECU_PARAMETER |
| 0xFF | ERROR_ECU_NACK |
| 0x00 | ERROR_ECU_UNKNOWN_STATUSBYTE |

### LIEFERANTEN

Dimensions: 27 rows × 2 columns

| LIEF_NR | LIEF_NAME |
| --- | --- |
| 0x01 | Reinshagen |
| 0x02 | Kostal |
| 0x03 | Hella |
| 0x04 | Siemens |
| 0x05 | Eaton |
| 0x06 | UTA |
| 0x07 | Helbako |
| 0x08 | Bosch |
| 0x09 | Loewe |
| 0x10 | VDO |
| 0x11 | Valeo |
| 0x12 | MBB |
| 0x13 | Kammerer |
| 0x14 | SWF |
| 0x15 | Blaupunkt |
| 0x16 | Philips |
| 0x17 | Alpine |
| 0x18 | Teves |
| 0x19 | Elektromatik Suedafrika |
| 0x20 | Becker |
| 0x21 | Preh |
| 0x22 | Alps |
| 0x23 | Motorola |
| 0x24 | Temic |
| 0x25 | Webasto |
| 0x26 | MotoMeter |
| 0xFF | unbekannter Hersteller |

### TELEFONTYP

Dimensions: 6 rows × 2 columns

| TYP_NR | TYP_NAME |
| --- | --- |
| 0x01 | GSM Phase IV |
| 0x02 | AMPS Phase IV |
| 0x03 | GSM Phase IV Plus |
| 0x04 | GSM Phase V |
| 0x05 | AMPS Phase V |
| 0xFF | unknown |

### TELEFONTYP_2

Dimensions: 6 rows × 2 columns

| TYP_NR | TYP_NAME |
| --- | --- |
| 01 | GSM PHASE IV |
| 02 | AMPS PHASEIV |
| 03 | GSM Phase IV Plus |
| 04 | GSM Phase V |
| 05 | AMPS Phase V |
| FF | unknown |
