describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should validate', async () => {
    await expect(element(by.id('next'))).toBeVisible();
    await element(by.id('next')).tap();
    await expect(element(by.text('This field is required.'))).toBeVisible();
  });

  it('should next', async () => {
    await expect(element(by.id('next'))).toBeVisible();
    await element(by.id('address1')).typeText('abc');
    await element(by.id('address2')).typeText('abc');
    await element(by.id('code')).typeText('abc');
    await element(by.id('city')).typeText('abc');
    await element(by.id('state')).typeText('abc');
    await element(by.id('next')).tap();
    await expect(element(by.text('Select your Services'))).toBeVisible();
  });

});
