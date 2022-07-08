"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const aws_cdk_lib_1 = require("aws-cdk-lib");
const aws_dynamodb_1 = require("aws-cdk-lib/aws-dynamodb");
const aws_iam_1 = require("aws-cdk-lib/aws-iam");
const easy_principal_1 = require("./easy-principal");
describe('it', () => {
    it('does stuff', () => {
        const composite = easy_principal_1.EasyServicePrincipal.composite(['cloudformation', 'lambda']);
        const app = new aws_cdk_lib_1.App();
        const stack = new aws_cdk_lib_1.Stack(app, 'stack');
        new aws_iam_1.Role(stack, 'role', { assumedBy: composite });
        new aws_dynamodb_1.Table(stack, 'table', {
            partitionKey: { type: aws_dynamodb_1.AttributeType.NUMBER, name: 'id' }
        });
        expect(composite).toBeInstanceOf(aws_iam_1.CompositePrincipal);
        // Template.fromStack(stack).hasResource('AWS::IAM::', props)
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWFzeS1wcmluY2lwYWwudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVhc3ktcHJpbmNpcGFsLnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2Q0FBdUM7QUFDdkMsMkRBQStEO0FBQy9ELGlEQUErRDtBQUMvRCxxREFBd0Q7QUFFeEQsUUFBUSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDbEIsRUFBRSxDQUFDLFlBQVksRUFBRSxHQUFHLEVBQUU7UUFFcEIsTUFBTSxTQUFTLEdBQUcscUNBQW9CLENBQUMsU0FBUyxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQTtRQUM5RSxNQUFNLEdBQUcsR0FBRyxJQUFJLGlCQUFHLEVBQUUsQ0FBQTtRQUNyQixNQUFNLEtBQUssR0FBRyxJQUFJLG1CQUFLLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFBO1FBQ3JDLElBQUksY0FBSSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFDLENBQUMsQ0FBQTtRQUNoRCxJQUFJLG9CQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRTtZQUN4QixZQUFZLEVBQUUsRUFBRSxJQUFJLEVBQUUsNEJBQWEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBQztTQUN4RCxDQUFDLENBQUE7UUFDSixNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsY0FBYyxDQUFDLDRCQUFrQixDQUFDLENBQUE7UUFDcEQsNkRBQTZEO0lBQzdELENBQUMsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHAsIFN0YWNrfSBmcm9tICdhd3MtY2RrLWxpYidcbmltcG9ydCB7IEF0dHJpYnV0ZVR5cGUsIFRhYmxlIH0gZnJvbSAnYXdzLWNkay1saWIvYXdzLWR5bmFtb2RiJ1xuaW1wb3J0IHsgIFJvbGUsIENvbXBvc2l0ZVByaW5jaXBhbCB9IGZyb20gJ2F3cy1jZGstbGliL2F3cy1pYW0nXG5pbXBvcnQgIHsgRWFzeVNlcnZpY2VQcmluY2lwYWwgfSBmcm9tICcuL2Vhc3ktcHJpbmNpcGFsJ1xuXG5kZXNjcmliZSgnaXQnLCAoKSA9PiB7XG4gIGl0KCdkb2VzIHN0dWZmJywgKCkgPT4ge1xuICAgIFxuICAgIGNvbnN0IGNvbXBvc2l0ZSA9IEVhc3lTZXJ2aWNlUHJpbmNpcGFsLmNvbXBvc2l0ZShbJ2Nsb3VkZm9ybWF0aW9uJywgJ2xhbWJkYSddKVxuICAgIGNvbnN0IGFwcCA9IG5ldyBBcHAoKVxuICAgIGNvbnN0IHN0YWNrID0gbmV3IFN0YWNrKGFwcCwgJ3N0YWNrJylcbiAgICBuZXcgUm9sZShzdGFjaywgJ3JvbGUnLCB7IGFzc3VtZWRCeTogY29tcG9zaXRlfSlcbiAgICBuZXcgVGFibGUoc3RhY2ssICd0YWJsZScsIHtcbiAgICAgIHBhcnRpdGlvbktleTogeyB0eXBlOiBBdHRyaWJ1dGVUeXBlLk5VTUJFUiwgbmFtZTogJ2lkJ31cbiAgICB9KVxuICBleHBlY3QoY29tcG9zaXRlKS50b0JlSW5zdGFuY2VPZihDb21wb3NpdGVQcmluY2lwYWwpXG4gIC8vIFRlbXBsYXRlLmZyb21TdGFjayhzdGFjaykuaGFzUmVzb3VyY2UoJ0FXUzo6SUFNOjonLCBwcm9wcylcbiAgfSlcbn0pIl19