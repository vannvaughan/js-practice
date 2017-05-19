describe("Sample Task", function() {
   it("exists", function() {
      expect(speakTheTruth).toEqual(jasmine.any(Function));
   })
   it("returns the truth", function(){
      expect(speakTheTruth()).toBe("Brian is amazing")
   })
})

describe("Speak Falsehood", function() {
   it("exists", function() {
      expect(speakFalsehood).toEqual(jasmine.any(Function));
   })
   it("returns the truth", function(){
      expect(speakFalsehood()).toBe("Shea is the best")
   })
})