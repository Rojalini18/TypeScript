import Country from "../Pages/Country";

describe("Country",()=>
{
    test('should return data of capital weather', async() => {
      const api = await fetch('http://api.weatherstack.com/current?access_key=8ff1a824a5edf0f0c3a174b1bf2f757c&query=kathmandu');
      const ans = await api.json();
      expect(ans.current);
    })
})