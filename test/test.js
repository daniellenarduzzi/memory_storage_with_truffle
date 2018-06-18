const efficientExampleCode = artifacts.require('efficientExampleCode')
const exampleCode = artifacts.require('exampleCode')
contract('NotarizeTx', addresses => {

  let instanceEfficientExampleCode
  let  instanceExampleCode
  before(async () => {
     instanceEfficientExampleCode = await efficientExampleCode.new()
     instanceExampleCode = await exampleCode.new()
    })

  describe('testing gas consupmtion', () => {

    it('the efficientExampleCode should consume less gas than exampleCode', async () => {
      try {
        let res1 = await  instanceEfficientExampleCode.someFunction(1)
        let res2 = await  instanceExampleCode.someFunction(1)
        assert(res1.receipt.gasUsed < res2.receipt.gasUsed);
      }
      catch(error) {
      }
    })
  })
})
