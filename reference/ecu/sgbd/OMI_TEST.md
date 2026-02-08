# OMI_TEST.prg

- Jobs: [53](#jobs)
- Tables: [2](#tables)

## INFO

| Field | Value |
| --- | --- |
| ECU | OMITEC-Test SGBD |
| ORIGIN | BMW TI-538 Drexel |
| REVISION | 3.01 |
| AUTHOR | BMW TI-538 Drexel |
| COMMENT | need EDIABAS 7.x.x |
| PACKAGE | 1.52 |
| SPRACHE | deutsch |

## Jobs

### Index

- [INFO](#job-info) - Information SGBD
- [INITIALISIERUNG](#job-initialisierung) - Default init job
- [ifvers](#job-ifvers) - #define GETVERSION       11
- [iftype](#job-iftype) - #define GETTYPE          18
- [ifreset](#job-ifreset) - #define RESET            1
- [ifboot](#job-ifboot) - #define WARMSTART        2
- [get_battery_voltage](#job-get-battery-voltage) - #define POWERSUPPLY      3
- [get_ignition_voltage](#job-get-ignition-voltage) - #define IGNITION         4
- [set_protocol](#job-set-protocol) - #define SETPARAMETER     5
- [set_ds1](#job-set-ds1) - #define SETPARAMETER     5
- [set_ds2](#job-set-ds2) - #define SETPARAMETER     5
- [set_bmw_fast](#job-set-bmw-fast) - #define SETPARAMETER     5
- [set_kwp2000star](#job-set-kwp2000star) - #define SETPARAMETER     5
- [set_kwp2000](#job-set-kwp2000) - #define SETPARAMETER     5
- [set_kwp2000can](#job-set-kwp2000can) - #define SETPARAMETER     5
- [sendtelegram](#job-sendtelegram) - #define SENDRECEIVETELEGRAM 6
- [send](#job-send) - #define SENDTELEGRAM 23
- [receive](#job-receive) - #define RECEIVETELEGRAM 24
- [recv_keybytes](#job-recv-keybytes) - #define REQUEST_KEYBYTES 7
- [ifsetport](#job-ifsetport) - #define SETPORT          8
- [ifgetport](#job-ifgetport) - #define GETPORT          9
- [ifloopt](#job-ifloopt) - #define LOOPTEST         10
- [send_frequent](#job-send-frequent) - #define SENDFREQ         12
- [recv_frequent](#job-recv-frequent) - #define REQUFREQ         13
- [stop_frequent](#job-stop-frequent) - #define STOPFREQ         14
- [set_program_voltage](#job-set-program-voltage) - #define SETUPROG         16
- [ifsireset](#job-ifsireset) - #define SIRESET          17
- [ifrequeststate](#job-ifrequeststate) - #define KLEMMENSTATUS    19
- [set_answer_length](#job-set-answer-length) - #define AWLEN            20
- [setconfigstring](#job-setconfigstring) - #define SETCONFIGSTRING  21
- [getconfigstring](#job-getconfigstring) - #define GETCONFIGSTRING  22
- [ifrawmode](#job-ifrawmode)
- [SG_SIMULATOR_PARAM_DS1](#job-sg-simulator-param-ds1)
- [SG_SIMULATOR_PARAM_DS2](#job-sg-simulator-param-ds2)
- [SG_SIMULATOR_PARAM_BMW_FAST](#job-sg-simulator-param-bmw-fast)
- [SG_SIMULATOR_PARAM_KWP2000star](#job-sg-simulator-param-kwp2000star)
- [SG_SIMULATOR_PARAM_KWP2000](#job-sg-simulator-param-kwp2000)
- [SG_SIMULATOR_DS1](#job-sg-simulator-ds1) - Steuergeraete-Simulation
- [SG_SIMULATOR_DS2](#job-sg-simulator-ds2) - Steuergeraete-Simulation
- [SG_SIMULATOR_BMW_FAST](#job-sg-simulator-bmw-fast) - Steuergeraete-Simulation
- [SG_SIMULATOR_KWP2000star](#job-sg-simulator-kwp2000star) - Steuergeraete-Simulation
- [SG_SIMULATOR_KWP2000](#job-sg-simulator-kwp2000) - Steuergeraete-Simulation
- [SG_MONITOR_DS1](#job-sg-monitor-ds1) - Steuergeraete-Monitor
- [SG_MONITOR_DS2](#job-sg-monitor-ds2) - Steuergeraete-Monitor
- [SG_MONITOR_BMW_FAST](#job-sg-monitor-bmw-fast) - Steuergeraete-Monitor
- [SG_MONITOR_KWP2000star](#job-sg-monitor-kwp2000star) - Steuergeraete-Monitor
- [SG_MONITOR_KWP2000](#job-sg-monitor-kwp2000) - Steuergeraete-Monitor
- [GetFirmwareVersion](#job-getfirmwareversion)
- [GetAutomaticMode](#job-getautomaticmode)
- [SetAutomaticMode](#job-setautomaticmode)
- [SendCanMessage](#job-sendcanmessage)
- [SetCanAcceptanceFilter](#job-setcanacceptancefilter)
- [GetCanMessage](#job-getcanmessage)

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

Default init job

_No arguments._

#### Results

| Name | Type | Comment |
| --- | --- | --- |
| DONE | int |  |

### ifvers

#define GETVERSION       11

_No arguments._

#### Results

| Name | Type | Comment |
| --- | --- | --- |
| OUT | long |  |

### iftype

#define GETTYPE          18

_No arguments._

#### Results

| Name | Type | Comment |
| --- | --- | --- |
| OUT | binary |  |

### ifreset

#define RESET            1

_No arguments._

_No results._

### ifboot

#define WARMSTART        2

_No arguments._

_No results._

### get_battery_voltage

#define POWERSUPPLY      3

_No arguments._

#### Results

| Name | Type | Comment |
| --- | --- | --- |
| OUT | long |  |

### get_ignition_voltage

#define IGNITION         4

_No arguments._

#### Results

| Name | Type | Comment |
| --- | --- | --- |
| OUT | long |  |

### set_protocol

#define SETPARAMETER     5

#### Arguments

| Name | Type | Comment |
| --- | --- | --- |
| _PROTOCOL | int |  |

#### Results

| Name | Type | Comment |
| --- | --- | --- |
| OUT | binary |  |
| PROTOCOL | int |  |
| PROTOCOL_TEXT | string |  |

### set_ds1

#define SETPARAMETER     5

#### Arguments

| Name | Type | Comment |
| --- | --- | --- |
| _BAUDRATE | int |  |
| _OUT_TIME | int |  |
| _REG_TIME | int |  |
| _END_TIME | int |  |
| _BYTE_TIME | int |  |
| _CHECKSUMME | int |  |

#### Results

| Name | Type | Comment |
| --- | --- | --- |
| OUT | binary |  |
| BAUDRATE | int |  |
| OUT_TIME | int |  |
| REG_TIME | int |  |
| END_TIME | int |  |
| BYTE_TIME | int |  |
| CHECKSUMME | int |  |

### set_ds2

#define SETPARAMETER     5

#### Arguments

| Name | Type | Comment |
| --- | --- | --- |
| _BAUDRATE | int |  |
| _OUT_TIME | int |  |
| _REG_TIME | int |  |
| _END_TIME | int |  |
| _BYTE_TIME | int |  |
| _CHECKSUMME | int |  |

#### Results

| Name | Type | Comment |
| --- | --- | --- |
| OUT | binary |  |
| BAUDRATE | int |  |
| OUT_TIME | int |  |
| REG_TIME | int |  |
| END_TIME | int |  |
| BYTE_TIME | int |  |
| CHECKSUMME | int |  |

### set_bmw_fast

#define SETPARAMETER     5

#### Arguments

| Name | Type | Comment |
| --- | --- | --- |
| _BAUDRATE | long |  |
| _OUT_TIME | long |  |
| _REG_TIME | long |  |
| _END_TIME | long |  |
| _NEG78_COUNT | long |  |
| _NEG78_TIME | long |  |
| _CHECKSUMME | long |  |

#### Results

| Name | Type | Comment |
| --- | --- | --- |
| OUT | binary |  |
| BAUDRATE | long |  |
| OUT_TIME | long |  |
| REG_TIME | long |  |
| END_TIME | long |  |
| NEG78_COUNT | long |  |
| NEG78_TIME | long |  |
| CHECKSUMME | long |  |

### set_kwp2000star

#define SETPARAMETER     5

#### Arguments

| Name | Type | Comment |
| --- | --- | --- |
| _BAUDRATE | long |  |
| _OUT_TIME | long |  |
| _REG_TIME | long |  |
| _END_TIME | long |  |
| _BYTE_TIME | int |  |
| _NEG78_COUNT | long |  |
| _NEG78_TIME | long |  |
| _TESTER_PRESENT_TIME | long |  |
| _TESTER_PRESENT_COUNT | long |  |
| _TESTER_PRESENT_TELEGRAM | string |  |
| _CHECKSUMME | long |  |

#### Results

| Name | Type | Comment |
| --- | --- | --- |
| OUT | binary |  |
| BAUDRATE | long |  |
| OUT_TIME | long |  |
| REG_TIME | long |  |
| END_TIME | long |  |
| BYTE_TIME | int |  |
| NEG78_COUNT | long |  |
| NEG78_TIME | long |  |
| TESTER_PRESENT_TIME | long |  |
| TESTER_PRESENT_COUNT | long |  |
| TESTER_PRESENT_TELEGRAM | binary |  |
| CHECKSUMME | long |  |

### set_kwp2000

#define SETPARAMETER     5

#### Arguments

| Name | Type | Comment |
| --- | --- | --- |
| _BAUDRATE | long |  |
| _OUT_TIME | long |  |
| _REG_TIME | long |  |
| _END_TIME | long |  |
| _BYTE_TIME | int |  |
| _NEG78_COUNT | long |  |
| _NEG78_TIME | long |  |
| _TESTER_PRESENT_TIME | long |  |
| _TESTER_PRESENT_COUNT | long |  |
| _TESTER_PRESENT_TELEGRAM | string |  |
| _START_COMM_COUNT | long |  |
| _START_COMM_TELEGRAM | string |  |
| _CHECKSUMME | long |  |

#### Results

| Name | Type | Comment |
| --- | --- | --- |
| OUT | binary |  |
| BAUDRATE | long |  |
| OUT_TIME | long |  |
| REG_TIME | long |  |
| END_TIME | long |  |
| BYTE_TIME | int |  |
| NEG78_COUNT | long |  |
| NEG78_TIME | long |  |
| TESTER_PRESENT_TIME | long |  |
| TESTER_PRESENT_COUNT | long |  |
| TESTER_PRESENT_TELEGRAM | binary |  |
| START_COMM_COUNT | long |  |
| START_COMM_TELEGRAM | binary |  |
| CHECKSUMME | long |  |

### set_kwp2000can

#define SETPARAMETER     5

#### Arguments

| Name | Type | Comment |
| --- | --- | --- |
| _BAUDRATE | long |  |
| _TOUT_REC_FC_AFTER_FF_CF | long |  |
| _TMIN_SND_FC_AFTER_FF_CF | long |  |
| _TMIN_SND_CF_AFTER_FC | long |  |
| _TOUT_REC_CF_AFTER_FC | long |  |
| _TOUT_REC_CF_AFTER_CF | long |  |
| _TOUT_REC_P2MAX | long |  |
| _TMIN_SND_P3MIN | long |  |
| _NEG78_TIME | long |  |
| _NEG78_COUNT | long |  |
| _TOUT_REC_FC_AFTER_FCWAIT | long |  |
| _TMIN_SND_FCWAIT | long |  |
| _FCWAIT_COUNT | long |  |
| _STMIN_INTERFACE | long |  |
| _STMIN_INTERFACE_ENABLE | long |  |
| _TESTER_PRESENT_TIME | long |  |
| _TESTER_PRESENT_COUNT | long |  |
| _TESTER_PRESENT_TELEGRAM | string |  |
| _TESTER_PRESENT_WAIT_FOR_RESPONSE | long |  |

#### Results

| Name | Type | Comment |
| --- | --- | --- |
| OUT | binary |  |
| BAUDRATE | long |  |
| TOUT_REC_FC_AFTER_FF_CF | long |  |
| TMIN_SND_FC_AFTER_FF_CF | long |  |
| TMIN_SND_CF_AFTER_FC | long |  |
| TOUT_REC_CF_AFTER_FC | long |  |
| TOUT_REC_CF_AFTER_CF | long |  |
| TOUT_REC_P2MAX | long |  |
| TMIN_SND_P3MIN | long |  |
| NEG78_TIME | long |  |
| NEG78_COUNT | long |  |
| TOUT_REC_FC_AFTER_FCWAIT | long |  |
| TMIN_SND_FCWAIT | long |  |
| FCWAIT_COUNT | long |  |
| STMIN_INTERFACE | long |  |
| STMIN_INTERFACE_ENABLE | long |  |
| TESTER_PRESENT_TIME | long |  |
| TESTER_PRESENT_COUNT | long |  |
| TESTER_PRESENT_TELEGRAM | binary |  |
| TESTER_PRESENT_WAIT_FOR_RESPONSE | long |  |

### sendtelegram

#define SENDRECEIVETELEGRAM 6

#### Arguments

| Name | Type | Comment |
| --- | --- | --- |
| IN | binary |  |

#### Results

| Name | Type | Comment |
| --- | --- | --- |
| OUT | binary |  |

### send

#define SENDTELEGRAM 23

#### Arguments

| Name | Type | Comment |
| --- | --- | --- |
| IN | binary |  |

_No results._

### receive

#define RECEIVETELEGRAM 24

_No arguments._

#### Results

| Name | Type | Comment |
| --- | --- | --- |
| OUT_LONG | long |  |
| OUT | binary |  |

### recv_keybytes

#define REQUEST_KEYBYTES 7

_No arguments._

#### Results

| Name | Type | Comment |
| --- | --- | --- |
| OUT | binary |  |

### ifsetport

#define SETPORT          8

#### Arguments

| Name | Type | Comment |
| --- | --- | --- |
| IN1 | long |  |
| IN2 | long |  |

_No results._

### ifgetport

#define GETPORT          9

#### Arguments

| Name | Type | Comment |
| --- | --- | --- |
| IN | long |  |

#### Results

| Name | Type | Comment |
| --- | --- | --- |
| OUT | long |  |

### ifloopt

#define LOOPTEST         10

_No arguments._

#### Results

| Name | Type | Comment |
| --- | --- | --- |
| OUT | long |  |

### send_frequent

#define SENDFREQ         12

#### Arguments

| Name | Type | Comment |
| --- | --- | --- |
| IN | binary |  |

_No results._

### recv_frequent

#define REQUFREQ         13

_No arguments._

#### Results

| Name | Type | Comment |
| --- | --- | --- |
| OUT | binary |  |

### stop_frequent

#define STOPFREQ         14

_No arguments._

_No results._

### set_program_voltage

#define SETUPROG         16

#### Arguments

| Name | Type | Comment |
| --- | --- | --- |
| IN | long |  |

_No results._

### ifsireset

#define SIRESET          17

#### Arguments

| Name | Type | Comment |
| --- | --- | --- |
| IN | long |  |

_No results._

### ifrequeststate

#define KLEMMENSTATUS    19

_No arguments._

#### Results

| Name | Type | Comment |
| --- | --- | --- |
| OUT | binary |  |

### set_answer_length

#define AWLEN            20

#### Arguments

| Name | Type | Comment |
| --- | --- | --- |
| IN0 | int |  |
| IN1 | int |  |

#### Results

| Name | Type | Comment |
| --- | --- | --- |
| OUT | binary |  |

### setconfigstring

#define SETCONFIGSTRING  21

#### Arguments

| Name | Type | Comment |
| --- | --- | --- |
| IN1 | string |  |
| IN2 | string |  |

#### Results

| Name | Type | Comment |
| --- | --- | --- |
| OUT | binary |  |

### getconfigstring

#define GETCONFIGSTRING  22

#### Arguments

| Name | Type | Comment |
| --- | --- | --- |
| IN1 | string |  |

#### Results

| Name | Type | Comment |
| --- | --- | --- |
| OUT | binary |  |

### ifrawmode

#### Arguments

| Name | Type | Comment |
| --- | --- | --- |
| IN | binary |  |

#### Results

| Name | Type | Comment |
| --- | --- | --- |
| OUT | binary |  |

### SG_SIMULATOR_PARAM_DS1

_No arguments._

_No results._

### SG_SIMULATOR_PARAM_DS2

_No arguments._

_No results._

### SG_SIMULATOR_PARAM_BMW_FAST

_No arguments._

_No results._

### SG_SIMULATOR_PARAM_KWP2000star

_No arguments._

_No results._

### SG_SIMULATOR_PARAM_KWP2000

_No arguments._

_No results._

### SG_SIMULATOR_DS1

Steuergeraete-Simulation

_No arguments._

#### Results

| Name | Type | Comment |
| --- | --- | --- |
| JOB_STATUS | string | OKAY, wenn fehlerfrei |

### SG_SIMULATOR_DS2

Steuergeraete-Simulation

_No arguments._

#### Results

| Name | Type | Comment |
| --- | --- | --- |
| JOB_STATUS | string | OKAY, wenn fehlerfrei |

### SG_SIMULATOR_BMW_FAST

Steuergeraete-Simulation

_No arguments._

#### Results

| Name | Type | Comment |
| --- | --- | --- |
| JOB_STATUS | string | OKAY, wenn fehlerfrei |

### SG_SIMULATOR_KWP2000star

Steuergeraete-Simulation

_No arguments._

#### Results

| Name | Type | Comment |
| --- | --- | --- |
| JOB_STATUS | string | OKAY, wenn fehlerfrei |

### SG_SIMULATOR_KWP2000

Steuergeraete-Simulation

_No arguments._

#### Results

| Name | Type | Comment |
| --- | --- | --- |
| JOB_STATUS | string | OKAY, wenn fehlerfrei |

### SG_MONITOR_DS1

Steuergeraete-Monitor

_No arguments._

#### Results

| Name | Type | Comment |
| --- | --- | --- |
| JOB_STATUS | string | OKAY, wenn fehlerfrei table JobResult STATUS_TEXT |
| _TEL_DATA | binary | Hex-Telegramm |

### SG_MONITOR_DS2

Steuergeraete-Monitor

_No arguments._

#### Results

| Name | Type | Comment |
| --- | --- | --- |
| JOB_STATUS | string | OKAY, wenn fehlerfrei table JobResult STATUS_TEXT |
| _TEL_DATA | binary | Hex-Telegramm |

### SG_MONITOR_BMW_FAST

Steuergeraete-Monitor

_No arguments._

#### Results

| Name | Type | Comment |
| --- | --- | --- |
| JOB_STATUS | string | OKAY, wenn fehlerfrei table JobResult STATUS_TEXT |
| _TEL_DATA | binary | Hex-Telegramm |

### SG_MONITOR_KWP2000star

Steuergeraete-Monitor

_No arguments._

#### Results

| Name | Type | Comment |
| --- | --- | --- |
| JOB_STATUS | string | OKAY, wenn fehlerfrei table JobResult STATUS_TEXT |
| _TEL_DATA | binary | Hex-Telegramm |

### SG_MONITOR_KWP2000

Steuergeraete-Monitor

_No arguments._

#### Results

| Name | Type | Comment |
| --- | --- | --- |
| JOB_STATUS | string | OKAY, wenn fehlerfrei table JobResult STATUS_TEXT |
| _TEL_DATA | binary | Hex-Telegramm |

### GetFirmwareVersion

_No arguments._

#### Results

| Name | Type | Comment |
| --- | --- | --- |
| FIRMWARE_BOOT | string |  |
| FIRMWARE_APPLICATION | string |  |
| OUT | binary |  |
| JOB_STATUS | string |  |

### GetAutomaticMode

_No arguments._

#### Results

| Name | Type | Comment |
| --- | --- | --- |
| AUTOMATICMODE | string |  |
| DEFAULTCOMMUNICATION | string |  |
| CONFIRMEDCOMMUNICATION | string |  |
| OUT | binary |  |
| JOB_STATUS | string |  |

### SetAutomaticMode

#### Arguments

| Name | Type | Comment |
| --- | --- | --- |
| AUTOMATICMODE | string | table AutomaticMode |
| DEFAULTCOMMUNICATION | string | table DefaultCommunication |

#### Results

| Name | Type | Comment |
| --- | --- | --- |
| IN | binary |  |
| OUT | binary |  |
| JOB_STATUS | string |  |

### SendCanMessage

#### Arguments

| Name | Type | Comment |
| --- | --- | --- |
| CANIDENTIFIER | unsigned int |  |
| DATALENGTH | unsigned char |  |
| D1 | unsigned char |  |
| D2 | unsigned char |  |
| D3 | unsigned char |  |
| D4 | unsigned char |  |
| D5 | unsigned char |  |
| D6 | unsigned char |  |
| D7 | unsigned char |  |
| D8 | unsigned char |  |

#### Results

| Name | Type | Comment |
| --- | --- | --- |
| IN | binary |  |
| OUT | binary |  |
| JOB_STATUS | string |  |

### SetCanAcceptanceFilter

#### Arguments

| Name | Type | Comment |
| --- | --- | --- |
| ACCEPTANCEFILTER_FROM | unsigned int |  |
| ACCEPTANCEFILTER_TO | unsigned int |  |

#### Results

| Name | Type | Comment |
| --- | --- | --- |
| IN | binary |  |
| OUT | binary |  |
| JOB_STATUS | string |  |

### GetCanMessage

_No arguments._

#### Results

| Name | Type | Comment |
| --- | --- | --- |
| CANIDENTIFIER | unsigned int |  |
| DATALEN | unsigned int |  |
| DATA | binary |  |
| OUT | binary |  |
| JOB_STATUS | string |  |

## Tables

### Index

- [AUTOMATICMODE](#table-automaticmode) (6 × 2)
- [DEFAULTCOMMUNICATION](#table-defaultcommunication) (4 × 2)

### AUTOMATICMODE

Dimensions: 6 rows × 2 columns

| TEXT | WERT |
| --- | --- |
| ja | 1 |
| yes | 1 |
| 1 | 1 |
| nein | 0 |
| no | 0 |
| 0 | 0 |

### DEFAULTCOMMUNICATION

Dimensions: 4 rows × 2 columns

| TEXT | WERT |
| --- | --- |
| D-CAN | 1 |
| 1 | 1 |
| K-Line | 0 |
| 0 | 0 |
