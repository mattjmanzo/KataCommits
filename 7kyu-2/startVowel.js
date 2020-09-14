// Start with a Vowel

// Create a function that takes any sentence and redistributes the spaces (and adds additional spaces if needed) so that each word starts with a vowel. The letters should all be in the same order but every vowel in the sentence should be the start of a new word. The first word in the new sentence may start without a vowel. It should return a string in all lowercase with no punctuation (only alphanumeric characters).

// Solution 1

function vowelStart(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z\d]/gi, "")
    .replace(/(.)(?=[aeiou])/g, "$& ");
}
