import { CompositePrincipal, ServicePrincipalOpts } from 'aws-cdk-lib/aws-iam'
import { AwsService, awsServices } from './services'
import { ServicePrincipal } from 'aws-cdk-lib/aws-iam'



const principalBase = '.amazonaws.com'
type AwsServicePrincipal = `${AwsService}${typeof principalBase}`

const servicePrincipalMap = awsServices.reduce((map, service) => {
  const returnMap = map
  returnMap[service] = `${service}${principalBase}`
  return returnMap
}, {} as Record<AwsService, AwsServicePrincipal>)

class EasyServicePrincipal extends ServicePrincipal {

  static composite(services: AwsService[], opts?: ServicePrincipalOpts) {
    return new CompositePrincipal(...services.map(service => EasyServicePrincipal.fromServiceName(service, opts)) )
  }
  static fromServiceName(service: AwsService, opts?: ServicePrincipalOpts): EasyServicePrincipal {
    return new EasyServicePrincipal(servicePrincipalMap[service], opts)
  }
}

export {
  AwsServicePrincipal,
  EasyServicePrincipal,
  principalBase,
  servicePrincipalMap,
}
