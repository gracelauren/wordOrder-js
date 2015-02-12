describe("wordOrder", function() {

  it("returns a word", function() {
    expect(wordOrder("world")).to.eql(["world"]);
  });

  it("removes the punctuation from the string for comparitive reasons", function() {
    expect(wordOrder("world.")).to.eql(["world"]);
  });

  it("returns a couple words", function() {
    expect(wordOrder("hello world")).to.eql(["hello", "world"]);
  });

  it("returns one instance of the word if the word is entered multiple times", function() {
    expect(wordOrder("world world")).to.eql(["world"]);
  });
});
