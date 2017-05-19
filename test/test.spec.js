describe("speakTheTruth", function() {
   it("exists", function() {
      expect(speakTheTruth).toEqual(jasmine.any(Function));
   })
   it("returns the truth", function(){
      expect(speakTheTruth()).toBe("Brian is amazing")
   })
})

describe("speakFalsehood", function() {
   it("exists", function() {
      expect(speakFalsehood).toEqual(jasmine.any(Function));
   })
   it("returns a falsehood", function(){
      expect(speakFalsehood()).toBe("Shea is the best")
   })
})

describe("isEven", function() {
   it("exists", function() {
      expect(isEven).toEqual(jasmine.any(Function));
   })
   it("returns true for even numbers", function(){
      expect(isEven(44)).toBe(true)
      expect(isEven(2)).toBe(true)
   })
   it("returns false for odd numbers", function(){
      expect(isEven(3)).toBe(false)
      expect(isEven(1)).toBe(false)
   })
})

describe("returnSmallest", function() {
   it("exists", function() {
      expect(returnSmallest).toEqual(jasmine.any(Function));
   })
   it("returns the smallest value", function(){
      expect(returnSmallest([1, 2, 3, 4])).toBe(1)
      expect(returnSmallest([601, 599, 588, 3])).toBe(3)
   })
})

describe("addUser", function() {
   var names = ['brian', 'shea']
   it("exists", function() {
      expect(addUser).toEqual(jasmine.any(Function));
   })
   it("returns an array", function(){
      expect(addUser(names)).toEqual(jasmine.any(Array))
   })
   it("returns a new array", function(){
      expect(addUser(names, 'steven')).not.toBe(names)
   })
   it("returns all usernames", function() {
      expect(addUser(names, 'steven').length).toEqual(names.length + 1)
      expect(addUser(names, 'steven')).toEqual(['brian', 'shea', 'steven'])
   })
})

describe("reverseName", function() {
   it("exists", function() {
      expect(reverseName).toEqual(jasmine.any(Function));
   })
   it("returns a reversed string", function(){
      expect(reverseName("brian")).toEqual("nairb")
      expect(reverseName("shea")).toEqual("aehs")
   })
})

describe("countVowels", function() {
   it("exists", function() {
      expect(countVowels).toEqual(jasmine.any(Function));
   })
   it("returns the number of vowels in a string", function(){
      expect(countVowels("brian")).toBe(2)
      expect(countVowels("shea")).toBe(2)
      expect(countVowels("creighton")).toBe(3)
   })
})

describe('alertMessage', function () {
   beforeEach(function () {
      spyOn(window, 'alert')
   })
   it('should exist', function () {
      expect(alertMessage).toBeDefined();
   })
   it('should alert a message', function () {
      alertMessage();
      expect(alert).toHaveBeenCalled();
   })
})

describe('promptUsername', function () {
   beforeEach(function () {
      spyOn(window, 'prompt').and.returnValue('Rockstar')
   })
   it('should exist', function () {
      expect(promptUsername).toBeDefined();
   })
   it('should prompt the user for a username', function () {
      promptUsername()
      expect(prompt).toHaveBeenCalled();
   })
   it('should return username', function () {
      expect(promptUsername()).toEqual('Rockstar')
   })
})

describe('callbackPractice', function () {
   it('should exist and be a function', function () {
      expect(callbackPractice).toBeDefined();
      expect(callbackPractice).toEqual(jasmine.any(Function));
   })
   it('should call a callback function', function () {
      var callback = jasmine.createSpy(function (str) {
         return str
      })
      var test = callbackPractice(1, callback);
      expect(callback).toHaveBeenCalledWith(1);
   })
})




