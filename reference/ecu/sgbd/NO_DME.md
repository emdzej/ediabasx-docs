# NO_DME.PRG

- Jobs: [7](#jobs)
- Tables: [1](#tables)

## INFO

| Field | Value |
| --- | --- |
| ECU | NO_DME fuer EWS Dummycodierung |
| ORIGIN | BMW TP-421 Weber |
| REVISION | 1.15 |
| AUTHOR | BMW TP-421 Weber, BMW TP-421 Huber, BMW TP-421 Spoljarec |
| COMMENT | NO_DME fuer EWS Dummycodierung |
| PACKAGE | N/A |
| SPRACHE | deutsch |

## Jobs

### Index

- [INITIALISIERUNG](#job-initialisierung) - Einstellen der Kommunikationsparameter
- [INFO](#job-info) - Information SGBD
- [IDENT](#job-ident) - Ident-Daten fuer DME
- [ISN_LESEN](#job-isn-lesen)
- [DIAGNOSE_ENDE](#job-diagnose-ende)
- [STEUERN_SYNC_MODE](#job-steuern-sync-mode)
- [STATUS_SYNC_MODE](#job-status-sync-mode)

### INITIALISIERUNG

Einstellen der Kommunikationsparameter

_No arguments._

#### Results

| Name | Type | Comment |
| --- | --- | --- |
| DONE | int | 1, wenn i.O. |

### INFO

Information SGBD

_No arguments._

#### Results

| Name | Type | Comment |
| --- | --- | --- |
| ECU | string | Steuergeraet im Klartext |
| ORIGIN | string | Steuergeraete-Verantwortlicher |
| REVISION | string | Versions-Nummer |
| AUTHOR | string | Name aller Autoren |
| COMMENT | string | wichtige Hinweise |
| SPRACHE | string | deutsch, english |

### IDENT

Ident-Daten fuer DME

_No arguments._

#### Results

| Name | Type | Comment |
| --- | --- | --- |
| JOB_STATUS | string | Status der Kommunikation (z.B. ACK) |
| ID_EWS_SS | int | Identifikation EWS-Schnittstelle (aus EWS-SG) |

### ISN_LESEN

_No arguments._

#### Results

| Name | Type | Comment |
| --- | --- | --- |
| ISN_LESEN_WERT | string | ISN als  WERT |
| JOB_STATUS | string |  |

### DIAGNOSE_ENDE

_No arguments._

#### Results

| Name | Type | Comment |
| --- | --- | --- |
| JOB_STATUS | string |  |

### STEUERN_SYNC_MODE

#### Arguments

| Name | Type | Comment |
| --- | --- | --- |
| MODE | int |  |

#### Results

| Name | Type | Comment |
| --- | --- | --- |
| JOB_STATUS | string | "OKAY", wenn fehlerfrei |
| STEUERN_SYNC_MODE_STATUS | int | Statusflag |
| STEUERN_SYNC_MODE_TEXT | string | Statustext |

### STATUS_SYNC_MODE

_No arguments._

#### Results

| Name | Type | Comment |
| --- | --- | --- |
| JOB_STATUS | string | "OKAY", wenn fehlerfrei |
| STATUS_SYNC_MODE_STATUS | int | Statusflag |
| STATUS_SYNC_MODE_TEXT | string | Statustext |

## Tables

### Index

- [JOBRESULT](#table-jobresult) (7 × 2)

### JOBRESULT

Dimensions: 7 rows × 2 columns

| SB | STATUS_TEXT |
| --- | --- |
| 0xA0 | OKAY |
| 0xA1 | BUSY |
| 0xA2 | ERROR_ECU_REJECTED |
| 0xB0 | ERROR_ECU_PARAMETER |
| 0xB1 | ERROR_ECU_FUNCTION |
| 0xFF | ERROR_ECU_NACK |
| 0x00 | ERROR_ECU_UNKNOWN_STATUSBYTE |
