require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner drop tail solution mansion creek stick mad hover arctic suit tomato'; 
let testAccounts = [
"0x95f594287b45f390ad9f59fe4e616eaab2ad862f5e429e73f921265abf01d6d1",
"0x6fa3c2aa31faddb84c7456d1340bb6ff7601e8712f5d064d6301167ae2ccc47c",
"0x11110e13198ba97832a29639b84d7cd38aba31b4d231509390c5bbeb59baa803",
"0x41c5a6423bc1d33b021a03929cdb1707b544be59ccf44070edbce3d102a3b777",
"0xf325bacea9288e3c3f94c5f943fc5efdbafa6cbcc49e56b5148742f3b0ed99dc",
"0x7948fb57cf3bfd8be47285df2cb951a4e1ce3adf9bf8fd8cd6e9434b598a3247",
"0xad984ad05d949aa93860021addfe1cde2de61a20e7bfc6ee030f36c561d6a291",
"0x0e96f5e48059deee3b34718e897f661d1295599d991f4ebb383b2c667029417b",
"0x425eea2bc1d1a93a9a3632f10c92cd83c3b5832f2c79f7700e23e508826d3f24",
"0x77eb0d10b0f3e0f5f6b22511a7579dc7f26d0ef23fc9b0958105b4ca626a5052"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 3000000,
            gasPrice: 470000000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


