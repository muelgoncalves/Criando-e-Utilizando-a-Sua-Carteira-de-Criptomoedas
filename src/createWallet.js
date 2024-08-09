//importando as dependências
const bip32 = require('bip32');
const bip39 = require('bip39');
const bitcoin = require('bitcoinjs-lib');

const network = bitcoin.networks.testnet;

//derivação de carteiras HD
const path = `m/49'/1'/0'/0`;

//criando o mnemonic para a seed (palavras de senha)
let mnemonic = bip39.generateMnemonic();
const seed = bip39.mnemonicToSeedSync(mnemonic);

//criando a raiz da carteira HD
let root = bip32.fromSeed(seed, network);

//criando uma conta - par pvt-pub keys
let account = root.derivePath(path);
let node = account.derive(0).derive(0);

let bech32Address = bitcoin.payments.p2wpkh({

    pubkey: node.publicKey,

    network: network,

}).address


console.log("Carteira gerada");
console.log("Endereço: ", bech32Address);
console.log("Chave privada:", node.toWIF());
console.log("Seed: ", mnemonic);
