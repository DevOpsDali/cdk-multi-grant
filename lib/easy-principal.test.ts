import { App, Stack} from 'aws-cdk-lib'
import { Template } from 'aws-cdk-lib/assertions'
import { Role, CompositePrincipal, ServicePrincipal } from 'aws-cdk-lib/aws-iam'
import  { EasyServicePrincipal } from './easy-principal'
import { AwsService } from './services'

let app:App 
let stack: Stack

describe('Easy Service Principal', () => {
  beforeEach(() => {
    app = new App()
    stack = new Stack(app, 'Stack')
  })
  it('inits correctly', () => {
    const principal = new EasyServicePrincipal('lambda')
    expect(principal).toBeInstanceOf(ServicePrincipal)
  })
  it('creates composite', () => {
    const composite = EasyServicePrincipal.composite(['cloudformation', 'lambda'])
    new Role(stack, 'role', { assumedBy: composite})
    expect(composite).toBeInstanceOf(CompositePrincipal)
    Template.fromStack(stack).hasResourceProperties('AWS::IAM::Role', {
      AssumeRolePolicyDocument: {
        Statement: [
          generatePrincipalAssumeStatement('cloudformation'),
          generatePrincipalAssumeStatement('lambda') 
        ] 
      }
    })
  })
})

function generatePrincipalAssumeStatement(service: AwsService): object {
  return {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: `${service}.amazonaws.com`
            }
          }
}