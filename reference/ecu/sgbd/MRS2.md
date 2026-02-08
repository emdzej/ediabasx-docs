# MRS2.prg

- Jobs: [18](#jobs)
- Tables: [5](#tables)

## INFO

| Field | Value |
| --- | --- |
| ECU | MRS2 |
| ORIGIN | BMW TI-433 Winkler H.-J. |
| REVISION | 1.11 |
| AUTHOR | BMW TP-421 Baumgartner, BMW TP-421 Winkler |
| COMMENT | N/A |
| PACKAGE | N/A |
| SPRACHE | deutsch |

## Jobs

### Index

- [INFO](#job-info) - Information SGBD
- [INITIALISIERUNG](#job-initialisierung) - Init-Job fuer AIRBAG ZAE II
- [IDENT](#job-ident) - Ident-Daten fuer AIRBAG ZAE II
- [STATUS_LESEN](#job-status-lesen) - Status des AIRBAG II lesen
- [FS_QUICK_LESEN](#job-fs-quick-lesen) - Quicktest High-Konzept nach Lastenheft (mit Abwandlungen)
- [FS_LESEN](#job-fs-lesen) - Fehlerspeicher lesen
- [FS_LOESCHEN](#job-fs-loeschen) - Fehlerspeicher loeschen
- [SG_LOGIN](#job-sg-login)
- [DIAGNOSE_ENDE](#job-diagnose-ende) - Diagnose beenden
- [SPEICHER_LESEN](#job-speicher-lesen) - Speicher lesen ZAE
- [DIAGNOSE_ERHALTEN](#job-diagnose-erhalten) - Diagnose aufrechterhalten
- [AUSSTATTUNG_LESEN](#job-ausstattung-lesen) - Ausstattung lesen ZAE2
- [VERRIEGELUNG_LESEN](#job-verriegelung-lesen) - Auslesen des Pruefstempels
- [VERRIEGELUNG_SCHREIBEN](#job-verriegelung-schreiben) - Verriegelungsbytes setzen
- [HERSTELLERDATEN_LESEN](#job-herstellerdaten-lesen) - Herstellerdaten des SG lesen
- [TYP_LESEN](#job-typ-lesen) - Typ des Fzg. lesen
- [AUSSTATTUNG_LESEN_EWS](#job-ausstattung-lesen-ews) - Ausstattung lesen
- [PRUEFCODE_LESEN](#job-pruefcode-lesen) - Lesen des Pruefcodes, besteht aus Identifikationsdaten, Ausstattungsdaten und dem FS-Inhalt, jedes Telegrammpaket ist durch ein 0x00 abgeschlossen

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

### INITIALISIERUNG

Init-Job fuer AIRBAG ZAE II

_No arguments._

#### Results

| Name | Type | Comment |
| --- | --- | --- |
| DONE | int | 1 wenn Okay |

### IDENT

Ident-Daten fuer AIRBAG ZAE II

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
| ID_LIEF_NR | int | Lieferanten-Nummer |
| ID_LIEF_TEXT | string | Lieferant |
| ID_SW_NR | int | Softwarenummer |

### STATUS_LESEN

Status des AIRBAG II lesen

_No arguments._

#### Results

| Name | Type | Comment |
| --- | --- | --- |
| JOB_STATUS | string | normalerweise OKAY |
| STAT_GURT_F_ANGESCHNALLT | int | 1 -> angeschnallt |
| STAT_GURT_BF_ANGESCHNALLT | int | 1 -> angeschnallt |
| STAT_SITZ_BF_BELEGT | int | 1 -> Beifahrersitz belegt |
| STAT_KINDERSITZ_BELEGT | int | 1 -> Beifahrersitz belegt |
| STAT_ZK0_LECK_UBATT_IO | int | 0 -> ZK0 Leckwiderstand gegen UBATT |
| STAT_ZK0_LECK_MASSE_IO | int | 0 -> ZK0 Leckwiderstand gegen Masse |
| STAT_ZK0_WID_SMALL_IO | int | 0 -> ZK0 Widerstand zu klein |
| STAT_ZK0_WID_BIG_IO | int | 0 -> ZK0 Widerstand zu gross |
| STAT_ZK1_LECK_UBATT_IO | int | 0 -> ZK1 Leckwiderstand gegen UBATT |
| STAT_ZK1_LECK_MASSE_IO | int | 0 -> ZK1 Leckwiderstand gegen Masse |
| STAT_ZK1_WID_SMALL_IO | int | 0 -> ZK1 Widerstand zu klein |
| STAT_ZK1_WID_BIG_IO | int | 0 -> ZK1 Widerstand zu gross |
| STAT_ZK2_LECK_UBATT_IO | int | 0 -> ZK2 Leckwiderstand gegen UBATT |
| STAT_ZK2_LECK_MASSE_IO | int | 0 -> ZK2 Leckwiderstand gegen Masse |
| STAT_ZK2_WID_SMALL_IO | int | 0 -> ZK2 Widerstand zu klein |
| STAT_ZK2_WID_BIG_IO | int | 0 -> ZK2 Widerstand zu gross |
| STAT_ZK3_LECK_UBATT_IO | int | 0 -> ZK3 Leckwiderstand gegen UBATT |
| STAT_ZK3_LECK_MASSE_IO | int | 0 -> ZK3 Leckwiderstand gegen Masse |
| STAT_ZK3_WID_SMALL_IO | int | 0 -> ZK3 Widerstand zu klein |
| STAT_ZK3_WID_BIG_IO | int | 0 -> ZK3 Widerstand zu gross |
| STAT_ZK4_LECK_UBATT_IO | int | 0 -> ZK4 Leckwiderstand gegen UBATT |
| STAT_ZK4_LECK_MASSE_IO | int | 0 -> ZK4 Leckwiderstand gegen Masse |
| STAT_ZK4_WID_SMALL_IO | int | 0 -> ZK4 Widerstand zu klein |
| STAT_ZK4_WID_BIG_IO | int | 0 -> ZK4 Widerstand zu gross |
| STAT_ZK5_LECK_UBATT_IO | int | 0 -> ZK5 Leckwiderstand gegen UBATT |
| STAT_ZK5_LECK_MASSE_IO | int | 0 -> ZK5 Leckwiderstand gegen Masse |
| STAT_ZK5_WID_SMALL_IO | int | 0 -> ZK5 Widerstand zu klein |
| STAT_ZK5_WID_BIG_IO | int | 0 -> ZK5 Widerstand zu gross |
| STAT_ZK6_LECK_UBATT_IO | int | 0 -> ZK6 Leckwiderstand gegen UBATT |
| STAT_ZK6_LECK_MASSE_IO | int | 0 -> ZK6Leckwiderstand gegen Masse |
| STAT_ZK6_WID_SMALL_IO | int | 0 -> ZK6 Widerstand zu klein |
| STAT_ZK6_WID_BIG_IO | int | 0 -> ZK6 Widerstand zu gross |
| STAT_ZK7_LECK_UBATT_IO | int | 0 -> ZK7 Leckwiderstand gegen UBATT |
| STAT_ZK7_LECK_MASSE_IO | int | 0 -> ZK7 Leckwiderstand gegen Masse |
| STAT_ZK7_WID_SMALL_IO | int | 0 -> ZK7 Widerstand zu klein |
| STAT_ZK7_WID_BIG_IO | int | 0 -> ZK7 Widerstand zu gross |
| STAT_ZK8_LECK_UBATT_IO | int | 0 -> ZK8 Leckwiderstand gegen UBATT |
| STAT_ZK8_LECK_MASSE_IO | int | 0 -> ZK8 Leckwiderstand gegen Masse |
| STAT_ZK8_WID_SMALL_IO | int | 0 -> ZK8 Widerstand zu klein |
| STAT_ZK8_WID_BIG_IO | int | 0 -> ZK8 Widerstand zu gross |
| STAT_ZK9_LECK_UBATT_IO | int | 0 -> ZK9 Leckwiderstand gegen UBATT |
| STAT_ZK9_LECK_MASSE_IO | int | 0 -> ZK9 Leckwiderstand gegen Masse |
| STAT_ZK9_WID_SMALL_IO | int | 0 -> ZK9 Widerstand zu klein |
| STAT_ZK9_WID_BIG_IO | int | 0 -> ZK9 Widerstand zu gross |
| STAT_ZK10_LECK_UBATT_IO | int | 0 -> ZK10 Leckwiderstand gegen UBATT |
| STAT_ZK10_LECK_MASSE_IO | int | 0 -> ZK10 Leckwiderstand gegen Masse |
| STAT_ZK10_WID_SMALL_IO | int | 0 -> ZK10 Widerstand zu klein |
| STAT_ZK10_WID_BIG_IO | int | 0 -> ZK10 Widerstand zu gross |
| STAT_ZK11_LECK_UBATT_IO | int | 0 -> ZK11 Leckwiderstand gegen UBATT |
| STAT_ZK11_LECK_MASSE_IO | int | 0 -> ZK11 Leckwiderstand gegen Masse |
| STAT_ZK11_WID_SMALL_IO | int | 0 -> ZK11 Widerstand zu klein |
| STAT_ZK11_WID_BIG_IO | int | 0 -> ZK11 Widerstand zu gross |
| STAT_GURTSCHL_BF_PLAUSI_IO | int | 0 -> Plausibilitaet BF NIO |
| STAT_KAS_BF_MASSE_IO | int | 0 -> Kabelanliegeschluss Gurtschloss Beifahrer gegen Masse |
| STAT_KAS_BF_UBATT_IO | int | 0 -> Kabelanliegeschluss Gurtschloss Beifahrer gegen UBATT |
| STAT_NA_BF_IO | int | 0 -> Nicht auswertbarer Fehler, Gurtschloss Beifahrer |
| STAT_GURTSCHL_F_PLAUSI_IO | int | 0 -> Plausibilitaet F NIO |
| STAT_KAS_F_MASSE_IO | int | 0 -> Kabelanliegeschluss Gurtschloss Fahrer gegen Masse |
| STAT_KAS_F_UBATT_IO | int | 0 -> Kabelanliegeschluss Gurtschloss Fahrer gegen UBATT |
| STAT_NA_F_IO | int | 0 -> Nicht auswertbarer Fehler, Gurtschloss Fahrer |
| STAT_SBE_PLAUSI | int | 0 -> SBE Plausibilitaet |
| STAT_SBE_PLUS_IO | int | 0 -> SBE / KSE Leitung gegen Plus |
| STAT_SBE_MASSE_IO | int | 0 -> SBE / KSE Leitung gegen Masse |
| STAT_SBE_KOMM_IO | int | 0 -> SBE defekt  Kommunikationsstoerung |
| STAT_SBE_SCHLUSS_IO | int | 0 -> SBE defekt: Kurzschluss |
| STAT_SBE_UNTERBRECHUNG_IO | int | 0 -> SBE defekt: Unterbrechung |
| STAT_LAMPE_SCHLUSS_UBATT_IO | int | 0 -> Fehlerlampe Schluss UBATT |
| STAT_LAMPE_SCHLUSS_MASSE_IO | int | 0 -> Fehlerlampe Schluss/ Unterbr. Masse |
| STAT_UNTERSPANNUNG_IO | int | 0 -> Unterspannungsfehler |
| STAT_KSE_PLAUSI_IO | int | 0 -> KSE Plausibilitaet Analog + Digital NIO |
| STAT_KSE_HARDWARE_IO | int | 0 -> KSE Hardware defekt |
| STAT_KSE_RESONATOR_IO | int | 0 -> KSE Resonator defekt |
| STAT_KSE_POSITION_IO | int | 0 -> Kindersitz falsch positioniert |
| STAT_KSE_ABSCHIRMUNG_IO | int | 0 -> KSE Abschirmung / externe Stoerung |
| STAT_MRSA_R_FEHLER_IO | int | 0 -> MRSA_R sendet Fehler |
| STAT_MRSA_L_FEHLER_IO | int | 0 -> MRSA_L sendet Fehler |
| STAT_MRSA_R_KOMM_IO | int | 0 -> MRSA_R Kommunikationsfehler |
| STAT_MRSA_L_KOMM_IO | int | 0 -> MRSA_L Kommunikationsfehler |
| STAT_MRSA_L_LEITUNG_IO | int | 0 -> MRSA_L Leitungsfehler |
| STAT_MRSA_R_LEITUNG_IO | int | 0 -> MRSA_R Leitungsfehler |
| STAT_MRSA_R_ALGO_IO | int | 0 -> MRSA_R falsche ALGO-Parameter |
| STAT_MRSA_L_ALGO_IO | int | 0 -> MRSA_L falsche ALGO-Parameter |

### FS_QUICK_LESEN

Quicktest High-Konzept nach Lastenheft (mit Abwandlungen)

_No arguments._

#### Results

| Name | Type | Comment |
| --- | --- | --- |
| JOB_STATUS | string | normalerweise OKAY |
| F_ANZ | int | Anzahl Fehler |

### FS_LESEN

Fehlerspeicher lesen

_No arguments._

#### Results

| Name | Type | Comment |
| --- | --- | --- |
| JOB_STATUS | string | normalerweise OKAY |
| F_ORT_NR | int | momentan identisch Fehlerbytemaske |
| F_HFK | int | Hauefigkeitszaehler |
| F_ORT_TEXT | string | Fehlerort als Text |
| F_ART1_NR | int | Index der 1. Fehlerart |
| F_ART1_TEXT | string | 1. Fehlerart als Text |
| F_ART2_NR | int | Index der 2. Fehlerart |
| F_ART2_TEXT | string | 2. Fehlerart als Text |
| F_ART3_NR | int | Index der 3. Fehlerart |
| F_ART3_TEXT | string | 3. Fehlerart als Text |
| F_ART4_NR | int | Index der 4. Fehlerart |
| F_ART4_TEXT | string | 4. Fehlerart als Text |
| F_ART5_NR | int | Index der 5. Fehlerart |
| F_ART5_TEXT | string | 5. Fehlerart als Text |
| F_ART6_NR | int | Index der 6. Fehlerart |
| F_ART6_TEXT | string | 6. Fehlerart als Text |
| F_ART7_NR | int | Index der 7. Fehlerart |
| F_ART7_TEXT | string | 7. Fehlerart als Text |
| F_ART_ANZ | int | Anzahl der Fehlerarten |
| F_UW_ANZ | int | Anzahl der Umweltbedingungen |
| F_SPORADIK | int | Sporadikzaehler (identisch Haeufigkeitszaehler) |
| BFU | long | Beginnfehleruhrzeit in Sec. |
| EFU | long | Endefehleruhrzeit in Sec. |

### FS_LOESCHEN

Fehlerspeicher loeschen

_No arguments._

#### Results

| Name | Type | Comment |
| --- | --- | --- |
| JOB_STATUS | string | OKAY, FEHLER |

### SG_LOGIN

_No arguments._

#### Results

| Name | Type | Comment |
| --- | --- | --- |
| JOB_STATUS | string | "OKAY, wenn fehlerfrei" |
| TELEGRAMM | binary | antworttelegramm |

### DIAGNOSE_ENDE

Diagnose beenden

_No arguments._

#### Results

| Name | Type | Comment |
| --- | --- | --- |
| JOB_STATUS | string | "OKAY", wenn fehlerfrei |

### SPEICHER_LESEN

Speicher lesen ZAE

#### Arguments

| Name | Type | Comment |
| --- | --- | --- |
| H_ADR | string | Startadresse High- Byte |
| L_ADR | string | Startadresse Low- Byte |
| ANZ_BYTE | string | Anzahl der zu lesenden Bytes |

#### Results

| Name | Type | Comment |
| --- | --- | --- |
| JOB_STATUS | string | OKAY, FEHLER |
| DATEN | binary | Codierdaten |

### DIAGNOSE_ERHALTEN

Diagnose aufrechterhalten

_No arguments._

#### Results

| Name | Type | Comment |
| --- | --- | --- |
| JOB_STATUS | string | "OKAY", wenn fehlerfrei |

### AUSSTATTUNG_LESEN

Ausstattung lesen ZAE2

_No arguments._

#### Results

| Name | Type | Comment |
| --- | --- | --- |
| JOB_STATUS | string | OKAY, FEHLER |
| AB_F_VERBAUT | int | 1 --> verbaut |
| GS_F_VERBAUT | int | 1 --> verbaut |
| AB_BF_VERBAUT | int | 1 --> verbaut |
| GS_BF_VERBAUT | int | 1 --> verbaut |
| AB_VORNE_LINKS | int | 1 --> verbaut |
| AB_VORNE_RECHTS | int | 1 --> verbaut |
| AB_HINTEN_LINKS | int | 1 --> verbaut |
| AB_HINTEN_RECHTS | int | 1 --> verbaut |
| AB_KOPF_LINKS | int | 1 --> verbaut |
| AB_KOPF_RECHTS | int | 1 --> verbaut |
| AB_BATTERIE_WEG | int | 1 --> verbaut |
| AB_BF2_VERBAUT | int | 1 --> verbaut |
| AB_ZUENDBOX | int | Existiert nicht, daher immer 0 |
| SCHLOSS_F_VERBAUT | int | 1 --> verbaut |
| SCHLOSS_BF_VERBAUT | int | 1 --> verbaut |
| SITZ_ERKENNUNG_VERBAUT | int | 1 --> verbaut |
| SBE_PROTOKOLL_NEU | int | 1 --> installiert |
| KINDERSITZ_ERKENNUNG_VERBAUT | int | 1 --> verbaut |
| US_VERSION | int | 1 --> US Version |
| TRIGGERSCHALTER_VERBAUT | int | 1 --> Triggerschalter verbaut |
| MRS1_EMULATION | int | 1 --> Emulation aktiv |
| ZAE2_EMULATION | int | 1 --> Emulation aktiv |

### VERRIEGELUNG_LESEN

Auslesen des Pruefstempels

_No arguments._

#### Results

| Name | Type | Comment |
| --- | --- | --- |
| JOB_STATUS | string | OKAY, FEHLER |
| BYTE1 | int | kann beliebig verwendet werden |
| BYTE2 | int | kann beliebig verwendet werden |
| BYTE3 | int | kann beliebig verwendet werden |

### VERRIEGELUNG_SCHREIBEN

Verriegelungsbytes setzen

_No arguments._

#### Results

| Name | Type | Comment |
| --- | --- | --- |
| JOB_STATUS | string | OKAY, FEHLER |
| ERROR_CODE | string | OKAY, FEHLER |

### HERSTELLERDATEN_LESEN

Herstellerdaten des SG lesen

_No arguments._

#### Results

| Name | Type | Comment |
| --- | --- | --- |
| JOB_STATUS | string | OKAY, FEHLER |
| TYP | string | z.B: E31 / 03h , E34 / 01h ... |
| CODIERDATUM | string | z.B: 21.4.93 ... |
| WERKSKENNUNG | string | z.B: |
| HAENDLERKENNUNG | string | z.B: |
| FGNUMMER | string | Fahrgestellnummer |
| DATEN | binary | Antworttelegramm |
| DATEN1 | binary | Antworttelegramm |
| ERROR_CODE | string | OKAY, FEHLER |

### TYP_LESEN

Typ des Fzg. lesen

_No arguments._

#### Results

| Name | Type | Comment |
| --- | --- | --- |
| JOB_STATUS | string | OKAY, FEHLER |
| TYP | string | z.B: E31 / 03h , E34 / 01h ... |

### AUSSTATTUNG_LESEN_EWS

Ausstattung lesen

_No arguments._

#### Results

| Name | Type | Comment |
| --- | --- | --- |
| JOB_STATUS | string | OKAY, FEHLER |
| AUSSTATTUNG | string | x Ausstattungsbytes als String |

### PRUEFCODE_LESEN

Lesen des Pruefcodes, besteht aus Identifikationsdaten, Ausstattungsdaten und dem FS-Inhalt, jedes Telegrammpaket ist durch ein 0x00 abgeschlossen

_No arguments._

#### Results

| Name | Type | Comment |
| --- | --- | --- |
| JOB_STATUS | string | Status der Kommunikation (z.B. ACK) |
| PRUEFCODE | binary | Daten in Hex-Format |

## Tables

### Index

- [JOBRESULT](#table-jobresult) (8 × 2)
- [FORTTEXTE](#table-forttexte) (33 × 2)
- [FARTMATRIX](#table-fartmatrix) (33 × 15)
- [FARTTEXTE](#table-farttexte) (19 × 2)
- [LIEFERANTEN](#table-lieferanten) (31 × 2)

### JOBRESULT

Dimensions: 8 rows × 2 columns

| SB | STATUS_TEXT |
| --- | --- |
| 0xA0 | OKAY |
| 0xA1 | BUSY |
| 0xA2 | ERROR_ECU_REJECTED |
| 0xB0 | ERROR_ECU_PARAMETER |
| 0xB1 | ERROR_ECU_FUNCTION |
| 0xB2 | ERROR_ECU_NUMBER |
| 0xFF | ERROR_ECU_NACK |
| 0x00 | ERROR_ECU_UNKNOWN_STATUSBYTE |

### FORTTEXTE

Dimensions: 33 rows × 2 columns

| ORT | ORTTEXT |
| --- | --- |
| 0x01 | interner Steuergeraetefehler |
| 0x02 | Ausfallwarnlampe |
| 0x03 | Versorgungsspannung |
| 0x04 | Zuendkreis 0  -> Fahrer Airbag |
| 0x05 | Zuendkreis 1  -> Fahrer Gurtstrammer |
| 0x06 | Zuendkreis 2  -> Beifahrer Gurtstrammer |
| 0x07 | Zuendkreis 3  -> Beifahrer Airbag Stufe 1 |
| 0x08 | Zuendkreis 4  -> Seitenairbag links  |
| 0x09 | Zuendkreis 5  -> Seitenairbag rechts  |
| 0x0A | Zuendkreis 6  -> Seitenairbag hinten links  |
| 0x0B | Zuendkreis 7  -> Seitenairbag hinten rechts  |
| 0x0C | Zuendkreis 8  -> Airbag Kopf links  |
| 0x0D | Zuendkreis 9  -> Airbag Kopf rechts  |
| 0x0E | Zuendkreis 10 -> Batterieabtrennung  |
| 0x0F | Zuendkreis 11 -> Beifahrer Airbag Stufe 2 |
| 0x10 | Gurtschloss Fahrer |
| 0x11 | Gurtschloss Beifahrer |
| 0x12 | Sensor Seitenairbag links Leitungsfehler |
| 0x13 | Sensor Seitenairbag links falsche Algo- Parameter |
| 0x14 | Sensor Seitenairbag links sendet fehlerhafte Daten |
| 0x15 | Sensor Seitenairbag rechts Leitungsfehler |
| 0x16 | Sensor Seitenairbag rechts falsche Algo- Parameter |
| 0x17 | Sensor Seitenairbag rechts sendet fehlerhafte Daten |
| 0x18 | Sitzbelegungserkennung |
| 0x1A | Sitzbelegungserkennung: Kodierdaten stimmen mit Austattung nicht ueberein |
| 0x1C | Digitale KSE |
| 0x1D | KSE: Kodierdaten stimmen mit Austattung nicht ueberein |
| 0x1F | KSE: Hardware defekt |
| 0x20 | Sensor Seitenairbag links Kommunikationsfehler oder Leitungsunterbrechung |
| 0x21 | Sensor Seitenairbag rechts Kommunikationsfehler oder Leitungsunterbrechung |
| 0x35 | Sensor Seitenairbag links: Kodierdaten stimmen mit Austattung nicht ueberein |
| 0x36 | Sensor Seitenairbag rechts: Kodierdaten stimmen mit Austattung nicht ueberein |
| 0xFF | unbekannter Fehlerort |

### FARTMATRIX

Dimensions: 33 rows × 15 columns

| ORT | A1_0 | A1_1 | A2_0 | A2_1 | A3_0 | A3_1 | A4_0 | A4_1 | A5_0 | A5_1 | A6_0 | A6_1 | A7_0 | A7_1 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0x0F |
| 0x02 | 0xFF | 0xFF | 0xFF | 0x04 | 0xFF | 0xFF | 0xFF | 0x10 | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0x0F |
| 0x03 | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0x20 | 0xFF | 0xFF | 0xFF | 0x0F |
| 0x04 | 0x00 | 0xFF | 0xFF | 0xFF | 0xFF | 0x08 | 0xFF | 0x10 | 0xFF | 0x20 | 0xFF | 0x40 | 0xFF | 0x0F |
| 0x05 | 0x00 | 0xFF | 0xFF | 0xFF | 0xFF | 0x08 | 0xFF | 0x10 | 0xFF | 0x20 | 0xFF | 0x40 | 0xFF | 0x0F |
| 0x06 | 0x00 | 0xFF | 0xFF | 0xFF | 0xFF | 0x08 | 0xFF | 0x10 | 0xFF | 0x20 | 0xFF | 0x40 | 0xFF | 0x0F |
| 0x07 | 0x00 | 0xFF | 0xFF | 0xFF | 0xFF | 0x08 | 0xFF | 0x10 | 0xFF | 0x20 | 0xFF | 0x40 | 0xFF | 0x0F |
| 0x08 | 0x00 | 0xFF | 0xFF | 0xFF | 0xFF | 0x08 | 0xFF | 0x10 | 0xFF | 0x20 | 0xFF | 0x40 | 0xFF | 0x0F |
| 0x09 | 0x00 | 0xFF | 0xFF | 0xFF | 0xFF | 0x08 | 0xFF | 0x10 | 0xFF | 0x20 | 0xFF | 0x40 | 0xFF | 0x0F |
| 0x0A | 0x00 | 0xFF | 0xFF | 0xFF | 0xFF | 0x08 | 0xFF | 0x10 | 0xFF | 0x20 | 0xFF | 0x40 | 0xFF | 0x0F |
| 0x0B | 0x00 | 0xFF | 0xFF | 0xFF | 0xFF | 0x08 | 0xFF | 0x10 | 0xFF | 0x20 | 0xFF | 0x40 | 0xFF | 0x0F |
| 0x0C | 0x00 | 0xFF | 0xFF | 0xFF | 0xFF | 0x08 | 0xFF | 0x10 | 0xFF | 0x20 | 0xFF | 0x40 | 0xFF | 0x0F |
| 0x0D | 0x00 | 0xFF | 0xFF | 0xFF | 0xFF | 0x08 | 0xFF | 0x10 | 0xFF | 0x20 | 0xFF | 0x40 | 0xFF | 0x0F |
| 0x0E | 0x00 | 0xFF | 0xFF | 0xFF | 0xFF | 0x08 | 0xFF | 0x10 | 0xFF | 0x20 | 0xFF | 0x40 | 0xFF | 0x0F |
| 0x0F | 0x00 | 0xFF | 0xFF | 0xFF | 0xFF | 0x08 | 0xFF | 0x10 | 0xFF | 0x20 | 0xFF | 0x40 | 0xFF | 0x0F |
| 0x10 | 0x00 | 0x02 | 0xFF | 0xFF | 0xFF | 0x08 | 0xFF | 0x10 | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0x0F |
| 0x11 | 0x00 | 0x02 | 0xFF | 0xFF | 0xFF | 0x08 | 0xFF | 0x10 | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0x0F |
| 0x12 | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0x0F |
| 0x13 | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0x0F |
| 0x14 | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0x0F |
| 0x15 | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0x0F |
| 0x16 | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0x0F |
| 0x17 | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0x0F |
| 0x18 | 0x06 | 0xFF | 0xFF | 0xFF | 0xFF | 0x08 | 0xFF | 0x10 | 0xFF | 0x03 | 0xFF | 0x05 | 0xFF | 0x0F |
| 0x1A | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0x0F |
| 0x1B | 0x06 | 0xFF | 0xFF | 0xFF | 0xFF | 0x08 | 0xFF | 0x0E | 0xFF | 0x0C | 0xFF | 0x0A | 0xFF | 0x0F |
| 0x1C | 0xFF | 0x09 | 0xFF | 0xFF | 0xFF | 0x0B | 0xFF | 0xFF | 0xFF | 0x0C | 0xFF | 0x0A | 0xFF | 0x0F |
| 0x1D | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0x0F |
| 0x1F | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0x0F |
| 0x20 | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0x0F |
| 0x21 | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0x0F |
| 0x35 | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0x0F |
| 0x36 | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0x0F |

### FARTTEXTE

Dimensions: 19 rows × 2 columns

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | Kodierdaten stimmen nicht mit Ausstattung ueberein |
| 0x01 | Leitungsfehler |
| 0x02 | Widerstand nicht definiert |
| 0x03 | Kurzschluss der Sitzmatte |
| 0x04 | Masseschluss / Unterbrechung |
| 0x05 | Unterbrechung der Sitzmatte |
| 0x06 | Kommunikationsstoerung |
| 0x08 | Masseschluss |
| 0x09 | Allgemeiner KSE- Fehler |
| 0x0A | Abschirmung / externe Stoerung |
| 0x0B | Kindersitz falsch positioniert |
| 0x0C | Kindersitz- Resonator defekt |
| 0x0D | Hardware defekt |
| 0x0E | KSE- Leitung Plus |
| 0x10 | Kurzschluss gegen U-Batt |
| 0x20 | Grenzwertunterschreitung |
| 0x40 | Grenzwertueberschreitung |
| 0x0F | Fehler momentan vorhanden |
| 0xFF | -- |

### LIEFERANTEN

Dimensions: 31 rows × 2 columns

| LIEF_NR | LIEF_NAME |
| --- | --- |
| 0x01 | Reinshagen / Delphi |
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
| 0x27 | Delphi PHI |
| 0x28 | DODUCO |
| 0x29 | DENSO |
| 0x30 | NEC |
| 0xFF | unbekannter Hersteller |
