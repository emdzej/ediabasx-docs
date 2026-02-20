# EDIABAS VM Opcode Handlers - Detailed Analysis with Pseudocode

Reverse-engineered opcode handlers from `ebas32.dll` decompilation.

## VM State Variables

### CPU Flags
| Address | Name | Description |
|---------|------|-------------|
| `DAT_100d1740` | Zero Flag (ZF) | Set when result is zero |
| `_DAT_100d1742` | Carry Flag (CF) | Set on unsigned overflow/borrow |
| `DAT_100d1744` | Sign Flag (SF) | Set when result is negative |
| `DAT_100d1746` | Overflow Flag (OF) | Set on signed overflow |

### Operand Pointers
| Address | Name | Description |
|---------|------|-------------|
| `DAT_100d1760` | `operand0_ptr` | Destination operand pointer |
| `DAT_100d1764` | `operand0_len_ptr` | Pointer to operand0 length |
| `DAT_100d1774` | `operand1_ptr` | Source operand pointer |
| `DAT_100d1790` | `operation_size` | Size of operation in bytes |

### Stack & Execution
| Address | Name | Description |
|---------|------|-------------|
| `DAT_100d1794` | `stack_pointer` | Return address stack pointer |
| `DAT_100d17a0` | `return_stack[]` | Return address stack (2048 bytes) |
| `DAT_100d1748` | `nesting_level` | Subroutine nesting depth |

---

## Arithmetic Operations

### COMP - Compare (`FUN_10023fc9`)

Compare two operands by subtraction without storing result.

**Pseudocode:**
```c
void COMP() {
    src_sign = get_sign(operand1, size);
    dst_sign = get_sign(operand0, size);
    
    CF = 0;
    for (i = 0; i < size; i++) {
        diff = operand0[i] - operand1[i] - CF;
        CF = (diff < 0) ? 1 : 0;
        result[i] = diff & 0xFF;
    }
    
    result_sign = get_sign(result, size);
    ZF = is_zero(result, size);
    
    // Overflow: positive - negative = negative, or negative - positive = positive
    if (dst_sign > 0 && src_sign == 0 && result_sign == 0) OF = 1;
    if (dst_sign == 0 && src_sign > 0 && result_sign > 0) OF = 1;
}
```

**Flags affected:** ZF, CF, SF, OF

---

### SUB - Subtract (`FUN_100240f6`)

Subtract source from destination: `dest = dest - src`

**Pseudocode:**
```c
void SUB() {
    src_sign = get_sign(operand1, size);
    dst_sign = get_sign(operand0, size);
    
    CF = 0;
    for (i = 0; i < size; i++) {
        diff = operand0[i] - operand1[i] - CF;
        CF = (diff < 0) ? 1 : 0;
        operand0[i] = diff & 0xFF;  // Store result
    }
    
    update_flags(operand0, size);
    
    // Overflow detection
    if (dst_sign > 0 && src_sign == 0 && SF == 0) OF = 1;
    if (dst_sign == 0 && src_sign > 0 && SF > 0) OF = 1;
}
```

**Flags affected:** ZF, CF, SF, OF

---

### SUBC - Subtract with Carry (`FUN_10024229`)

Subtract with borrow from previous operation.

**Pseudocode:**
```c
void SUBC() {
    src_sign = get_sign(operand1, size);
    dst_sign = get_sign(operand0, size);
    
    // CF is NOT cleared - uses previous carry
    for (i = 0; i < size; i++) {
        diff = operand0[i] - operand1[i] - CF;
        CF = (diff < 0) ? 1 : 0;
        operand0[i] = diff & 0xFF;
    }
    
    update_flags(operand0, size);
    // Overflow detection same as SUB
}
```

**Flags affected:** ZF, CF, SF, OF

---

### ADD - Add (`FUN_10024353`)

Add source to destination: `dest = dest + src`

**Pseudocode:**
```c
void ADD() {
    src_sign = get_sign(operand1, size);
    dst_sign = get_sign(operand0, size);
    
    for (i = 0; i < size; i++) {
        sum = operand0[i] + operand1[i] + CF;
        CF = (sum > 0xFF) ? 1 : 0;
        operand0[i] = sum & 0xFF;
    }
    
    result_sign = get_sign(operand0, size);
    update_flags(operand0, size);
    
    // Overflow: positive + positive = negative, or negative + negative = positive
    if (dst_sign == 0 && src_sign == 0 && result_sign > 0) OF = 1;
    if (dst_sign > 0 && src_sign > 0 && result_sign == 0) OF = 1;
}
```

**Flags affected:** ZF, CF, SF, OF

---

### ADDC - Add with Carry (`FUN_10024481`)

Add with carry from previous operation.

**Pseudocode:**
```c
void ADDC() {
    src_sign = get_sign(operand1, size);
    dst_sign = get_sign(operand0, size);
    
    CF = 0;  // Clear carry first
    for (i = 0; i < size; i++) {
        sum = operand0[i] + operand1[i] + CF;
        CF = (sum > 0xFF) ? 1 : 0;
        operand0[i] = sum & 0xFF;
    }
    
    // Overflow detection same as ADD
}
```

**Flags affected:** ZF, CF, SF, OF

---

## Control Flow

### JMP - Unconditional Jump (`FUN_10024a17`)

Jump to target address.

**Pseudocode:**
```c
void JMP() {
    set_pc(*operand0);
}
```

**Flags affected:** None

---

### JTSR - Jump to Subroutine (`FUN_10024a30`)

Call subroutine, pushing return address.

**Pseudocode:**
```c
void JTSR() {
    return_addr = get_current_pc();
    
    if (stack_pointer + 4 > 0x800) {
        error(STACK_OVERFLOW);
    }
    
    // Push return address
    memcpy(&return_stack[stack_pointer], &return_addr, 4);
    stack_pointer += 4;
    
    // Jump to subroutine
    set_pc(*operand0);
    nesting_level++;
}
```

**Stack effect:** Pushes 4-byte return address
**Flags affected:** None

---

### RET - Return from Subroutine (`FUN_10024aac`)

Return to caller.

**Pseudocode:**
```c
void RET() {
    stack_pointer -= 4;
    
    if (stack_pointer < 0) {
        error(STACK_UNDERFLOW);
    }
    
    // Pop return address
    memcpy(&return_addr, &return_stack[stack_pointer], 4);
    
    base = get_current_pc();
    set_pc(return_addr - base);  // Relative jump
    
    nesting_level--;
}
```

**Stack effect:** Pops 4-byte return address
**Flags affected:** None

---

## Conditional Jumps

### JC - Jump if Carry (`FUN_10024b1e`)

**Pseudocode:**
```c
void JC() {
    if (CF != 0) {
        set_pc(*operand0);
    }
}
```

---

### JNC - Jump if No Carry (`FUN_10024b43`)

**Pseudocode:**
```c
void JNC() {
    if (CF == 0) {
        set_pc(*operand0);
    }
}
```

---

### JZ - Jump if Zero (`FUN_10024b68`)

**Pseudocode:**
```c
void JZ() {
    if (ZF != 0) {
        set_pc(*operand0);
    }
}
```

---

### JNZ - Jump if Not Zero (`FUN_10024b8d`)

**Pseudocode:**
```c
void JNZ() {
    if (ZF == 0) {
        set_pc(*operand0);
    }
}
```

---

### JO - Jump if Overflow (`FUN_10024bb2`)

**Pseudocode:**
```c
void JO() {
    if (OF != 0) {
        set_pc(*operand0);
    }
}
```

---

### JNO - Jump if No Overflow (`FUN_10024bd7`)

**Pseudocode:**
```c
void JNO() {
    if (OF == 0) {
        set_pc(*operand0);
    }
}
```

---

## String Operations

### SCMP - String Compare (`FUN_100250d2`)

Compare two strings byte-by-byte.

**Pseudocode:**
```c
void SCMP() {
    ZF = 0;
    CF = (*operand0_len < size) ? 1 : 0;
    
    if (*operand0_len == size) {
        for (i = 0; i < size; i++) {
            if (operand0[i] < operand1[i]) {
                CF = 1;
            }
            if (operand0[i] != operand1[i]) {
                ZF = 0;
                return;  // Strings differ
            }
        }
        ZF = 1;  // Strings equal
    }
}
```

**Flags affected:** ZF, CF

---

### SCAT - String Concatenate (`FUN_1002517c`)

Append source string to destination.

**Pseudocode:**
```c
void SCAT() {
    overflow = (max_len < *operand0_len + size);
    
    if (overflow) {
        size = max_len - *operand0_len;  // Truncate
    }
    
    CF = overflow ? 1 : 0;
    
    // Append at end of dest
    memcpy(&operand0[*operand0_len], operand1, size);
    *operand0_len += size;
    
    update_flags(operand0, size);
}
```

**Flags affected:** ZF, CF

---

### SCPY - String Copy (`FUN_1002520d`)

Copy source string to destination with null termination.

**Pseudocode:**
```c
void SCPY() {
    overflow = (max_len < *operand0_len + size);
    
    if (overflow) {
        // Null-terminate at max length
        operand1[max_len - *operand0_len - 1] = '\0';
    }
    
    CF = overflow ? 1 : 0;
    
    strcat(operand0, operand1);  // Append with null term
    *operand0_len = strlen(operand0) + 1;
    
    update_flags(operand0, size);
}
```

**Flags affected:** ZF, CF

---

### SCUT - String Cut/Truncate (`FUN_10025299`)

Truncate string by removing characters.

**Pseudocode:**
```c
void SCUT() {
    *operand0_len -= cut_count;
    
    if (*operand0_len < 0) {
        *operand0_len = 0;
    }
    
    ZF = (*operand0_len == 0) ? 1 : 0;
    
    // Null terminate
    if (*operand0_len > 0) {
        operand0[*operand0_len - 1] = '\0';
    }
}
```

**Flags affected:** ZF

---

## Data Movement

### MOVE - Move Data (`FUN_10023f01`)

Copy data from source to destination.

**Pseudocode:**
```c
void MOVE() {
    memcpy(operand0, operand1, size);
    update_flags(operand0, size);
}
```

**Flags affected:** ZF, SF

---

### CLEAR - Clear Memory (`FUN_10023f76`)

Zero out memory region.

**Pseudocode:**
```c
void CLEAR() {
    memset(operand0, 0, size);
    *operand0_len = 0;
    ZF = 1;  // Result is always zero
}
```

**Flags affected:** ZF = 1

---

## Logical Operations

### AND - Bitwise AND (`FUN_1002489d`)

Perform AND, compare only (no store).

**Pseudocode:**
```c
void AND() {
    for (i = 0; i < size; i++) {
        result[i] = operand0[i] & operand1[i];
    }
    update_flags(result, size);
    // Result NOT stored to operand0
}
```

**Flags affected:** ZF, SF

---

### ANDS - Bitwise AND (Store) (`FUN_1002483d`)

Perform AND and store result.

**Pseudocode:**
```c
void ANDS() {
    for (i = 0; i < size; i++) {
        operand0[i] = operand0[i] & operand1[i];
    }
    update_flags(operand0, size);
}
```

**Flags affected:** ZF, SF

---

### OR - Bitwise OR (`FUN_100248fe`)

**Pseudocode:**
```c
void OR() {
    for (i = 0; i < size; i++) {
        operand0[i] = operand0[i] | operand1[i];
    }
    update_flags(operand0, size);
}
```

**Flags affected:** ZF, SF

---

### XOR - Bitwise XOR (`FUN_1002495e`)

**Pseudocode:**
```c
void XOR() {
    for (i = 0; i < size; i++) {
        operand0[i] = operand0[i] ^ operand1[i];
    }
    update_flags(operand0, size);
}
```

**Flags affected:** ZF, SF

---

### NOT - Bitwise NOT (`FUN_100249be`)

**Pseudocode:**
```c
void NOT() {
    for (i = 0; i < size; i++) {
        operand0[i] = ~operand0[i];
    }
    update_flags(operand0, size);
}
```

**Flags affected:** ZF, SF

---

## Shift Operations

### ASR - Arithmetic Shift Right (`FUN_10024da2`)

Shift right preserving sign bit.

**Pseudocode:**
```c
void ASR() {
    sign_bit = operand0[size-1] & 0x80;
    
    CF = operand0[0] & 1;  // Bit shifted out
    
    for (i = 0; i < size - 1; i++) {
        operand0[i] = (operand0[i] >> 1) | ((operand0[i+1] & 1) << 7);
    }
    operand0[size-1] = (operand0[size-1] >> 1) | sign_bit;  // Preserve sign
    
    update_flags(operand0, size);
}
```

**Flags affected:** ZF, CF, SF

---

### LSR - Logical Shift Right (`FUN_10024e78`)

Shift right with zero fill.

**Pseudocode:**
```c
void LSR() {
    CF = operand0[0] & 1;  // Bit shifted out
    
    for (i = 0; i < size - 1; i++) {
        operand0[i] = (operand0[i] >> 1) | ((operand0[i+1] & 1) << 7);
    }
    operand0[size-1] = operand0[size-1] >> 1;  // Zero fill MSB
    
    update_flags(operand0, size);
}
```

**Flags affected:** ZF, CF, SF

---

### ASL/LSL - Shift Left (`FUN_10024f38`)

Shift left (arithmetic and logical are same for left shift).

**Pseudocode:**
```c
void ASL() {
    CF = (operand0[size-1] & 0x80) ? 1 : 0;  // Bit shifted out
    
    for (i = size - 1; i > 0; i--) {
        operand0[i] = (operand0[i] << 1) | ((operand0[i-1] & 0x80) >> 7);
    }
    operand0[0] = operand0[0] << 1;  // Zero fill LSB
    
    update_flags(operand0, size);
}
```

**Flags affected:** ZF, CF, SF

---

## Helper Functions

### update_flags (FUN_10028d4d)

Update ZF and SF based on operand value.

**Pseudocode:**
```c
void update_flags(byte* data, int size) {
    ZF = 1;
    for (i = 0; i < size; i++) {
        if (data[i] != 0) {
            ZF = 0;
            break;
        }
    }
    
    SF = (data[size-1] & 0x80) ? 1 : 0;  // Sign bit of MSB
}
```

---

### get_sign

Get sign of multi-byte value.

**Pseudocode:**
```c
int get_sign(byte* data, int size) {
    return (data[size-1] & 0x80) ? 1 : 0;
}
```

---

### set_pc (FUN_10023ca5)

Set program counter (relative jump).

**Pseudocode:**
```c
void set_pc(int offset) {
    program_counter += offset;
}
```

---

### get_current_pc (FUN_10023b1c)

Get current program counter value.

**Pseudocode:**
```c
int get_current_pc() {
    return program_counter;
}
```

---

## Summary Table

| Category | Opcodes | Description |
|----------|---------|-------------|
| Arithmetic | COMP, SUB, SUBC, ADD, ADDC | Multi-byte arithmetic with flags |
| Control Flow | JMP, JTSR, RET | Unconditional branching |
| Conditionals | JC, JNC, JZ, JNZ, JO, JNO | Flag-based jumps |
| String | SCMP, SCAT, SCPY, SCUT | String manipulation |
| Data | MOVE, CLEAR | Memory operations |
| Logical | AND, ANDS, OR, XOR, NOT | Bitwise operations |
| Shift | ASR, LSR, ASL | Bit shifting |

---

*Generated from ebas32.dll decompilation analysis.*
