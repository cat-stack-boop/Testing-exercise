describe('canBuyBeer', () => { 
    describe('When the person is over 18', () => { 
      it('should return true',() =>{

      
        const result = canBuyBeer(20);

        expect(result).toBe(true);
      });
    });
    describe('When the person is under 18', () => { 
        it('should return false',() => {
            const result = canBuyBeer(17);
            
                expect(result).toBe(false);
            
        });
    });
})


describe('canGregBuyBeer', () => {
  describe('when greg is 18', () => {
    it('should return "Greg is 18, he can buy beer!"', () => {
      const originalAge = greg.age;
      greg.age = 18
      
      const result = canGregBuyBeer();

      expect(result).toBe('Greg is 18, he can buy beer!');
      greg.age = originalAge;
    })
  });
  describe('when greg is under 18', () => {
    it('should return "Greg is under 18, he can not buy beer!"', () => {
      const originalAge = greg.age;
      greg.age = 16
      
      const result = canGregBuyBeer();

      expect(result).toBe(`Greg is ${greg.age}, he can't buy beer :(`);
      greg.age = originalAge;
    })
  });

});