describe('getWeatherFor', () => {
    describe('when passed "Sydney"', () => {
      it('should resolve 25', () => {
        return expectAsync(getWeatherFor('Sydney')).toBeResolvedTo(25);
      });
    });
    describe('when passed "Melbourne"', () => {
        it('should resolve 15 ', () => {
           return expectAsync(getWeatherFor('Melbourne')).toBeResolvedTo(15); 
        });
    });



  });