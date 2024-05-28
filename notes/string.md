prefer use 'string' over 'String'
'string' is used in almost all TypeScript projects and libraries.
it is the primitive data type and is simpler to work with.
even though it's primitive, we can still call methods like 'toUpperCase()' or 'split()'. That's because JavaScript automatically does a process called autoboxing.

autoboxing will convert the 'string' into 'String' for calling methods only, after that, the 'String' will be returned to 'string'
