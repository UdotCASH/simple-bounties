pragma solidity ^0.7.1;



abstract contract ERC20 {
  function balanceOf(address who) public virtual view returns (uint256);
  function transfer(address to, uint256 value) public virtual returns (bool);
  function transferFrom(address from, address to, uint256 value) public virtual returns (bool);
}

contract simpleBounties{

    mapping(address => uint32) public users;
    address payable[] public userList;

    address ucash = 0x92e52a1A235d9A103D970901066CE910AAceFD37;

    event bountyPosted(string name, string description, uint bI);
    event bountyPaid(uint bI);
    event bountyIncreased(uint bI, uint increase);

    struct sBounty{
        uint amount;
        uint posterIndex;
        uint hunterIndex;
        bool complete;
        string name;
        string description;
    }

    mapping(uint => sBounty) public sbounties;

    uint public numBounties = 0;

    function postBounty(string memory name, string memory description, uint amount, address payable hunter) public {
        ERC20(ucash).transferFrom(msg.sender,address(this),amount);

        if (users[msg.sender]==0){
            users[msg.sender] = uint32(userList.length);
            userList.push(msg.sender);
        }

        if(users[hunter]==0){
            users[hunter] = uint32(userList.length);
            userList.push(hunter);
        }

        sbounties[numBounties].amount = amount;
        sbounties[numBounties].posterIndex = users[msg.sender];
        sbounties[numBounties].hunterIndex = users[hunter];

        sbounties[numBounties].name = name;
        sbounties[numBounties].description = description;


        emit bountyPosted(name, description, numBounties++);
    }

    //bI = bountyIndex
    function payBounty(uint bI) public {
        require(users[msg.sender]==sbounties[bI].posterIndex);
        require(sbounties[bI].complete == false);
        ERC20(ucash).transfer(userList[sbounties[bI].hunterIndex],sbounties[bI].amount);
        sbounties[bI].complete = true;
        emit bountyPaid(bI);
    }

    function increaseBounty(uint bI,uint amount) public {
        ERC20(ucash).transferFrom(msg.sender,address(this),amount);
        require(sbounties[bI].complete == false);

        sbounties[bI].amount += amount;
        emit bountyIncreased(bI,amount);
    }
}
