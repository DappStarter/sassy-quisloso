require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict argue system venture strike rival place horn hunt opinion slot gesture'; 
let testAccounts = [
"0x6318e7092dc99449840190cab833e525f51122988754b64d3c2b2cb56d5003d8",
"0x27fb9159511af39d572e1884fce23afa874e80277efdad0d2a3d689f8931d12c",
"0xb9d71cf1c8c77ab15a620176b343876bb498dd070d6ff4fa767f2a6349f0bb7c",
"0xf1a891a1267e59071da2ca2e2b4a7812f1c96a7cb2da96c98c4c4edbb57a9fc4",
"0xe17da53aa956747996f398a8332e6c4543db564d3f3125410109ba998c4fa254",
"0xa82ebdb2adc793e699816c37d1f0eefe65baf0abda7b01cb1c54193026d7643a",
"0xe4594d1c258d2d131be8dcba4e86d086378b11998472fb68e26a85201aa7b079",
"0x66d1fa2a4b94ca99c858040755a23f4dd7e958f7f9dbb148c5571f1664e0d421",
"0xb651c03988aa69c20b2fdccbf4675dcdcf7de7672d6c1027b1e6e39380bc1dbe",
"0xa93f7dfeb1d5fdad18bb4b3d052fdce4519c32a54be8a26393d7b8a8390d0553"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
