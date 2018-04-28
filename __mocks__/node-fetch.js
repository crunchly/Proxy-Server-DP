const dummyData = require('./dummyData.js');

const dummyResponse = {
  json: () => dummyData,
};

const fetch = url => (
  new Promise((resolve, reject) => {
    if (
      url === 'http://ec2-13-57-175-222.us-west-1.compute.amazonaws.com/funding-rounds/Facebook' ||
      url === 'http://ec2-52-34-86-177.us-west-2.compute.amazonaws.com/people/Facebook' ||
      url === 'http://ec2-13-59-188-143.us-east-2.compute.amazonaws.com/api/funding_round'
    ) {
      resolve(dummyResponse);
    } else {
      reject(new Error());
    }
  })
);

module.exports = fetch;
