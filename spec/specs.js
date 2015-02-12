describe("wordOrder", function() {

  it("returns a word", function() {
    expect(wordOrder("world")).to.eql(["world"]);
  });

  it("removes the punctuation from the string for comparitive reasons", function() {
    expect(wordOrder("world.")).to.eql(["world"]);
  });
});
