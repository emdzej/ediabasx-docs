# Testv.prg

- Jobs: [5](#jobs)
- Tables: [2](#tables)

## Jobs

### Index

- [initialisierung](#job-initialisierung) - Initialisierung
- [IDENT](#job-ident) - Ermittlung des Identifikations-Strings
- [CHECK](#job-check) - Darstellung aller Ergebnistypen
- [BINPARA](#job-binpara) - Verarbeitung binaerer Parameterdaten
- [WAIT](#job-wait) - Warten

### initialisierung

Initialisierung

_No arguments._

#### Results

| Name | Type | Comment |
| --- | --- | --- |
| DONE | int | 1 falls ok, sonst 0 |

### IDENT

Ermittlung des Identifikations-Strings

_No arguments._

#### Results

| Name | Type | Comment |
| --- | --- | --- |
| JOB_STATUS | string | Liefert: OKAY od. ERROR_PARAMETER |
| IDENTSTRING | string | Identifikations-String |
| DATE | string | Aktuelles Datum |
| TIME | string | Aktuelle Uhrzeit |

### CHECK

Darstellung aller Ergebnistypen

#### Arguments

| Name | Type | Comment |
| --- | --- | --- |
| WERT | string | Basiswert |

#### Results

| Name | Type | Comment |
| --- | --- | --- |
| JOB_STATUS | string | Liefert: OKAY od. ERROR_PARAMETER |
| APICHAR | char | char-Wert oder -44 falls kein Parameter uebergeben wurde |
| APIBYTE | unsigned char | unsigned char-Wert oder 222 falls kein Parameter uebergeben wurde |
| APIINTEGER | int | int-Wert oder -12345 falls kein Parameter uebergeben wurde |
| APIWORD | unsigned int | unsigned int-Wert oder 55555 falls kein Parameter uebergeben wurde |
| APILONG | long | long-Wert oder -4567890 falls kein Parameter uebergeben wurde |
| APIDWORD | unsigned long | unsigned long-Wert oder 7777666 falls kein Parameter uebergeben wurde |
| APITEXT | string | string-Wert oder "Softing GmbH" falls kein Parameter uebergeben wurde |
| APIBINARY | binary | data-Wert oder 64 Byte falls kein Parameter uebergeben wurde |
| APIREAL | real | real-Wert oder -1.2345E-06 falls kein Parameter uebergeben wurde |

### BINPARA

Verarbeitung binaerer Parameterdaten

#### Arguments

| Name | Type | Comment |
| --- | --- | --- |
| PARAMETER | binary | binaere Parameterdaten |

#### Results

| Name | Type | Comment |
| --- | --- | --- |
| JOB_STATUS | string | Liefert: OKAY oder ERROR_PARAMETER |
| PARA | binary | Parameterdaten |

### WAIT

Warten

#### Arguments

| Name | Type | Comment |
| --- | --- | --- |
| PARAMETER | unsigned int | Anzahl zu wartender Sekunden |

#### Results

| Name | Type | Comment |
| --- | --- | --- |
| JOB_STATUS | string | Liefert: OKAY oder ERROR_PARAMETER |

## Tables

### Index

- [JOBSTATUS](#table-jobstatus) (3 × 2)
- [IDENTSTRING](#table-identstring) (1 × 4)

### JOBSTATUS

Dimensions: 3 rows × 2 columns

| STATUS | ERGEBNIS |
| --- | --- |
| Ok | OKAY |
| Para | ERROR_PARAMETER |
| Tab | ERROR_TABELLE |

### IDENTSTRING

Dimensions: 1 rows × 4 columns

| STRING | STRING1 | STRING2 | STRING3 |
| --- | --- | --- | --- |
| Info | IDENT |  is |  ready. |
