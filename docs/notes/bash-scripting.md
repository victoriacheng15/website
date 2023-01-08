---
sidebar_position: 1
title: Intro to Bash Scripting
---

Welcome to my personal notes from "Introduction to Bash Scripting" by Bobby Iliev! As I worked through this book, I took detailed notes to better understand and remember the concepts being presented. I've compiled these notes here for you to browse and reference as needed. Whether you're new to bash scripting or just looking to brush up on your skills, I hope these notes will be a useful resource for you. Happy learning!

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

## Conditionals

`If`, `If-else`, and `switch case` statements in bash.

### If statement

```bash
if [[ some_test ]]
then
  # do something
fi
```

Let's see an example of ask you to enter your name in case that you left it empty:

```bash
#!/bin/bash

read -p "What is your name? " name

if [[ -z ${name} ]]
then
  echo "Please enter your name!"
fi
```

### If Else statement

With `if-else` statement, you can set 2nd expression if the condition is false.

```bash
#!/bin/bash

read -p "What is your name? " name

if [[ -z ${name} ]] # if name is empty or not
then
  echo "Please enter your name!"
else
  echo "Hi there, ${name}"
fi
```

Let's say if you want to check if the user is admin or not.

```bash
#!/bin/bash

admin="admin"

read -p "Please enter your username. " username

if [[ ${username} == ${admin }]]; then
# remember to add semicolon if want to put then like above line
  echo "You are the admin user!"
else
  echo " You are not the admin!"
fi

```

### elif statement

You can also write if-elif-else statement.

```bash
#!/bin/bash

read -p "Enter a number: " num

if [[ ${num} -gt 0 ]]; then
  echo "The number is positive"
elif [[ ${num} -lt = ]]; then
  echo "The number is negative"
else
  echo "The number is 0"
fi
```

This will check if the number:

- greater than 0, if yes, positive, if not, move onto next
- less than 0, if yes, negative, if not, move onto next
- the number is 0

### Switch case statement

If-elif-else can get complicated with more conditions. You can use switch case to simplify complex conditionals

```bash
#!/bin/bash

case $some_variable in
  pattern_1)
    command
  ;;
  pattern_2 | pattern_3)
    command
  ;;
  *)
    default command
  ;;
esac
```

e.g.

```bash
#!/bin/bash

read -p "Enter the name of your car brand: " car

case $car in
  Tesla)
    echo -n "${car}'s car factory is in the USA."
  ;;
  BMW | Mercedes | Audi | Porsche)
    echo -n "${car}'s car factory is in Germany."
  ;;
  Toyota | Mazda | Mitsubishi | Subaru)
    echo -n "${car}'s car factory is in Japan."
  ;;
  *)
    echo -n "${car} is an unknown car brand"
  ;;
esac
```

- if car is Tesla, you get "Tesla's car factory in the USA"
- if car is one of the Europe cars, the factory is in the Germany
- Same goes for one of the Japanese cars
- Lastly, if no match, you get "an unknown car brand"

## Loop

In Bash, there are `for loops`, `while loops`, and `until loops`.

### For loops

```bash
#!/bin/bash

for var in ${list}
do
  # something here
done
```

e.g.

```bash
#!/bin/bash

users="user1 user2 user3"

for user in ${users}
do
  echo "${user}"
done
```

Rundown:

- set individual variable as user from the users array
- loop through each user in the list
- print the user out

You can loop numbers like below:

```bash
#!/bin/bash

for num in {1..10}
do
  echo ${num}
done
```

### While loops

This similar to for loop, but set a condition after `while`

```bash
#!/bin/bash

while [[ the_condition ]]
do
  # do something
done
```

e.g.

```bash
#!/bin/bash

counter=1
while [[ counter -le 10 ]]
do
  echo $counter
  ((counter++))
  # remember to add (( )) above, otherwise, infinite loop
done
```

Let's create a script that will keep ask you to enter username and not allow an empty input:

```bash
#!/bin/bash

read -p "What is your name? " name

while [[ -z ${name} ]]
do
  echo "Your name can not be blank, please enter a valid name!"
  read -p "Enter your name again " name
done

echo "Hi there, ${name}"
```

### Until Loops

The difference between `until`, and `while` loops is that the `until`loop will run the commands within the loop until the condition become true.

```bash
#!/bin/bash

count=1
until [[ $count -gt 10 ]]
do
  echo $count
  ((count++))
done
```

### Continue and Break

Can use `continue` and `break` with loops

- continue: it tells script to stop the current iteration of the loop and start the next iteration
- break: it tells the script to end the loop right away

```bash
#!/bni/bash

for i in {1..5}
do
  if [[ $i -eq 2 ]]; then
    echo "Skipping number 2"
  continue
  fi
  echo "i is equal ${i}"
done
```

```bash
#!/bin/bash

num=1
while [[ $num -lt 10 ]]
do
  if [[ $num -eq 5 ]]; then
    echo "stopped at 5"
    break
  fi
  ((num++))
done
echo "Loop completed"
```

### Break 2

e.g.

```bash
#!/bin/bash

for (( a = 1; a < 5; a++ ))
do
  echo "__________outer loop: $a"
  for (( b = 1; b < 20; b++ ))
    do
    if [ $b -gt 5 ]; then
      break 2
    fi
    echo "inner loop: $b"
    done
done
```

This will break and stop the inner loop after the condition met. However, if you use `break` instead, the outer loop will keep run until 4.

## Functions

Functions are a great way to reuse code. The structure is similar to most languages.

```bash
function function_name() {
  # do something here
}

# or without function keyword
function_name() {
  # do something here
}
```

e.g.

```bash
#!/bin/bash

function hello() {
  echo "hello world from function"
}

hello # call the function name without parenthesis
```

### Pass Argument

This similar to Argument section with `$1` and so on.

```bash
#!/bin/bash

function hello() {
  echo "hello $1"
}

hello Victoria # call the function name without parenthesis
```

### Function Description

```bash
#!/bin/bash

#######################################
# Description: Hello function
# Globals:
# None
# Arguments:
# Single input argument
# Outputs:
# Value of input argument
# Returns:
# 0 if successful, non-zero on error.
#######################################

function hello() {
  echo "Hello $1!"
}
```

## Debugging, testing, and shortcuts

To debug, you can do the below:

```
bash -x ./script.sh
```

And then you will see:

```
+ hello Victoria
+ echo 'hello Victoria'
hello Victoria
```

There are two ways to debug/check bash scripts.

- [https://www.shellcheck.net/](https://www.shellcheck.net/)
- [Run the tool directly from the terminal](https://github.com/koalaman/shellcheck)

### Shortcut

Delete everything from the cursor to the end of the line:

```
ctrl + k
```

Delete everything from the cursor to the start of the line:

```
ctrl + u
```

Delete one word backward from cursor:

```
ctrl + w
```

Search your history backward:

```
ctrl + r
```

Clear the screen instead of `clear`

```
ctrl + l
```

Stop the output to the screen:

```
ctrl + s
```

Enable the output that previously stopped by `ctrl + s`

```
ctrl + q
```

Terminate the current command:

```
ctrl + c
```

Throw the current command to background:

```
ctrl + z
```

## Create custom bash commands

Some commands are lengthy to type

e.g.

```bash
netstate - plant | grep "80\|443" | grep -v LISTEN | wc -l
```

We can create an alias.

```bash
alias "variable"="command"
```

For the command above and:

Keep in mind, this is temporary and will be gone after terminal closes.

```bash
alias conn="netstate - plant | grep "80\|443" | grep -v LISTEN | wc -l"
```

### To make the change persistent

To make the alias persistent:

```bash
nano ~/.bashrc
```

Go to the bottom and add `alias conn="netstate - plant | grep "80\|443" | grep -v LISTEN | wc -l"`, and then save and exit.
