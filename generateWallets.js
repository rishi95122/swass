const { ethers } = require('ethers');
const fs = require('fs');

// Number of wallets you want to create
const numberOfWallets = 10;

const wallets = [];

for (let i = 0; i < numberOfWallets; i++) {
    const wallet = ethers.Wallet.createRandom();
    wallets.push(
       wallet.privateKey,
  );
}

// Save wallets to a JSON file
fs.writeFileSync('wallets.json', JSON.stringify(wallets, null, 2));

console.log(`${numberOfWallets} wallets created and saved to wallets.json`);
