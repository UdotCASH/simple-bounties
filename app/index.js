const sbABI = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "bI",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "increase",
				"type": "uint256"
			}
		],
		"name": "bountyIncreased",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "bI",
				"type": "uint256"
			}
		],
		"name": "bountyPaid",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "bI",
				"type": "uint256"
			}
		],
		"name": "bountyPosted",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "bI",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "increaseBounty",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "bI",
				"type": "uint256"
			}
		],
		"name": "payBounty",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "address payable",
				"name": "hunter",
				"type": "address"
			}
		],
		"name": "postBounty",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "numBounties",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "sbounties",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "posterIndex",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "hunterIndex",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "complete",
				"type": "bool"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "userList",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "users",
		"outputs": [
			{
				"internalType": "uint32",
				"name": "",
				"type": "uint32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
const sbAddress = '0xBC29BcC46932848022081F1d98DaFD4f91aF32Ff';
let sb

const tokenABI = [
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "_spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "_from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "remaining",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "allowed",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "_spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "balance",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "balances",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "bountyHunter",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "bounty",
				"type": "uint256"
			}
		],
		"name": "payBounty",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "_from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
let token
let tokenAddress = "0x0f54093364b396461AAdf85C015Db597AAb56203"
let tokenDecimals
let tokenSymbol

let signer

let provider

var IncreaseInputs = new Array();

async function initialize(){

	await ethereum.enable()
	provider = new ethers.providers.Web3Provider(web3.currentProvider)
	let accounts = await provider.listAccounts()
	signer = provider.getSigner(accounts[0])

	sb = new ethers.Contract(sbAddress,sbABI,signer)
	token = new ethers.Contract(tokenAddress,tokenABI,signer)

  tokenDecimals = await token.decimals()
  tokenSymbol = await token.symbol()
	await getBalances()

	await populateHunterTable()
	await populateManagerTable()
	// await populateBookings()
}

async function getBalances() {
	await getTokenBalance()
	await getApprovedTokenBalance()
}

async function populateHunterTable(){
  let numBounties = await sb.numBounties()
	for(let n = 0;n<numBounties;n++){
		let b = await sb.sbounties(n) //b = bounty
		let hunter = await sb.userList(b.hunterIndex)

		if(hunter==signer._address){
			let row=document.createElement("tr");
			let cell1 = document.createElement("td");
			let cell2 = document.createElement("td");
			let cell3 = document.createElement("td");
			let cell4 = document.createElement("td");
			let cell5 = document.createElement("td");


			let poster = await sb.userList(b.posterIndex)
			let name = b.name
			let description = b.description
			let amount = ethers.utils.formatUnits(b.amount,tokenDecimals)
			let status
			if(b.complete==true){
				status = "paid"
			} else {
				status = "not paid"
			}

			poster = document.createTextNode(poster)
			name = document.createTextNode(name)
			description = document.createTextNode(description)
			amount = document.createTextNode(amount)
			status = document.createTextNode(status)

					 cell1.appendChild(poster);
					 cell2.appendChild(name);
					 cell3.appendChild(description);
					 cell4.appendChild(amount);
					 cell5.appendChild(status);


					 row.appendChild(cell1);
					 row.appendChild(cell2);
					 row.appendChild(cell3);
					 row.appendChild(cell4);
					 row.appendChild(cell5);



			 HunterTable.appendChild(row);
		}
	}
}

async function populateManagerTable(){
	let numBounties = await sb.numBounties()
	for(let m = 0;m<numBounties;m++){
		console.log(m)
		let b = await sb.sbounties(m) //b = bounty
		console.log("ass")
		let poster = await sb.userList(b.posterIndex)
		console.log(poster)
		if(poster==signer._address){
			let row=document.createElement("tr");
			let cell1 = document.createElement("td");
			let cell2 = document.createElement("td");
			let cell3 = document.createElement("td");
			let cell4 = document.createElement("td");
			let cell5 = document.createElement("td");
			let cell6 = document.createElement("td");
			let cell7 = document.createElement("td");

			let cell8 = document.createElement("td");


			let hunter = await sb.userList(b.hunterIndex)
			let name = b.name
			let description = b.description
			let amount = ethers.utils.formatUnits(b.amount,tokenDecimals)
			let status
			if(b.complete==true){
				status = "paid"
			} else {
				status = "not paid"
			}

			var IncreaseInput = document.createElement('input');
	    IncreaseInput.setAttribute('type', 'text');
	    IncreaseInputs.push(IncreaseInput);

			var IncreaseButton = document.createElement('input');
			IncreaseButton.setAttribute('type', 'button');
			IncreaseButton.setAttribute('value', 'Increase');
			let onclickIncrease = 'increase(' + m + ')';
			IncreaseButton.setAttribute('onclick', onclickIncrease);

			var PayButton = document.createElement('input');
			PayButton.setAttribute('type', 'button');
			PayButton.setAttribute('value', 'Pay');
			let onclickPay = 'pay(' + m + ')';
			PayButton.setAttribute('onclick', onclickPay);

			hunter = document.createTextNode(hunter)
			name = document.createTextNode(name)
			description = document.createTextNode(description)
			amount = document.createTextNode(amount)
			status = document.createTextNode(status)

					 cell1.appendChild(hunter);
					 cell2.appendChild(name);
					 cell3.appendChild(description);
					 cell4.appendChild(amount);
					 cell5.appendChild(IncreaseInput);
					 cell6.appendChild(IncreaseButton);
					 cell7.appendChild(PayButton);
					 cell8.appendChild(status);


					 row.appendChild(cell1);
					 row.appendChild(cell2);
					 row.appendChild(cell3);
					 row.appendChild(cell4);
					 row.appendChild(cell5);
					 row.appendChild(cell6);
					 row.appendChild(cell7);
					 row.appendChild(cell8);

			 ManagerTable.appendChild(row);
		}
	}
}

async function increase(bI){
	let increaseAmount = IncreaseInputs[bI].value
	increaseAmount = ethers.utils.parseUnits(increaseAmount,tokenDecimals)
	await sb.increaseBounty(bI,increaseAmount)
}

async function pay(bI){
	await sb.payBounty(bI)
}


//blocks to read events from

// let fromBlock = 3100000
// let toBlock = 6122719
//
// async function gatherEventLogs(){
// 	console.log("gather Logs")
// 	event_logs = new Object()
//
// 	let Topic = ethers.utils.id("booked(string,address,uint256)")
// 	console.log(Topic)
// 	let Filter = createFilter(Topic)
//
// 	let Logs = await provider.getLogs(Filter)
// 	console.log(Logs)
// 	let Info = await getBookingInfo(Logs)
//
// 	event_logs = Info
// }
//
// function createFilter(topic){
//   let filter = {
// 		address: tutorAddress,
// 		fromBlock: fromBlock,
// 		toBlock: toBlock,
// 		topics: [ topic ]
// 	}
//   return(filter)
// }
//
// function ArrayifyLogData(logs) {
// 	let events = new Array()
// 	for (n=0;n<logs.length;n++){
// 		let log = new Object()
// 		let data = logs[n].data
// 		data = data.substring(2)
// 		data = data.match(/.{1,64}/g) //divide data from event log into 64 length sections
// 		for (j=0;j<data.length;j++){
// 			data[j] = "0x" + data[j]
// 		}
// 		events.push(data)
// 	}
// 	return(events)
// }
//
// function HexToAddress(hex){
// 	return("0x" + hex.substring(26))
// }
//
// function HexToInt(hex,decimals){
// 	return(ethers.utils.formatUnits(ethers.utils.bigNumberify(hex),decimals))
// }
//
// function HexToString(hex) {
// 	return(web3.toAscii(hex))
// }

// async function getTimeStamp(blockNumber){
//   let provider = ethers.getDefaultProvider("homestead")
//   let block = await provider.getBlock(blockNumber)
//   return block.timestamp
// }
//
// async function getBookingInfo(bookingLogs){
//   let bookingHexArray = ArrayifyLogData(bookingLogs)
//   let bookingInfo = new Array()
//
//   for (n=0;n<bookingLogs.length;n++){
//   		let log = bookingHexArray[n]
// 			console.log(log)
//   		let eventInfo = new Object()
//
//   		eventInfo.name = HexToString(log[4])
// 			eventInfo.address = HexToAddress(log[1])
//   		eventInfo.hours  = HexToInt(log[2],0)
//       eventInfo.eventInfo = bookingLogs[n]
//   		bookingInfo.push(eventInfo)
//   	}
//     return(bookingInfo)
// }

// function getStringsFromData(log){
// 	let s = 0;
// 	let strings = new Array()
// 	strings.push("")
//
// 	for(let n = 5;n<log.length;n++){
// 		let str = HexToString(log[n])
// 		let test = ethers.utils.hexStripZeros(log[n])
// 		if(test.length<=4){
// 			strings.push("")
// 			s++;
// 		} else{
// 			strings[s] += HexToString(log[n])
// 		}
// 	}
// 	return strings
// }



async function getTokenBalance(){

  let balance = await token.balanceOf(signer._address)
	balance = ethers.utils.formatUnits(balance,tokenDecimals)
	balance = ethers.utils.commify(balance)
	balance += " " + tokenSymbol
  document.getElementById("UCASHBalanceLabel").innerHTML = balance
}

async function getApprovedTokenBalance(){
	let balance = await token.allowance(signer._address,sbAddress)
	balance = ethers.utils.formatUnits(balance,tokenDecimals)
	balance = ethers.utils.commify(balance)
	balance += " " + tokenSymbol
  document.getElementById("UCASHApprovedLabel").innerHTML = "Approved: " + balance
}

async function approve(){
  let amount = document.getElementById("approveAmount").value
	amount = ethers.utils.parseUnits(amount,8)

	token.approve(sbAddress,amount)
}

async function Post(){
    let name = document.getElementById("nameInput").value
    let description = document.getElementById("descriptionInput").value
    let amount = document.getElementById("amountInput").value
    amount = ethers.utils.parseUnits(amount,tokenDecimals)
    let hunter = document.getElementById("bountyHunterInput").value
		console.log(name,description,amount,hunter)
    await sb.postBounty(name,description,amount,hunter)
}

async function payBounty(bI){

}

async function increaseBounty(bI, amount){


}
