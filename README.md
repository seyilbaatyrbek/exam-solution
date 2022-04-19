# Eucyon Foundation Normal Exam

## Getting Started

- **Fork** this repository under your own account
- Clone your forked repository to your computer
- Create a `.gitignore` file so generated files won't be committed
- Commit and push your progress frequently and with descriptive commit messages
- All your answers and solutions should go in this repository
- Take care of style guide
- Take care of the naming of classes, fields, variables, files, etc.

## Keep in mind

- You can use any resource online, but **please work individually**

- **Don't just copy-paste** your answers and solutions,
  use your own words instead

- At the end of the exam push your solution to **GitHub** 
  - You may push your solution to GitHub multiple times in the allocated
    time

## Exercises


### Multiply items in a matrix

Write a method called `MultiplyMatrix` that takes a matrix of integers
(any matrix is allowed, including not square and jagged matrices) as a parameter.

The function should:

- multiply each odd (1,3,5,7,9,...) number by 2 in each odd indexed row
- multiply each even (2,4,6,8,10,...) number by 2 in each even indexed row
- use the same indexing which we use in most programming language (starting with 0)
  and remember that 0 is also an even number.
  See the example for better understanding and ask questions if it is still unclear.

Write at least 2 different unit tests, one that tests normal operation and one that tests unexpected input.

#### Example 1

Input

```text
[
  [1, 3, 6, 2],
  [7, 5, 6, 1],
  [3, 3, 1, 5],
  [9, 0, 5, 3]
]
```

Output

```text
[
  [1,  3,  12, 4],
  [14, 10, 6,  2],
  [3,  3,  1,  5],
  [18, 0,  10, 6]
]
```

#### Example 2

Input

```text
[
  [2, 3],
  [5, 0, 4, 0],
  [6],
  [5, 2]
]
```

Output

```text
[
  [4,  3],
  [10, 0, 4, 0],
  [12],
  [10, 2]
]
```

### Delete the comments

Write a method called `DeleteComments` which can read and parse a `javascript` file. 
- It takes the path to the file as a string parameter
- The method returns the number of the single line comments
  - By single line comments we mean the lines that starts with `//`
- And removes the single line comments from the original file.
- It writes the comment-free code to the original file.
- If there is a problem with reading or writing the file the method should catch the error / exception and write to the console the following message: `An error occurred with accessing the files.`

#### Example

[Example file can be found here.](./delete.js)

Output

```text
4
```

### Candy shop

You are going to create a Candy shop where we sell hard candies and lollipops.

#### Candy

- It has a `Price` and an `AmountOfSugar`.
- 2 kinds of candy exist: `Lollipop` or `HardCandy`.
- There is no need for special constructors the default will do it

##### Lollipop

- The price is $2 and it is made from 60 grams of sugar.
- The default values should be set in the constructor of the class

##### HardCandy

- The price is $4 and it is made from 80 grams of sugar.
- The default values should be set in the constructor of the class

#### Candy shop

- It has `Sugar`, `Income`, and an `Inventory` (list of candies).

- It takes an `amountOfSugar` parameter in gram when creating an instance.
  - `Income` is zero and `Inventory` is an empty list by default

- It has a `CreateCandy()` method which takes any type of `Candy` as a parameter

  - the `Sugar` can't go below 0 » throw an `ArgumentOutOfRangeException` if it happens with a descriptive message
  - otherwise store the candy in the `Inventory` and
  - reduce the `Sugar` amount by the amount needed to create the candies

- It has a `RaisePrice()` method which takes an `Amount` as a parameter

  - raise the prices of all the candies in the `Inventory` with the `Amount`

- It has a `Sell()` method which takes an `amountOfCandiesToBeSold` as parameter

  - the income will be increased by the price of the candies that were sold,
  - sold candies will be deleted from the inventory
  - can't sell more candies than the amount of inventory has
  - if the `amountOfCandiesToBeSold` is greater than the inventory size then sell all the candies from the inventory

- It has a `BuySugar()` method which takes an `amount` as parameter

  - the `amount` parameter's unit is KiloGram
  - price of 1000 grams sugar is $2
  - the income can't go below 0 » throw an `ArgumentOutOfRangeException` if it happens with a descriptive message
  - otherwise it raises the Candy Shop's amount of sugar
    and reduces the income by the price
    - note that the sugar in the candy shop is stored in grams.

- It has a `ToString()` method which represents the Candy Shop

  - return a string in this format:
    
    - `Inventory: 0 hard candies, 1 lollipops; Income: $100; Sugar: 400 grams`

## Command line exercise

- Take a look at this directory structure:

```text
kindergarten
 └--groups
     |--.git
     |--first-group
     |   |--group_info.csv
     |   └--activites
     |       |--painting.md
     |       └--singing.md
     └--second-group
         |--gruop_info.csv
         └--pictures
             |--adam_long.png
             |--brenda_watson.png
             |--david_sanchez.jpg
             |--joyce_jones.gif
             └--sara_clark.jpeg
```

- Your task is to write commands in the correct order from the directory given below.
- Do it with the smallest number of commands possible without chaining them together.
- Assume that the following files are currently in the staging area:
  - `kindergarten/groups/first-group/activities/painting.md`
  - `kindergarten/groups/first-group/activities/singing.md`
  - `kindergarten/groups/second-group/gruop-info.csv`
- Your current directory is `kindergarten/`
  1. Empty the staging area
  1. Rename `groups/second-group/gruop_info.csv` to `groups/second-group/group_info.csv`
  1. Move all the pictures from `groups/second-group/pictures/` to `groups/first-group/pictures`
  1. Overwrite the `groups/first-group/activites/painting.md` file extension to `.doc`
  1. Overwrite the `groups/first-group/activites/singing.md` file extension to `.pdf`
  1. Update the `groups/first-group/group_info.csv` with the following lines
      - `Brenda Watson,4,15.8 kg,100.8 cm`
      - `David Sanchez,5,17.1 kg,106.2 cm`

     (The file should only contain the above 2 lines as a result.)
  1. Commit all the changes

- Solution:

```text
*type your answer here*
```
