import { CompositePrincipal, ServicePrincipalOpts } from 'aws-cdk-lib/aws-iam';
import { AwsService } from './services';
import { ServicePrincipal } from 'aws-cdk-lib/aws-iam';
declare const principalBase = ".amazonaws.com";
declare const servicePrincipalMap: Record<"account" | "acm" | "apigateway" | "cloudformation" | "cloudfront" | "cloudtrail" | "cloudwatch-crossaccount" | "cloudwatch" | "codebuild" | "codepipeline" | "dynamodb" | "ec2" | "ecr" | "ecs-tasks" | "ecs" | "ecs.application-autoscaling" | "edgelambda" | "events" | "glue" | "guardduty" | "hooks.cloudformation" | "iam" | "kinesis" | "kms" | "lambda" | "logger.cloudfront" | "logs" | "organizations" | "rds" | "redshift" | "route53" | "s3" | "sagemaker" | "secretsmanager" | "sqs" | "sns" | "ssm" | "sts" | "waf" | "xray", string>;
declare class EasyServicePrincipal extends ServicePrincipal {
    static composite(services: AwsService[], opts?: ServicePrincipalOpts): CompositePrincipal;
    static fromServiceName(service: AwsService, opts?: ServicePrincipalOpts): EasyServicePrincipal;
}
export { EasyServicePrincipal, principalBase, servicePrincipalMap, };
