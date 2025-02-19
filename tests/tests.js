var testCases = [
{
    "salt": [207, 45, 55, 220, 196, 92, 83, 32],
    "password": "hello",
    "p": 1,
    "expected": "6907e763e5fd22fcce6f1fa74498b1580cfe8233746c39a0cafae86b9ee34214"
},
{
    "salt": "salt",
    "password": "password",
    "N": 2,
    "r": 1,
    "p": 1,
    "dkLen": 32,
    "expected": "6d1bb878eee9ce4a7b77d7a44103574d4cbfe3c15ae3940f0ffe75cd5e1e0afa"
},
{
    "salt": "salt",
    "password": "password",
    "N": 2,
    "r": 2,
    "p": 1,
    "dkLen": 32,
    "expected": "b6902e4c128feb4b3a475d59773bc4b25e44080cea51d7526b18986c52008386"
},
{
    "salt": "salt",
    "password": "password",
    "N": 2,
    "r": 1,
    "p": 1,
    "dkLen": 32,
    "expected": "6d1bb878eee9ce4a7b77d7a44103574d4cbfe3c15ae3940f0ffe75cd5e1e0afa"
},
{
    "salt": "salt",
    "password": "password",
    "N": 2,
    "r": 1,
    "p": 2,
    "dkLen": 32,
    "expected": "4db52954f6ece830ebef61b6613b9f1dfd921922d32a1af5b719d15a6676e8ad"
},
{
    "salt": "salt",
    "password": "password",
    "N": 2,
    "r": 2,
    "p": 1,
    "dkLen": 32,
    "expected": "b6902e4c128feb4b3a475d59773bc4b25e44080cea51d7526b18986c52008386"
},
{
    "salt": "salt",
    "password": "password",
    "N": 4,
    "r": 1,
    "p": 1,
    "dkLen": 32,
    "expected": "2ef4390d867dcad84fbb1c064e7fe984e1e9850922ac45c11b2f30c85043f9bd"
},
{
    "salt": "salt",
    "password": "password",
    "N": 2,
    "r": 1,
    "p": 1,
    "dkLen": 48,
    "expected": "6d1bb878eee9ce4a7b77d7a44103574d4cbfe3c15ae3940f0ffe75cd5e1e0afadb0a556b482b5dcb0d1a54b6e4070beb"
},
{
    "salt": "salt",
    "password": "password",
    "N": 4,
    "r": 2,
    "p": 2,
    "dkLen": 48,
    "expected": "89d93e71c0cae21fb524624e6e0229ecae4fb727fb8e5b5f705aaed078aa455fba9e2186b6d5c7dcd7c9561affefd597"
},
{
    "salt": "saltSALTsaltSALTsaltSALTsaltSALTsalt",
    "password": "passwordPASSWORDpassword",
    "N": 2,
    "r": 1,
    "p": 1,
    "dkLen": 32,
    "expected": "2e40cbd0f2e5b348d11b25ce977f572c20bbb133b188c5b182f939e92f5581c1"
},
{
    "salt": "saltSALTsaltSALTsaltSALTsaltSALTsalt",
    "password": "passwordPASSWORDpassword",
    "N": 2,
    "r": 1,
    "p": 2,
    "dkLen": 32,
    "expected": "b8f439cd39d8c2db78fbc6846bbe4c7af559039af2a44140f4648333bd706a9f"
},
{
    "salt": "saltSALTsaltSALTsaltSALTsaltSALTsalt",
    "password": "passwordPASSWORDpassword",
    "N": 2,
    "r": 2,
    "p": 1,
    "dkLen": 32,
    "expected": "60ecb015fc3e8ee29c05253d3827639cee3163ba9e724e84675be7923101aba6"
},
{
    "salt": "saltSALTsaltSALTsaltSALTsaltSALTsalt",
    "password": "passwordPASSWORDpassword",
    "N": 4,
    "r": 1,
    "p": 1,
    "dkLen": 32,
    "expected": "0ca4071216a28c62c86e9b6499de4df73db413cb8f6af8e7210dbedb908340d3"
},
{
    "salt": "saltSALTsaltSALTsaltSALTsaltSALTsalt",
    "password": "passwordPASSWORDpassword",
    "N": 2,
    "r": 1,
    "p": 1,
    "dkLen": 48,
    "expected": "2e40cbd0f2e5b348d11b25ce977f572c20bbb133b188c5b182f939e92f5581c16f89084a1ceea4d5b52050498bd94ba5"
},
{
    "salt": "saltSALTsaltSALTsaltSALTsaltSALTsalt",
    "password": "passwordPASSWORDpassword",
    "N": 4,
    "r": 2,
    "p": 2,
    "dkLen": 48,
    "expected": "e5f5bce126455eec251b65667e0feb532b07ffcf56164c1b7e81e6cdd88a647cf679d16a7fe8d640de40028df832fd19"
},
{
    "salt": "",
    "password": "",
    "N": 16,
    "r": 1,
    "p": 1,
    "dkLen": 64,
    "expected": "77d6576238657b203b19ca42c18a0497f16b4844e3074ae8dfdffa3fede21442fcd0069ded0948f8326a753a0fc81f17e8d3e0fb2e0d3628cf35e20c38d18906"
},
{
    "salt": "NaCl", // heh
    "password": "password",
    "N": 1024,
    "r": 8,
    "p": 16,
    "dkLen": 64,
    "expected": "fdbabe1c9d3472007856e7190d01e9fe7c6ad7cbc8237830e77376634b3731622eaf30d92e22a3886ff109279d9830dac727afb94a83ee6d8360cbdfa2cc0640"
},
{
    "salt": "SodiumChloride",
    "password": "pleaseletmein",
    "N": 16384,
    "r": 8,
    "p": 1,
    "dkLen": 64,
    "expected": "7023bdcb3afd7348461c06cd81fd38ebfda8fbba904f8e3ea9b543f6545da1f2d5432955613f0fcf62d49705242a9af9e61e85dc0d651e40dfcf017b45575887"
},
{
    "salt": "salt",
    "password": "Hellø",
    "N": 2,
    "r": 1,
    "p": 1,
    "dkLen": 64,
    "expected": "6837d88873b164bf5692e878fb0f20bd4a1cdc29f5f48a57e94a298984cbc661cb539e2a868498bee67a7a277d962d06ba1d45325eb1c756ff8f685bbacf585a"
},
{
    "salt": [115, 97, 108, 116],
    "password": "Hellø",
    "N": 2,
    "r": 1,
    "p": 1,
    "dkLen": 64,
    "expected": "6837d88873b164bf5692e878fb0f20bd4a1cdc29f5f48a57e94a298984cbc661cb539e2a868498bee67a7a277d962d06ba1d45325eb1c756ff8f685bbacf585a"
},
{
    "salt": [115, 97, 108, 116],
    "password": [72, 101, 108, 108, 195, 184],
    "N": 2,
    "r": 1,
    "p": 1,
    "dkLen": 64,
    "expected": "6837d88873b164bf5692e878fb0f20bd4a1cdc29f5f48a57e94a298984cbc661cb539e2a868498bee67a7a277d962d06ba1d45325eb1c756ff8f685bbacf585a"
},
{
    "salt": "salt",
    "password": [72, 101, 108, 108, 195, 184],
    "N": 2,
    "r": 1,
    "p": 1,
    "dkLen": 64,
    "expected": "6837d88873b164bf5692e878fb0f20bd4a1cdc29f5f48a57e94a298984cbc661cb539e2a868498bee67a7a277d962d06ba1d45325eb1c756ff8f685bbacf585a"
},
{
    "salt": "🧂",
    "password": "🤫",
    "N": 2,
    "r": 1,
    "p": 1,
    "dkLen": 64,
    "expected": "da79e302d74c384d7d3b3a45d739a54a078c9995a9a4910b05d60303b15eafe191704df3f613b08fdbea8fadd3ea9447b28e9faf068aa02f853daf59224bc79a"
}



];

exports.defineAutoTests = function() {
    describe('cordova-plugin-scrypt', function () {

        it("should be defined", function() {
            expect(window.plugins.scrypt).toBeDefined();
        });

        it('derives the right keys from test vectors', function (done) {
            var count = 0;
            var fail = jasmine.createSpy('fail');
            testCases.forEach(function (testCase) {
                window.plugins.scrypt(
                    function(res){
                        expect(res).toEqual(testCase.expected);
                        count++;
                        if (count === testCases.length) done();
                    },
                    function (err) {
                        fail(err);
                        count++;
                        expect(fail).not.toHaveBeenCalled();
                        if (count === testCases.length) done();
                    },
                    testCase.password,
                    testCase.salt,
                    testCase
                );
            });
        });
    });
};
