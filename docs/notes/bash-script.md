---
sidebar_position: 1
title: Intro to Bash Scripting
---

This is a free Introduction to Bash Scripting by Bobby Iliev.

- [Github Repo](https://github.com/bobbyiliev/introduction-to-bash-scripting#readme)
- [Get the ebook](https://ebook.bobby.sh/)

## Intro

What is bash? It is a Unix shell and command language and stands for `Bourne-Agin SHell`. Bash scripts are good for automating retentivities workloads and can help you save time. The file extension is `.sh`.

The first line start with `#!/bin/bash`, this is called a [Shebang](<https://en.wikipedia.org/wiki/Shebang_(Unix)>).

Let's create the "Hello World!"

```bash
#!/bin/bash

echo "Hello World!"
```

To make the script executable:

```bash
chmod +x script.sh
```

Then run:

```bash
#  2 ways to execute bash script
./script.sh

# or bash script_name.sh

bash script.sh
```

You will see "Hello World!" message on the screen.

## Variables

It is like any programming language, can create variable and assign values (string or number).

:::info

Important! Make sure no space before and after the `=` sign.

:::

```bash
#!/bin/bash

name="Victoria"

# print the variable like below
echo $name # Victoria
# or
echo ${name} # Victoria
```

You can do either ways, but curly brackets are recommended according to this book.

```bash
#!/bin/bash

name="Victoria"
greeting="Hello"

echo "${greeting}, ${name}" # Hello Victoria
```

## Arguments

You can take arguments instead:

```bash
#!/bin/bash

echo "Argument one is $1" # Argument one is dog
echo "Argument two is $2" # Argument two is cat
echo "Argument three is $3" # Argument three is bird
```

- `${1}` is for the first input in the Command Line.
- There can be more than one by using `${2}`, `${3}` and so on
- Or `$@` to read all inputs

```bash
#!/bin/bash

echo "All arguments: $@" # All arguments: dog cat bird
```

If you use `$0`, this will return the script name.

```bash
#!/bin/bash

echo $0 # ./script.sh (depend on you named the file)
```

## Arrays

Initialize an array with `()`

```bash
#!/bin/bash

array=("value 1" "value 2" "value 3" "value 4")
```

### Access

It is similar to most programming languages by using `[number]`.

```bash
#!/bin/bash

echo ${array[1]} # first element
```

```bash
#!/bin/bash

echo ${array[-1]} # last element
```

Or can use `@` to get all values in the array, similar to argument.

```bash
#!/bin/bash

echo ${array[@]} # all values
```

Get Array length:

```bash
#!/bin/bash

echo ${#array[@]} # 4
```

### Slice

Remember with `@`, it will log all values in the array.

```bash
#!/bin/bash

letters=( "A""B""C""D""E" )

echo ${letters[@]} # ABCDE
```

This will print value from index 0 to 2, and the last element doesn't include.

```bash
#!/bin/bash

letters=( "A""B""C""D""E" )
b=${letters:0:2}

echo ${b} # AB
```

You can omit `0` and it will print values from index 0 to index 3. As usual, the last element is excluded.

```bash
#!/bin/bash

letters=( "A""B""C""D""E" )
b=${letters::3}

echo ${b} # ABC
```

If you write `:3` with one semicolon, this will print element from index 3 to the end

```bash
#!/bin/bash

letters=( "A""B""C""D""E" )
b=${letters:3}

echo ${b} # DE
```

## Conditional Expressions

In bash, conditional expressions are used by the `[[ ]]` compound command and then built-in commands to test file attributes and perform string and arithmetic comparison.

The list below are the popular bash conditional expressions.

### File Expressions

True if file exists:

```bash
[[ -a ${file} ]]
```

True if file exists and is a block special file:

```bash
[[ -b ${file} ]]
```

True if file exists and character special file:

```bash
[[ -c ${file} ]]
```

True if file exists and is a directory:

```bash
[[ -d ${file} ]]
```

True if file exists:

```bash
[[ -e ${file} ]]
```

True if file exists and is a regular file:

```bash
[[ -f ${file} ]]
```

True if file exists and is a symbolic link:

```bash
[[ -h ${file} ]]
```

True if file exists: and is readable

```bash
[[ -r ${file} ]]
```

True if file exists and has a size greater than zero:

```bash
[[ -s ${file} ]]
```

True if file exists and is writable:

```bash
[[ -w ${file} ]]
```

True if file exists and is executable:

```bash
[[ -x ${file} ]]
```

True if file exists and is a symbolic link:

```bash
[[ -L ${file} ]]
```

### String Expressions

True if the shell variable varname is set (has been assigned a value):

```bash
[[ -v ${varname} ]]
```

True if the length of string is zero:

```bash
[[ -z ${varname} ]]
```

True if the length of string is non-zero:

```bash
[[ -n ${varname} ]]
```

True if the strings are equal:

```bash
[[ ${string1} == ${string2} ]]
```

True if the string1 sorts before string2 lexicographically:

```bash
[[ ${string1} < ${string2} ]]
```

### Arithmetic Operators

True if the numbers are equal:

```bash
[[ ${arg1} -eq ${arg2} ]]
```

True if the numbers are not equal:

```bash
[[ ${arg1} -ne ${arg2} ]]
```

True if arg1 is **less than** arg2:

```bash
[[ ${arg1} -lt ${arg2} ]]
```

True if arg1 is **less than** or **equal** arg2

```bash
[[ ${arg1} -le ${arg2} ]]
```

True if arg1 is **greater than** arg2:

```bash
[[ ${arg1} -gt ${arg2} ]]
```

True if arg1 is greater than or equal arg2

```bash
[[ ${arg1} -ge ${arg2} ]]
```

## && and || Conditions

```bash
[[ test_case ]] && [[ test_case2 ]] # and
[[ test_case ]] || [[ test_case2 ]] # or
```

### Exit Status Operators

True if the command was successful without any errors:

```bash
[[ $? -eq 0 ]]
```

True if the command was not successful or had errors:

```bash
[[ $? -gt 0 ]]
```
