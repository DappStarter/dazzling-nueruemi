require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'good armed ozone sugar notice crime remember solid grace neck flock swallow'; 
let testAccounts = [
"0xd229424fe09dec3d7d1997a42f64556a4ee35c0faf1c4bca42aa6fee6097eef5",
"0x862a027532d2d1b691d9af03ab151f53f6d802d2cf837ce411854e1831ba1504",
"0x82fe69a058c073d079230f5159c16af7e2eaa50121bb87c196d28b546f6db3db",
"0x0ad7ce2aa6c9763b91a7e6c5af735aba180957f017cb6dbe4581830be92950e9",
"0xc303d69b82466d81cd6c2fba3c89f05a82a6165ffb8816d43723f3a68f25630b",
"0x8383a3f2ab8edfebf06324074a1a609fd33aa621e7222b2afaf30b9d715bbcf7",
"0xd43a81555769bb449207344c29c8f9d7b0017e26abf4ba2f266cd1a9724a03f4",
"0xafc63ffeed8b9f9dfab6a5b1a8d2c87403c06fb297bfbc07d8869efb3d9e81b9",
"0xd9a4168ba1ed7933ddb64e91995b5eca5207f9e83c1e369f36dca58f21392d1b",
"0x83c15ed56e526b95b9c19f5fc3ce9a52c67dbf694d6ad4cb381f461b55128370"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

