import { App, Stack} from 'aws-cdk-lib'
import { AttributeType, Table } from 'aws-cdk-lib/aws-dynamodb'
import {  Role, CompositePrincipal } from 'aws-cdk-lib/aws-iam'
import  { EasyServicePrincipal } from './easy-principal'

describe('it', () => {
  it('does stuff', () => {
    
    const composite = EasyServicePrincipal.composite(['cloudformation', 'lambda'])
    const app = new App()
    const stack = new Stack(app, 'stack')
    new Role(stack, 'role', { assumedBy: composite})
    new Table(stack, 'table', {
      partitionKey: { type: AttributeType.NUMBER, name: 'id'}
    })
  expect(composite).toBeInstanceOf(CompositePrincipal)
  // Template.fromStack(stack).hasResource('AWS::IAM::', props)
  })
})