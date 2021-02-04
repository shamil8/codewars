# String subpattern recognition III

### Similar to the previous kata, but this time you need to operate with shuffled strings to identify if they are composed repeating a subpattern

Since there is no deterministic way to tell which pattern was really the original one among all the possible permutations of a fitting subpattern, return a subpattern with sorted characters, otherwise return the base string with sorted characters (you might consider this case as an edge case, with the subpattern being repeated only once and thus equalling the original input string).

For example:

```javascript
hasSubpattern("a") === "a"; //no repeated pattern, just one character
hasSubpattern("aaaa") === "a"; //just one character repeated
hasSubpattern("abcd") === "abcd"; //base pattern equals the string itself, no repetitions
hasSubpattern("babababababababa") === "ab"; //remember to return the base string sorted
hasSubpattern("bbabbaaabbaaaabb") === "ab"; //same as above, just shuffled
```

If you liked it, go for either the previous kata or the next kata of the series!