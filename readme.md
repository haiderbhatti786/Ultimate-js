### This is the documention on js

```
dataTypes-Primitive
1>null -  ye empty value ko represent krta hai | standalone value
2>undefined- jab variable declare ho magar intialize na kya gaya ho yani value na di gai hoo
3>symbol=> unique
```

```
DataTypes-refernce
1> object
```

```
conversion
(1) "33" =>  33
(2)  "33abc" => NaN
(3)
(4)
```

## `Postfix`

```
usage ke badd increment/decrement hogi
```

## `Prefix`

```
usage se pehek increment/decrement  hogi
```

# Comparison Details

This file contains various comparison operations and their results:

1. `console.log(2 > 2); // false`

   - Compares if 2 is greater than 2. The result is `false` because 2 is not greater than itself.

2. `console.log("2" > 1); // true`

   - Compares if the string "2" is greater than the number 1. JavaScript converts the string "2" to the number 2, and 2 is greater than 1, so the result is `true`.

3. `console.log(null > 0); // false`

   - Compares if `null` is greater than 0. The result is `false` because `null` is not greater than 0.

4. `console.log(null == 0); // false`

   - Compares if `null` is equal to 0. The result is `false` because `null` is not equal to 0.

5. `console.log(null >= 0); // true`
   - Compares if `null` is greater than or equal to 0. The result is `true` because `null` is considered equal to 0 in this comparison.

## Triple Equal (`===`)

The triple equal operator (`===`) is used to compare both the value and the type of two variables. It returns `true` only if both the value and the type are the same.

Examples:

1. `console.log(2 === 2); // true`

   - Both the value and the type (number) are the same.

2. `console.log(2 === "2"); // false`

   - The value is the same, but the type is different (number vs. string).

3. `console.log(null === null); // true`

   - Both the value and the type (object) are the same.

4. `console.log(undefined === undefined); // true`

   - Both the value and the type (undefined) are the same.

5. `console.log(true === 1); // false`
   - The value is different (true vs. 1) and the type is different (boolean vs. number).
