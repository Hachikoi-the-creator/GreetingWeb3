const { expect } = require("chai");
const { ethers } = require("hardhat");
const provider = waffle.provider;

describe("Greeter", function () {
  // TEST 1
  it("Should return the new greeting once it's changed", async function () {
    // create a local instance of the contract (OOP)
    const Greeter = await ethers.getContractFactory("Greeter");
    // initialize the contract whit a greeting
    const greeter = await Greeter.deploy("Hello, world!");
    await greeter.deployed();

    expect(await greeter.greet()).to.equal("Hello, world!");

    const setGreetingTx = await greeter.setGreeting("OHAYOU SEKAI GOOD MORNING WORLD!");

    // wait until the transaction is mined
    await setGreetingTx.wait();
    expect(await greeter.greet()).to.equal("OHAYOU SEKAI GOOD MORNING WORLD!");
  });

  // TEST 2
  it("Should return the new greeting once it's changed", async function () {
    const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy("Hello, world!");
    await greeter.deployed();

    await greeter.deposit({ value: 10 });
    expect(await provider.getBalance(greeter.address)).to.equal(10);
  });
});
